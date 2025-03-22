"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TableRow {
  id: string
  [key: string]: any
}

interface ResponsiveTableProps {
  headers: string[]
  data: TableRow[]
  keyField: string
}

export default function ResponsiveTable({ headers, data, keyField }: ResponsiveTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows)
    if (expandedRows.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedRows(newExpanded)
  }

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header, index) => (
                <th key={index} className="border p-3 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row[keyField]} className="border-b">
                {headers.map((header, index) => (
                  <td key={index} className="border p-3">
                    {row[header.toLowerCase().replace(/\s+/g, "_")]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {data.map((row) => (
          <div key={row[keyField]} className="mb-4 border rounded-lg overflow-hidden">
            <div
              className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer"
              onClick={() => toggleRow(row[keyField])}
            >
              <div className="font-bold">{row[headers[0].toLowerCase().replace(/\s+/g, "_")]}</div>
              {expandedRows.has(row[keyField]) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>

            {expandedRows.has(row[keyField]) && (
              <div className="p-4">
                {headers.slice(1).map((header, index) => (
                  <div key={index} className="py-2 border-b last:border-b-0">
                    <div className="text-sm text-gray-500">{header}</div>
                    <div>{row[header.toLowerCase().replace(/\s+/g, "_")]}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}


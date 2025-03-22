import Image from "next/image"
import Link from "next/link"

interface SpeakerCardProps {
  name: string
  title: string
  image: string
  gradient: "primary-to-secondary" | "primary-to-accent"
}

export default function SpeakerCard({ name, title, image, gradient }: SpeakerCardProps) {
  return (
    <div className={`card bg-gradient-${gradient} text-white p-6 rounded-lg shadow-lg overflow-hidden`}>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-white mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={128} height={128} className="object-cover" />
        </div>
        <h3 className="text-xl font-bold text-center">{name}</h3>
        <p className="text-sm mt-1 text-center">{title}</p>
        <Link href={`/speakers#${name.toLowerCase().replace(/\s+/g, "-")}`} className="mt-4 text-sm underline">
          View Profile
        </Link>
      </div>
    </div>
  )
}


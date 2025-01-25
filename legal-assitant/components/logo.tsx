import { Scale } from 'lucide-react'
import  Link  from 'next/link'
export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Scale className="h-8 w-8 text-primary" />
      <Link href="http://localhost:3000/"><span className="text-xl font-bold">LegaLlama</span></Link>
    </div>
  )
}
interface BenefitCardProps {
  title: string
  description: string
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}


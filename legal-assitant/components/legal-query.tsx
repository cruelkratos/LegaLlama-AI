// @ts-nocheck
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function LegalQuery({ onSubmit }: { onSubmit: (query: string) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("query") as string
    onSubmit(query)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        name="query"
        placeholder="What is the punishment for theft...?"
        className="min-h-[150px]"
      />
      <Button type="submit" className="bg-black text-white hover:bg-gray-800">Submit Query</Button>
    </form>
  )
}
// @ts-nocheck
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function DocumentUpload({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Create a new FormData object from the form element
    const formData = new FormData(e.currentTarget)
    
    // Log the form data to ensure it contains the file and query
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Call the onSubmit function with the form data
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="document">Upload PDF Document</Label>
        <Input id="document" type="file" name="file" accept=".pdf" />
      </div>
      <div>
        <Label htmlFor="doc-query">Your Query</Label>
        <Textarea id="doc-query" name="query" placeholder="Is the format of this legal document correct...?" />
      </div>
      <Button type="submit" className="bg-black text-white hover:bg-gray-800">Analyze Document</Button>
    </form>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import ReactMarkdown from 'react-markdown';
import {Lightbulb} from 'lucide-react'
interface ResponseAreaProps {
  isLoading: boolean
  aiResponse: string
  redditSuggestions: string
}

export function ResponseArea({
  isLoading,
  aiResponse,
  redditSuggestions,
}: ResponseAreaProps) {
  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2">
      <Card>
        <CardHeader>
        <CardTitle className="flex items-center gap-20">
          <span>AI Assistant Response</span>
          <span className="flex items-center text-sm text-gray-500">
            <Lightbulb className="h-7 w-7 mr-1" />
            This section uses many legal documents and gives appropriate responses
          </span>
        </CardTitle>
          
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <ResponseSkeleton />
          ) : (
            <ReactMarkdown className="whitespace-pre-wrap">{aiResponse}</ReactMarkdown>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
        <CardTitle className="flex items-center gap-20">
          <span>Reddit Suggestions</span>
          <span className="flex items-center text-sm text-gray-500">
          <Lightbulb className="h-8 w-8 mr-1" />
            This section scraps reddit queries and the LLM validates these comments and gives suggestions.
          </span>
        </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <ResponseSkeleton />
          ) : (
            <ReactMarkdown className="whitespace-pre-wrap">{redditSuggestions}</ReactMarkdown>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function ResponseSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}
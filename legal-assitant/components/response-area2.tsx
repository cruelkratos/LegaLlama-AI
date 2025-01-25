// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import ReactMarkdown from 'react-markdown';
import {Lightbulb} from 'lucide-react'
interface ResponseAreaProps {
  isLoading: boolean
  aiResponse: string
  redditSuggestions: string
}

export function ResponseArea2({
  isLoading,
  aiResponse,
  redditSuggestions,
}: ResponseAreaProps) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white">
      <Card>
        <CardHeader>
        <CardTitle className="flex items-center gap-20">
          <span>AI Assistant Response</span>
          <span className="flex items-center text-sm text-gray-500">
          <Lightbulb className="h-8 w-8 mr-1" />
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
      {/* <Card>
        <CardHeader>
          <CardTitle>Reddit Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <ResponseSkeleton />
          ) : (
            <p className="whitespace-pre-wrap">{redditSuggestions}</p>
          )}
        </CardContent>
      </Card> */}
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
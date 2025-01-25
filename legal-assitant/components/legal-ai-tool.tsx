// @ts-nocheck
"use client"

import { useState } from "react"
import { Logo } from "./logo"
import { DocumentUpload } from "./document-upload"
import { LegalQuery } from "./legal-query"
import { ResponseArea } from "./response-area"
import { ResponseArea2 } from "./response-area2"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send } from "lucide-react"
import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import Link from "next/link"

export function LegalAITool() {
  const [activeTab, setActiveTab] = useState("legal-query")
  const [saveQ1,setQ1] = useState("")
  const [isDataAvailable, setIsDataAvailable] = useState(false)
  const [legalQueryState, setLegalQueryState] = useState({
    isLoading: false,
    aiResponse: "",
    redditSuggestions: "",
  })
  const [documentAnalysisState, setDocumentAnalysisState] = useState({
    isLoading: false,
    aiResponse: "",
    redditSuggestions: "",
  })
  const [redditUrl, setRedditUrl] = useState("")
  const [showAlert, setShowAlert] = useState(false);
  
  const handleSubmit = async (query: string) => {
    const setState = activeTab === "legal-query" ? setLegalQueryState : setDocumentAnalysisState
    setState((prev) => ({ ...prev, isLoading: true }))
    setIsDataAvailable(false)

    const data = { text: query }
    setQ1(query)
    try {
      const response = await fetch("http://localhost:5001/receive_query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()
      console.log("Response from server:", responseData)

      setIsDataAvailable(true)
      setState({
        isLoading: false,
        aiResponse: responseData.message1,
        redditSuggestions: responseData.message2,
      })
    } catch (error) {
      console.error("Error:", error)
      setIsDataAvailable(true)
      setState({
        isLoading: false,
        aiResponse: "An error occurred while processing your request.",
        redditSuggestions: "Please try again later.",
      })
    }
  }

  const handleFileSubmit = async (data: FormData) => {
    setDocumentAnalysisState((prev) => ({ ...prev, isLoading: true }))
    setIsDataAvailable(false)

    const query = data.get("query")
    const file = data.get("file") as File

    if (!query || !file) {
      setIsDataAvailable(true)
      setDocumentAnalysisState({
        isLoading: false,
        aiResponse: "Missing query or file",
        redditSuggestions: "",
      })
      return
    }

    const formData = new FormData()
    formData.append("query", query)
    formData.append("file", file)

    try {
      const response = await fetch("http://localhost:5001/receive_docs", {
        method: "POST",
        body: formData,
      })

      const responseData = await response.json()
      console.log("Response from server:", responseData)

      setIsDataAvailable(true)
      setDocumentAnalysisState({
        isLoading: false,
        aiResponse: responseData.message1,
        redditSuggestions: responseData.message2,
      })
    } catch (error) {
      console.error("Error:", error)
      setIsDataAvailable(true)
      setDocumentAnalysisState({
        isLoading: false,
        aiResponse: "An error occurred while processing your request.",
        redditSuggestions: "Please try again later.",
      })
    }
  }

  const handlePostToReddit = async () => {
    // Implement the logic to post to Reddit here
    console.log("Posting query to Reddit...");
    const masti = { text: saveQ1 };
  
    try {
      const response = await fetch("http://localhost:5001/post_to_reddit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(masti),
      });
      const responseData = await response.json()
      console.log("Reddit post response:", responseData);
      setRedditUrl(responseData.message1)
      setShowAlert(true);
    } catch (error) {
      console.error("Error posting to Reddit:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Logo />
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Tabs defaultValue="legal-query" className="space-y-6" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-1 border rounded-lg">
            <TabsTrigger
              value="legal-query"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md py-2 px-4 transition-all duration-300 ease-in-out"
            >
              Legal Query
            </TabsTrigger>
            <TabsTrigger
              value="document-analysis"
              className="data-[state=active]:bg-black data-[state=active]:text-white rounded-md py-2 px-4 transition-all duration-300 ease-in-out"
            >
              Document Analysis
            </TabsTrigger>
          </TabsList>
          <TabsContent value="legal-query" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Legal Query</h2>
              <LegalQuery onSubmit={handleSubmit} />
            </div>
          </TabsContent>
          <TabsContent value="document-analysis" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Document Analysis</h2>
              <DocumentUpload onSubmit={handleFileSubmit} />
            </div>
          </TabsContent>
        </Tabs>

        {activeTab === "legal-query" && (
          <ResponseArea
            isLoading={legalQueryState.isLoading}
            aiResponse={legalQueryState.aiResponse}
            redditSuggestions={legalQueryState.redditSuggestions}
          />
        )}
        {activeTab === "document-analysis" && (
          <div className="mx-auto">
            <ResponseArea2
              isLoading={documentAnalysisState.isLoading}
              aiResponse={documentAnalysisState.aiResponse}
              redditSuggestions={documentAnalysisState.redditSuggestions}
            />
          </div>
        )}

{isDataAvailable && activeTab === "legal-query" && (
  <div className="mt-6 text-center">
    <Button
      onClick={handlePostToReddit} // Attach the click handler here
      className="bg-[#FF5700] text-white hover:bg-[#d94e00] rounded-md px-4 py-2 shadow"
    >
      <Send /> Post Query to Reddit
    </Button>

    {/* {redditUrl && (
      <p> Posted Succesfully at: {redditUrl}</p>
    )} */}
  </div>
)}
      {showAlert && (
        <Alert className="max-w-sm mx-auto mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Posted to Reddit Successfully!</AlertTitle>
          <AlertDescription><Link href={redditUrl}>Link to the post</Link></AlertDescription>
        </Alert>
      )}
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2025 Legal AI Tool. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
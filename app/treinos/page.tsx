"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, FileText, Heart, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function TreinosPage() {
  const [codigo, setCodigo] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const buscarTreino = async () => {
    if (!codigo.trim()) {
      setError("Digite um código válido.")
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const caminhoHTML = `/treinos/${codigo.trim()}.html`

      // Busca o arquivo HTML do treino
      const response = await fetch(caminhoHTML)

      if (response.ok) {
        const html = await response.text()

        // Abre o treino em uma nova janela
        const novaJanela = window.open("", "_blank")
        if (novaJanela) {
          novaJanela.document.write(html)
          novaJanela.document.close()
          setSuccess(true)
          setCodigo("")
        }
      } else {
        setError("Treino não encontrado. Verifique o código e tente novamente.")
      }
    } catch (err) {
      setError("Erro ao buscar o treino. Verifique sua conexão e tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      buscarTreino()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]" />

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 p-0" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </Button>
        </div>

        <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-yellow-500/20 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-black" />
            </div>

            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Encontre seu treino
            </CardTitle>

            <p className="text-gray-300 mt-2">Digite o código fornecido para acessar seu treino personalizado</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Digite seu código"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20 h-12 text-lg"
                disabled={loading}
              />
            </div>

            <Button
              onClick={buscarTreino}
              disabled={loading || !codigo.trim()}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold h-12 text-lg group"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                  Buscando...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Buscar Treino
                </>
              )}
            </Button>

            {error && (
              <Alert className="border-red-500/50 bg-red-500/10">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <AlertDescription className="text-red-300">{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-500/50 bg-green-500/10">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <AlertDescription className="text-green-300">
                  Treino encontrado! O PDF foi aberto em uma nova aba.
                </AlertDescription>
              </Alert>
            )}

            <div className="text-center pt-4 border-t border-gray-700">
              <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Obrigado por fazer parte do nosso time</span>
              </div>
              <p className="text-gray-400 text-sm">Em caso de dúvidas, entre em contato via WhatsApp</p>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="mt-6 bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-yellow-400 font-semibold text-sm mb-1">Dica</h3>
                <p className="text-gray-300 text-sm">
                  Seu treino será aberto em uma nova aba. Salve a página para acessar offline.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

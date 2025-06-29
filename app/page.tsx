"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dumbbell,
  Clock,
  Target,
  Users,
  CheckCircle,
  MessageCircle,
  MapPin,
  Star,
  Zap,
  Trophy,
  ArrowRight,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollAnimations, setScrollAnimations] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const animarElementos = () => {
      const elementos = document.querySelectorAll(".animate-on-scroll")
      const trigger = window.innerHeight * 0.85

      elementos.forEach((el) => {
        const topo = el.getBoundingClientRect().top
        if (topo < trigger) {
          el.classList.add("animate-visible")
        }
      })
    }

    window.addEventListener("scroll", animarElementos)
    window.addEventListener("load", animarElementos)
    animarElementos()

    return () => {
      window.removeEventListener("scroll", animarElementos)
      window.removeEventListener("load", animarElementos)
    }
  }, [])

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Treinos Personalizados",
      description: "Adaptados ao seu tempo, local e objetivo específico",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexibilidade Total",
      description: "Treine quando e onde quiser, no seu ritmo",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suporte Contínuo",
      description: "Acompanhamento semanal e ajustes conforme evolução",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Resultados Garantidos",
      description: "Foco em emagrecimento, hipertrofia ou condicionamento",
    },
  ]

  const features = [
    "Treinos adaptados ao tempo e local que você tem",
    "Foco em emagrecimento, hipertrofia ou condicionamento",
    "Sem enrolação e com ajustes conforme sua evolução",
    "Suporte via WhatsApp durante todo o processo",
    "Planilhas detalhadas e fáceis de seguir",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />

        <div
          className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30">
            <Zap className="w-4 h-4 mr-2" />
            Transforme sua rotina de treino
          </Badge>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-tight">
            GALLI
            <br />
            TRAINING
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A assessoria online que vai <span className="text-yellow-400 font-semibold">transformar</span> sua rotina de
            treino com acompanhamento personalizado e resultados reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-6 text-lg group"
              asChild
            >
              <Link href="https://wa.me/55SEUNUMERO">
                <MessageCircle className="w-5 h-5 mr-2" />
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <Link href="/treinos">
                <Play className="w-5 h-5 mr-2" />
                Área do Aluno
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </section>

      {/* Local de Atendimento Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
            <div>
              <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                <MapPin className="w-4 h-4 mr-2" />
                Local de Atendimento
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Estamos disponíveis para atendimentos presenciais
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Oferecemos atendimentos presenciais nos seguintes horários:
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/20">
                  <span className="text-yellow-400 font-semibold flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Manhã
                  </span>
                  <span className="text-white font-medium">08:00 às 12:00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/20">
                  <span className="text-yellow-400 font-semibold flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Tarde
                  </span>
                  <span className="text-white font-medium">14:00 às 17:00</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative">
                <img
                  src="/logo/file.png"
                  alt="Local de trabalho Galli Training"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-yellow-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              <Users className="w-4 h-4 mr-2" />
              Quem Somos
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transformando vidas através do movimento
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Somos uma equipe dedicada ao bem-estar e desenvolvimento físico de nossos alunos. O projeto foi idealizado
              por um jovem apaixonado por treinos e saúde, atualmente cursando Educação Física, que busca transformar
              vidas por meio do conhecimento e da motivação. Nosso objetivo é oferecer suporte personalizado para cada
              aluno alcançar o seu melhor.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              <Star className="w-4 h-4 mr-2" />
              Benefícios
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Por que escolher a Galli Training?
            </h2>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Um acompanhamento totalmente online com treinos personalizados para você alcançar seu objetivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
            <div>
              <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                <Target className="w-4 h-4 mr-2" />
                Para quem é?
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Indicado para quem quer resultado com consistência
              </h2>

              <p className="text-gray-300 text-lg mb-8">
                Se você precisa de direção no treino e quer resultados reais, este programa é para você:
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-3xl blur-3xl" />
              <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-500/20 p-8 relative">
                <CardContent className="p-0 text-center">
                  <Dumbbell className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Metodologia Comprovada</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Treinos baseados em ciência do exercício, adaptados para sua realidade e objetivos específicos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10">
        <div className="container mx-auto px-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Pronto para começar sua transformação?
          </h2>

          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Os valores dos planos são informados diretamente pelo WhatsApp. Entre em contato e descubra qual plano é
            ideal para você.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-xl group"
            asChild
          >
            <Link href="https://wa.me/55SEUNUMERO">
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar com Galli
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Member Access */}
      <section className="py-20 border-t border-yellow-500/20">
        <div className="container mx-auto px-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-800">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            <Users className="w-4 h-4 mr-2" />
            Área Exclusiva
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Já faz parte do time?</h2>

          <p className="text-gray-300 text-lg mb-8">
            Acesse sua área exclusiva para encontrar seus treinos personalizados
          </p>

          <Button
            variant="outline"
            size="lg"
            className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-6 text-lg bg-transparent"
            asChild
          >
            <Link href="/treinos">
              <Play className="w-5 h-5 mr-2" />
              Acessar Treinos
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2025 Galli Training. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

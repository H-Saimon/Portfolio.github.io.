import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2 } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    languages: ["Java", "Python", "C#", "PHP", "JavaScript"],
    web: ["HTML5", "CSS3", "React", "Angular", "Tailwind CSS"],
    data: ["MySQL", "PostgreSQL", "SQL Server", "Power BI"],
    tools: ["Git", "GitHub", "Arduino", "ESP32", "Nuvem", "Protocolos IoT"],
  };

  const projects = [
    {
      title: "Sistema de Gerenciamento IoT",
      description:
        "Plataforma completa para monitoramento e controle de dispositivos IoT. Desenvolvida com Arduino/ESP32 e backend em Python, permitindo coleta de dados em tempo real e automação de processos.",
      tags: ["Arduino", "ESP32", "Python", "MySQL", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard de Análise de Dados",
      description:
        "Dashboard interativo desenvolvido em React com integração a Power BI. Apresenta métricas em tempo real, gráficos dinâmicos e exportação de relatórios em múltiplos formatos.",
      tags: ["React", "Power BI", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "API RESTful de Gestão de Usuários",
      description:
        "Backend robusto desenvolvido em Java com Spring Boot. Implementa autenticação JWT, validação de dados, tratamento de erros e documentação Swagger completa.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Aplicação Web de E-commerce",
      description:
        "Plataforma de e-commerce full-stack com frontend em Angular e backend em C#. Inclui carrinho de compras, integração de pagamento e painel administrativo.",
      tags: ["Angular", "C#", ".NET", "SQL Server", "Stripe"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-950">
              HS
            </div>
            <span className="text-sm text-slate-400">Software Engineer</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <span className="text-cyan-500">→</span>Sobre
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <span className="text-cyan-500">◆</span>Skills
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <span className="text-cyan-500">⬢</span>Projetos
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <span className="text-cyan-500">✉</span>Contato
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Button
              variant="outline"
              size="sm"
              className="text-xs border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
            >
              <FileText size={16} className="mr-1" />
              Currículo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-8 animate-in fade-in duration-1000">
            <div className="inline-block">
              <span className="text-cyan-400 text-sm font-mono tracking-widest">
                ◆ BEM-VINDO AO MEU PORTFÓLIO
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Hítalon Saimon
            </h1>

            <h2 className="text-2xl md:text-3xl text-cyan-400 font-light">
              Engenharia de Software & Soluções Tech
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              De Instrutor de Sistemas a Desenvolvedor. Unindo a experiência em
              suporte técnico e atendimento com a paixão por criar código
              eficiente e escalável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => scrollToSection(projectsRef)}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
              >
                <FileText size={18} className="mr-2" />
                Baixar Currículo
              </Button>
            </div>

            <div className="pt-12">
              <div className="text-slate-400 text-sm animate-bounce">
                ↓ SCROLL PARA EXPLORAR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 px-4 border-t border-slate-800 relative"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-cyan-500">◆</span> Sobre Mim
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              Sou um engenheiro de software apaixonado por criar soluções
              técnicas eficientes e escaláveis. Minha jornada começou como
              instrutor de sistemas no SENAI, onde desenvolvi habilidades
              sólidas em suporte técnico e comunicação clara.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Atualmente, estou cursando Engenharia de Software na UniAmérica,
              aprofundando meus conhecimentos em desenvolvimento de software,
              arquitetura de sistemas e boas práticas de engenharia.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Na Tel Telemática, como Instrutor e Operador de Suporte Alto
              Valor, consolidei a empatia com o usuário final e a capacidade de
              resolver problemas técnicos complexos de forma ágil e eficiente.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">FORMAÇÃO</h3>
                <p className="text-slate-300 font-medium">
                  Engenharia de Software
                </p>
                <p className="text-slate-500 text-sm">UniAmérica</p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">EXPERIÊNCIA</h3>
                <p className="text-slate-300 font-medium">
                  Instrutor & Suporte Alto Valor
                </p>
                <p className="text-slate-500 text-sm">Tel Telemática</p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">ESPECIALIDADE</h3>
                <p className="text-slate-300 font-medium">
                  Resolução Ágil de Problemas
                </p>
                <p className="text-slate-500 text-sm">
                  Comunicação Técnica Clara
                </p>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-cyan-500">●</span> EMPATIA COM USUÁRIO
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Desenvolvida através de anos como Instrutor de Sistemas e
                  Operador de Suporte Alto Valor na Tel Telemática. Entendo as
                  necessidades reais do usuário final.
                </p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-cyan-500">●</span> COMUNICAÇÃO TÉCNICA
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Capacidade de explicar conceitos técnicos complexos de forma
                  clara e acessível, facilitando a colaboração entre equipes e
                  stakeholders.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="py-20 px-4 border-t border-slate-800 bg-slate-800/30"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-cyan-500">◆</span> Hard Skills
              </h2>
              <p className="text-slate-400">
                Tecnologias e ferramentas que utilizo para criar soluções
                eficientes e escaláveis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                  <span>◇</span> Linguagens
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                  <span>◈</span> Web
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.web.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                  <span>◆</span> Dados
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.data.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                  <span>⬢</span> Ferramentas & Infra
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="py-20 px-4 border-t border-slate-800"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-cyan-500">◆</span> Projetos em Destaque
              </h2>
              <p className="text-slate-400">
                Seleção de projetos que demonstram minha capacidade técnica e
                experiência em diferentes áreas da engenharia de software.
              </p>
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 p-8 hover:border-cyan-500 transition-colors group"
                >
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                    >
                      <Code2 size={16} className="mr-2" />
                      Ver no GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Visitar projeto
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-slate-400 mb-4">
                Quer ver mais projetos? Confira meu perfil no GitHub para
                acessar meu portfólio completo.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold">
                Ver Todos os Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 px-4 border-t border-slate-800 bg-slate-800/30"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-cyan-500">◆</span> Vamos Conversar?
              </h2>
              <p className="text-slate-400">
                Estou sempre aberto a novas oportunidades, colaborações e
                conversas sobre tecnologia. Sinta-se livre para entrar em
                contato comigo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:border-cyan-500 transition-colors group cursor-pointer">
                <Github className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Confira meus projetos e contribuições open source
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                >
                  Ver Perfil
                </Button>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:border-cyan-500 transition-colors group cursor-pointer">
                <Linkedin className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Conecte-se comigo e acompanhe minha trajetória profissional
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                >
                  Conectar
                </Button>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:border-cyan-500 transition-colors group cursor-pointer">
                <Mail className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Envie-me uma mensagem diretamente
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                >
                  Enviar Email
                </Button>
              </Card>
            </div>

            <div className="text-center pt-8">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8">
                <FileText size={18} className="mr-2" />
                Baixar Currículo em PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 bg-slate-950">
        <div className="container mx-auto text-center space-y-2">
          <p className="text-slate-500 text-sm">
            © 2024 Hítalon Saimon. Desenvolvido exclusivamente por Hítalon Saimon.
          </p>
          <p className="text-slate-600 text-xs">
            Desenvolvido com React & Tailwind CSS | GitHub: @H-Saimon
          </p>
        </div>
      </footer>
    </div>
  );
}

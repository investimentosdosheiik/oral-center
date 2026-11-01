import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const heroImg = "/images/recepcao.webp";
const aboutImg = "/images/entrada.webp";

const WA_MSG = "Olá! Gostaria de informações e agendar uma avaliação na Oral Center.";
const WA = `https://wa.me/5591985050440?text=${encodeURIComponent(WA_MSG)}`;
const TEL = "tel:+5591985050440";
const PHONE = "+55 91 98505-0440";
const ADDRESS = "Tv. Barão do Triunfo, 3540, sala 303 — Marco, Belém-PA, CEP 66095-055";
const MAPS =
  "https://www.google.com/maps/place/Clinica+odontol%C3%B3gica+Oral+Center+-+Tv.+Bar%C3%A3o+do+Triunfo,+3540+-+sala:+303+-+Marco,+Bel%C3%A9m+-+PA,+66095-055/@-1.4366301,-48.4574959,15z/data=!4m6!3m5!1s0x92a48d92218b9fa9:0x4d351d2f040c1e0!8m2!3d-1.4366301!4d-48.4574959!16s%2Fg%2F11v6frg952";
const ROUTE = "https://www.google.com/maps/dir/?api=1&destination=-1.4366301,-48.4574959";
const EMBED = "https://www.google.com/maps?q=-1.4366301,-48.4574959&z=16&output=embed";

const TITLE = "Clínica Odontológica Oral Center | Dentista no Marco, Belém-PA";
const DESC =
  "Clínica Odontológica Oral Center em Belém-PA, bairro Marco. Avaliação, prevenção e cuidados odontológicos com atendimento acolhedor. Agende pelo WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Clínica Odontológica Oral Center",
  telephone: "+55-91-98505-0440",
  url: MAPS,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tv. Barão do Triunfo, 3540, sala 303",
    addressLocality: "Belém",
    addressRegion: "PA",
    postalCode: "66095-055",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -1.4366301, longitude: -48.4574959 },
  areaServed: "Belém-PA",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "BR-PA" },
      { name: "geo.placename", content: "Belém" },
      { name: "geo.position", content: "-1.4366301;-48.4574959" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
    </svg>
  );
}

function WaButton({ children = "Agendar pelo WhatsApp", size = "lg" }: { children?: React.ReactNode; size?: "sm" | "lg" }) {
  return (
    <Button asChild variant="whatsapp" size={size === "lg" ? "lg" : "default"} className={`${size === "lg" ? "h-12 px-6 text-sm" : "h-11 px-4 text-sm"} rounded-full font-semibold whitespace-normal text-center`}>
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WaIcon />
      {children}
    </a>
    </Button>
  );
}

const NAV = [
  ["#sobre", "A clínica"],
  ["#cuidados", "Cuidados"],
  ["#diferenciais", "Diferenciais"],
  ["#avaliacoes", "Avaliações"],
  ["#contato", "Contato"],
  ["#faq", "Dúvidas"],
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3">
        <a href="#inicio" className="leading-none" aria-label="Oral Center — início">
          <span className="block font-display text-2xl font-semibold text-primary">Oral Center</span>
          <span className="eyebrow text-[0.6rem]">Clínica Odontológica</span>
        </a>
        <nav aria-label="Principal" className="hidden gap-5 text-sm font-medium text-foreground lg:flex">
          {NAV.map(([h, l]) => (
            <a key={h} href={h} className="transition hover:text-primary">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WaButton size="sm">Agendar</WaButton>
          <Button variant="ghost" size="icon"
            type="button"
            className="rounded-md p-2 text-primary lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </Button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {NAV.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2.5 font-medium text-foreground">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

const CARE = [
  ["Avaliação odontológica", "Uma conversa atenta e um exame cuidadoso para entender sua saúde bucal e orientar os próximos passos."],
  ["Prevenção", "Orientações e acompanhamento para ajudar a manter dentes e gengivas saudáveis ao longo do tempo."],
  ["Cuidados odontológicos", "Atendimento para as necessidades do seu sorriso, sempre definido após avaliação individual."],
];

const DIFF = [
  ["Escuta atenta", "Tempo para ouvir suas dúvidas e explicar cada etapa com clareza."],
  ["Ambiente acolhedor", "Um espaço pensado para que você se sinta à vontade durante a consulta."],
  ["Localização central", "No bairro do Marco, em Belém, com acesso prático pela Tv. Barão do Triunfo."],
  ["Agendamento simples", "Fale com a clínica diretamente pelo WhatsApp, sem complicação."],
];

const FAQ = [
  ["Como faço para agendar uma avaliação?", "O jeito mais rápido é pelo WhatsApp (91) 98505-0440. Basta tocar em qualquer botão de agendamento nesta página e enviar a mensagem."],
  ["Onde fica a clínica?", `A Oral Center fica na ${ADDRESS}.`],
  ["Quais são os horários de atendimento?", "Para confirmar dias e horários disponíveis, entre em contato pelo WhatsApp ou telefone. A equipe informará as opções atualizadas."],
  ["A clínica atende convênios?", "Informações sobre formas de pagamento e convênios devem ser confirmadas diretamente com a clínica pelo WhatsApp."],
  ["Que tratamentos são realizados?", "Cada caso é avaliado individualmente. Na consulta de avaliação, a equipe orienta sobre os cuidados indicados para você."],
];

function Index() {
  return (
    <div className="clinic-page min-h-screen bg-background text-foreground">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-16">
            <div>
              <p className="eyebrow">Odontologia em Belém · Marco</p>
              <h1 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
                Seu sorriso cuidado com <em className="text-gold">atenção</em> e acolhimento.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Na Clínica Odontológica Oral Center, cada consulta começa com escuta e uma avaliação cuidadosa, em um ambiente tranquilo e acolhedor.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <WaButton>Agendar avaliação</WaButton>
                <a href={TEL} className="px-2 py-3 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                  Ligar: {PHONE}
                </a>
              </div>
              <a href="#avaliacoes" className="mt-6 inline-flex items-center gap-3 text-xs leading-relaxed text-muted-foreground">
                <span className="text-gold" aria-hidden="true">★★★★★</span>
                <span><strong className="text-primary">4,9/5</strong> · 34 avaliações em perfil público</span>
              </a>
            </div>
            <div className="min-w-0">
              <img
                src={heroImg}
                 alt="Recepção real da Clínica Oral Center com o letreiro da clínica"
                 width={480}
                 height={293}
                fetchPriority="high"
                 className="aspect-[3/2] w-full rounded-lg object-cover shadow-elegant"
              />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="bg-secondary py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <img src={aboutImg} alt="Entrada real da sala 303 da Clínica Oral Center" width={240} height={309} loading="lazy" className="aspect-[2/3] w-full max-w-xs justify-self-center rounded-lg object-cover shadow-elegant" />
            <div className="max-w-lg">
              <p className="eyebrow">A clínica</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">Cuidado próximo, no coração do Marco.</h2>
              <span className="gold-rule mt-6" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A Oral Center é uma clínica odontológica em Belém-PA dedicada a oferecer um atendimento humano e atencioso. Acreditamos que cuidar do sorriso começa por ouvir cada paciente.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Estamos na Tv. Barão do Triunfo, 3540, sala 303. Entre em contato para conhecer a clínica e agendar sua avaliação.
              </p>
              <div className="mt-8"><WaButton size="sm">Falar com a clínica</WaButton></div>
            </div>
          </div>
        </section>

        {/* Cuidados */}
        <section id="cuidados" className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Cuidados" title="Como podemos ajudar" text="O cuidado ideal é definido após uma avaliação individual. Conheça as frentes do nosso atendimento." />
            <div className="grid items-stretch gap-5 md:grid-cols-3">
              {CARE.map(([t, d], i) => (
                <article key={t} className="rounded-lg border border-border bg-background p-7 transition-shadow hover:shadow-elegant">
                  <span className="font-display text-3xl text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-primary">{t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center"><WaButton>Agendar minha avaliação</WaButton></div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="bg-secondary py-14 text-foreground md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Diferenciais" title="O que buscamos em cada atendimento" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {DIFF.map(([t, d]) => (
                <div key={t} className="border-t border-border pt-6">
                  <span className="gold-rule" />
                  <h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="estrutura" className="bg-background py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="A Oral Center" title="Um pouco da nossa estrutura" />
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { src: heroImg, caption: "Recepção", alt: "Recepção da Oral Center com o letreiro da clínica" },
                { src: aboutImg, caption: "Entrada · sala 303", alt: "Entrada da sala 303 da Oral Center" },
                { src: "/images/instrumentos.webp", caption: "Instrumentos odontológicos", alt: "Bandeja de instrumentos odontológicos da Oral Center" },
              ].map((photo) => (
                <figure key={photo.src} className="min-w-0 overflow-hidden rounded-lg border border-border bg-card">
                  <div className="flex aspect-[4/3] items-center justify-center bg-secondary">
                    <img src={photo.src} alt={photo.alt} loading="lazy" className={`${photo.src === "/images/instrumentos.webp" ? "" : "gallery-photo "}h-full w-full object-contain`} />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-medium text-foreground">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Avaliações */}
        <section id="avaliacoes" className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p className="eyebrow">Avaliações</p>
            <p className="mt-6 font-display text-7xl font-semibold text-primary md:text-8xl">4,9<span className="text-3xl text-muted-foreground">/5</span></p>
            <p className="mt-2 text-2xl text-gold" aria-label="Nota 4,9 de 5 estrelas">★★★★★</p>
            <p className="mt-4 text-lg text-foreground">34 avaliações</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Informação encontrada no perfil público da clínica no Google. Os dados podem variar com o tempo.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                Ver avaliações no Google
              </a>
              <WaButton size="sm" />
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-secondary py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="Contato" title="Venha nos visitar" />
            <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
              <div className="space-y-6 py-2 lg:pr-8">
                <div>
                  <h3 className="eyebrow">Endereço</h3>
                  <address className="mt-2 not-italic leading-relaxed text-foreground">
                    Tv. Barão do Triunfo, 3540, sala 303<br />Marco, Belém-PA<br />CEP 66095-055
                  </address>
                </div>
                <div>
                  <h3 className="eyebrow">Telefone e WhatsApp</h3>
                  <a href={TEL} className="mt-2 block text-lg font-semibold text-primary hover:underline">{PHONE}</a>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <WaButton size="sm">Agendar pelo WhatsApp</WaButton>
                  <a href={ROUTE} target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary px-5 py-2.5 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                    Traçar rota no Google Maps
                  </a>
                </div>
              </div>
              <iframe
                title="Mapa da localização da Clínica Odontológica Oral Center"
                src={EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full rounded-lg border-0 lg:h-full lg:min-h-[380px]"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" />
            <div className="divide-y divide-border border-y border-border">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold text-primary">
                    {q}
                    <span className="text-2xl text-gold transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-secondary py-14 text-center text-foreground md:py-20">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Pronto para cuidar do seu sorriso?</h2>
            <p className="mt-4 text-muted-foreground">Envie uma mensagem e agende sua avaliação na Oral Center.</p>
            <div className="mt-8"><WaButton /></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-10 text-muted-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 text-sm md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-foreground">Oral Center</p>
            <p className="eyebrow mt-1 text-[0.6rem]">Clínica Odontológica</p>
          </div>
          <address className="not-italic leading-relaxed">{ADDRESS}</address>
          <div className="space-y-1 md:text-right">
            <a href={TEL} className="block hover:text-foreground">{PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="block hover:text-foreground">WhatsApp</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Clínica Odontológica Oral Center · Belém-PA</p>
      </footer>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition hover:scale-105"
      >
        <WaIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

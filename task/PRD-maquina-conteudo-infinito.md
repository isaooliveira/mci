# PRD — Página de Vendas: Máquina de Conteúdo Infinito

**Versão:** 1.0  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion  
**Prioridade:** Mobile-first, 100% responsivo  
**Entrega:** Single-page, sem navegação externa, sem links de saída exceto o CTA de compra

---

## 1. Visão Geral

Página de vendas long-form para o produto digital **Máquina de Conteúdo Infinito** — R$ 67. Produto voltado para criadoras de conteúdo que usam IA mas não têm um processo de criação estruturado.

**Objetivo único da página:** converter o visitante em comprador via um único CTA repetido em 4 pontos estratégicos.

**Público:** Mulheres, 25–42 anos, criadoras de conteúdo com negócio digital ou serviço, usuárias de ChatGPT, consciência de problema alta (ruminam sobre postar todo dia), consciência de solução baixa (não conhecem o Claude).

---

## 2. Design System

### 2.1 Paleta de Cores

```css
:root {
  --color-bg:        #090909;   /* fundo principal — quase preto */
  --color-primary:   #832C0C;   /* vermelho-terra — destaques estruturais */
  --color-accent:    #E16B31;   /* laranja vibrante — CTAs, hovers, highlights */
  --color-text:      #FFFFFF;   /* texto principal */
  --color-text-muted:#A89990;   /* texto secundário, micro-copy */
  --color-surface:   #111111;   /* cards, blocos de conteúdo */
  --color-border:    #2A1A14;   /* bordas sutis */
  --color-gradient-start: #832C0C;
  --color-gradient-end:   #E16B31;
}
```

**Regra de uso:**
- `#090909` — fundo de todas as seções
- `#832C0C` — bordas de destaque, badges, elementos estruturais secundários
- `#E16B31` — todos os botões CTA, hovers, sublinhados de destaque, ícones ativos
- `#FFFFFF` — headlines, body copy, texto de alta importância
- `#A89990` — micro-copy, labels, textos de suporte

### 2.2 Tipografia

```css
/* Display — headlines principais */
font-family: 'Bebas Neue', sans-serif;
/* Google Fonts: https://fonts.google.com/specimen/Bebas+Neue */

/* Body — parágrafos e copy */
font-family: 'DM Sans', sans-serif;
/* Google Fonts: https://fonts.google.com/specimen/DM+Sans */

/* Mono — labels técnicos, badges */
font-family: 'JetBrains Mono', monospace;
/* Google Fonts: https://fonts.google.com/specimen/JetBrains+Mono */
```

**Escala tipográfica (mobile → desktop):**

| Token | Mobile | Desktop | Uso |
|---|---|---|---|
| `text-display-xl` | 48px / bold | 80px / bold | Headline hero |
| `text-display-lg` | 36px / bold | 56px / bold | Headlines de seção |
| `text-display-md` | 28px / bold | 40px / bold | Sub-headlines |
| `text-body-lg` | 18px / 1.7 | 20px / 1.8 | Parágrafos principais |
| `text-body-md` | 16px / 1.6 | 17px / 1.7 | Body copy padrão |
| `text-label` | 12px / mono | 13px / mono | Labels, badges |

### 2.3 Espaciamento

Sistema de 8px. Seções com `padding-y: 80px` mobile, `padding-y: 120px` desktop. Container máximo: `max-w-3xl` (768px) centralizado — página long-form focada em leitura, não em largura.

### 2.4 Componentes de Base

**Botão CTA Principal:**
```
background: linear-gradient(135deg, #832C0C, #E16B31)
color: #FFFFFF
font: Bebas Neue, 20px, letter-spacing: 0.08em
padding: 20px 48px
border-radius: 4px
box-shadow: 0 0 40px rgba(225, 107, 49, 0.3)
hover: brightness(1.1) + box-shadow intensifica
active: scale(0.98)
transition: all 0.2s ease
width: 100% no mobile
```

**Card de benefício / item:**
```
background: #111111
border: 1px solid #2A1A14
border-left: 3px solid #E16B31
border-radius: 4px
padding: 20px 24px
```

**Badge / Label:**
```
font: JetBrains Mono, 11px, uppercase, letter-spacing: 0.12em
color: #E16B31
border: 1px solid #832C0C
border-radius: 2px
padding: 4px 10px
```

**Separador de seção:**
```
border: none
height: 1px
background: linear-gradient(90deg, transparent, #832C0C, transparent)
margin: 0 auto
max-width: 200px
```

### 2.5 Efeitos Visuais

**Textura de fundo (grain):**
```css
/* Overlay SVG noise em todas as seções */
background-image: url("data:image/svg+xml,..."); /* noise filter */
opacity: 0.04;
pointer-events: none;
```

**Glow nos CTAs:**
```css
box-shadow: 0 0 60px rgba(225, 107, 49, 0.25);
```

**Destaque de texto em laranja:**
```css
/* Usado em palavras-chave dentro de headlines */
color: #E16B31;
```

**Linha decorativa vertical (lateral esquerda nos cards de passo):**
```css
border-left: 2px solid #E16B31;
padding-left: 20px;
```

---

## 3. Arquitetura de Componentes

```
app/
├── page.tsx                    ← página principal (server component)
├── layout.tsx                  ← meta tags, fonts, analytics
└── components/
    ├── HeroSection.tsx
    ├── ProblemSection.tsx
    ├── SolutionSection.tsx
    ├── BenefitsSection.tsx
    ├── ProofSection.tsx
    ├── OfferSection.tsx
    ├── FaqSection.tsx
    ├── FinalCtaSection.tsx
    ├── ui/
    │   ├── CtaButton.tsx
    │   ├── SectionBadge.tsx
    │   ├── BenefitItem.tsx
    │   ├── TestimonialCard.tsx
    │   ├── FaqItem.tsx
    │   └── SectionDivider.tsx
    └── layout/
        ├── StickyBar.tsx       ← barra flutuante mobile com CTA
        └── NoiseOverlay.tsx    ← textura grain global
```

---

## 4. Especificação de Seções

### 4.1 HERO SECTION

**Objetivo:** Parar o scroll. Criar identificação imediata. Converter visitantes prontos.

**Layout mobile:**
```
[BADGE: "ACESSO IMEDIATO"]

[HEADLINE — Bebas Neue, 48px, branco]
A ferramenta que transforma
qualquer ideia solta em roteiro
pronto para gravar em menos
de 5 minutos

[SUB-HEADLINE — DM Sans, 18px, #A89990]
Se você já usa o ChatGPT e ainda perde horas
tentando descobrir o que postar, o problema
não é você. Existe uma IA chamada Claude que
faz isso de um jeito que o ChatGPT não
consegue — e você começa a usar pelo plano
gratuito dela hoje.

[ESPAÇO PARA IMAGEM DO PRODUTO]
→ Mock: notebook aberto mostrando tela do Claude
→ com roteiro visível, dedo apontando para a tela
→ Dimensões: 100% width, aspect-ratio 16/9
→ border: 1px solid #2A1A14
→ border-radius: 8px

[CTA BUTTON — full width]
Quero a Máquina de Conteúdo Infinito por R$ 67

[MICRO-COPY — centralizado, #A89990, 13px]
Acesso imediato. Você instala hoje e usa hoje.

[TRUST BAR — 3 ícones inline]
🔒 Pagamento seguro  ·  ⚡ Acesso imediato  ·  ↩️ Garantia 7 dias
```

**Animações:**
- Headline: fade-in + slide-up, delay 0ms
- Sub-headline: fade-in + slide-up, delay 150ms
- Imagem: fade-in + scale from 0.96, delay 100ms
- CTA: fade-in + slide-up, delay 300ms
- Trust bar: fade-in, delay 400ms

**Background hero:**
```css
background: radial-gradient(ellipse at 50% 0%, #2A1A14 0%, #090909 60%);
```

---

### 4.2 PROBLEM SECTION

**Objetivo:** Fazer a leitora se reconhecer. Criar identificação com a dor antes de oferecer solução.

**Badge:** `[ O PROBLEMA ]`

**Layout:**
```
[BADGE]

[HEADLINE — Bebas Neue, 36px]
Você abre o ChatGPT.
O resultado? Zero conteúdo.

[CORPO — DM Sans, 17px, espaçamento generoso]
Blocos de parágrafo com espaçamento entre eles.
Máximo 3-4 linhas por bloco no mobile.
Última frase do bloco sempre a mais forte — curta e direta.

Trecho final em destaque visual:
```

**Card de destaque (último parágrafo):**
```
background: #111111
border-left: 3px solid #E16B31
padding: 24px
border-radius: 4px

"Não porque você não tem o que falar.
Porque você não tem o processo que
transforma o que está na sua cabeça
em roteiro pronto para gravar."
```

**Copy exata** (do documento md, sem alterações):

> Você abre o ChatGPT. Digita: "me dá ideias de conteúdo sobre [seu assunto]."
>
> Ele devolve 10 ideias genéricas que qualquer pessoa no seu nicho poderia ter escrito. Você olha, fecha, e segue sem postar.
>
> Ou pior: você pede um roteiro. Ele escreve um texto que parece robô. Você edita por 40 minutos tentando fazer parecer seu. Desiste. Vai fazer outra coisa.
>
> O problema não é a ferramenta. É que você está usando ela errada.
>
> ChatGPT sem um processo configurado é como uma cozinha cheia de ingredientes sem receita. Você fica olhando pra tudo sem saber por onde começar.
>
> Enquanto isso, você sabe que conteúdo traz cliente. Que quem aparece vende. Que a consistência constrói a autoridade que o seu negócio precisa.
>
> Mas o dia vai embora. Mais uma semana sem postar o que planejou. Mais um mês de presença irregular.
>
> Não porque você não tem o que falar. Porque você não tem o processo que transforma o que está na sua cabeça em roteiro pronto para gravar.

---

### 4.3 SOLUTION SECTION

**Objetivo:** Apresentar o produto como a solução óbvia. Introduzir o Claude sem fricção.

**Badge:** `[ A SOLUÇÃO ]`

**Headline:** "Uma configuração. Uma vez. Para sempre."

**Introdução do Claude** — bloco visual destacado:
```
background: linear-gradient(135deg, #111111, #1A0F0A)
border: 1px solid #832C0C
border-radius: 8px
padding: 24px
margin: 32px 0

[ícone de IA / sparkle em #E16B31]
"O Claude é uma IA com plano gratuito..."
[texto explicativo em DM Sans 16px]
```

**Os 3 passos** — layout vertical mobile:
```
[PASSO 1]
┌─────────────────────────────┐
│ [01]                        │  ← número em Bebas Neue 48px, #E16B31, opacity 0.3
│ Você joga qualquer          │
│ ideia solta                 │  ← título em Bebas Neue 24px
│                             │
│ "Quero falar sobre          │
│ procrastinação." "Minha     │  ← copy em DM Sans 16px, #A89990
│ cliente passou por isso."   │
└─────────────────────────────┘

[linha vertical conectora — 2px, #2A1A14, height 24px]

[PASSO 2] — mesmo padrão

[PASSO 3] — mesmo padrão, border-left: 2px solid #E16B31
```

**Copy exata dos passos** (do documento md):

Passo 1: "Você joga qualquer ideia solta" / "Quero falar sobre procrastinação." "Minha cliente passou por isso." "Vi um conselho horrível semana passada e quero rebater." / Qualquer coisa. Não precisa estar organizada.

Passo 2: "A máquina devolve 10 ângulos diferentes" / 10 formas distintas de entrar nesse tema. Você lê, escolhe o que faz mais sentido para o momento, e em um clique gera a tese do conteúdo: o argumento central, a virada, a lógica que vai fazer a pessoa parar de rolar.

Passo 3: "Sai o roteiro completo" / Hook de texto. Hook falado. Desenvolvimento em camadas. CTA. Legenda. Hashtags. / Pronto para gravar.

**Fechamento da seção:**
```
[linha divisória]

"Da ideia ao roteiro: menos de 5 minutos.
Repete o processo: mais 5 minutos, mais um roteiro.
Em uma tarde, você tem 30 conteúdos prontos."

→ Texto em DM Sans 18px, itálico, centralizado
→ border-top e border-bottom: 1px solid #2A1A14
→ padding: 32px 0
```

---

### 4.4 BENEFITS SECTION

**Objetivo:** Consolidar o desejo. Tornar o valor tangível e específico.

**Badge:** `[ O QUE MUDA ]`

**Headline:** "O que muda no seu dia a dia"

**Layout dos benefícios — lista vertical, card por item:**

```
┌──────────────────────────────────┐
│ ✓  Você nunca mais trava na      │
│    frente da tela em branco      │  ← título em DM Sans 17px, bold, branco
│                                  │
│    porque o processo começa com  │
│    qualquer ideia, por mais      │  ← descrição em 15px, #A89990
│    solta que esteja              │
└──────────────────────────────────┘
```

**Ícone ✓:** círculo preenchido #E16B31, checkmark branco dentro. Tamanho 24px.

**7 benefícios** — copy exata do documento md:
1. Você nunca mais trava na frente da tela em branco — porque o processo começa com qualquer ideia, por mais solta que esteja
2. 10 ângulos diferentes para o mesmo tema em segundos — sem você ficar ruminando como entrar no assunto
3. Roteiro completo em menos de 5 minutos — hook, desenvolvimento, CTA, legenda e hashtags, no seu jeito de falar
4. 30 conteúdos prontos em uma tarde — você grava em lote e programa a semana inteira de uma vez
5. Funciona com qualquer tema, qualquer dia — não importa se você está inspirada ou não
6. Seu jeito de falar, não jeito de robô — o processo é configurado para o seu nicho e sua voz, não para um público genérico
7. Começa a usar hoje, no plano gratuito do Claude — sem pagar nada além dos R$ 67 desse processo

**CTA intermediário após benefits:**
```
[CTA BUTTON — full width]
Quero a Máquina de Conteúdo Infinito por R$ 67

[MICRO-COPY]
Qualquer nicho. Qualquer formato. Plano gratuito do Claude já resolve.
```

---

### 4.5 PROOF SECTION

**Objetivo:** Reduzir ceticismo com prova social específica.

**Badge:** `[ RESULTADOS ]`

**Headline:** "Quem já usa"

**Cards de depoimento:**
```
┌──────────────────────────────────┐
│ ❝                                │  ← aspas em Bebas Neue 48px, #E16B31, opacity 0.4
│                                  │
│ "Eu usava o ChatGPT todo dia e   │
│  continuava travando. Não era a  │  ← DM Sans 16px, #FFFFFF, itálico
│  ferramenta..."                  │
│                                  │
│ ── [Nome], [nicho]               │  ← DM Sans 14px, #A89990
└──────────────────────────────────┘
```

**Background card:** `#111111` com borda `1px solid #2A1A14`

**Placeholder para 3–5 depoimentos.** Deixar comentário no código: `{/* TODO: inserir depoimentos reais */}`

**Copy dos depoimentos placeholder** (do documento md):
- "Eu usava o ChatGPT todo dia e continuava travando. Não era a ferramenta, era que eu não sabia como usar direito. Instalei o processo, joguei um tema, e em 6 minutos tava com 4 roteiros na mão. Gravei tudo no mesmo dia." — [Nome], [nicho]
- "Parece idiota falar, mas eu ficava 1 hora criando um conteúdo. Agora faço 8 em uma hora. Minha frequência mudou completamente e as pessoas começaram a me perguntar como eu posta tanto." — [Nome], [nicho]

---

### 4.6 OFFER SECTION

**Objetivo:** Construir valor percebido antes de revelar o preço. Remover o risco.

**Badge:** `[ O QUE VOCÊ RECEBE ]`

**Headline:** "Tudo que está incluído"

**Stack de itens do produto:**

```
┌──────────────────────────────────┐
│ [ícone] A Máquina de Conteúdo   │
│         Infinito                 │  ← DM Sans 18px bold, branco
│                                  │
│ O processo completo instalado    │
│ no seu Claude. Em 3 passos:      │  ← DM Sans 15px, #A89990
│ você joga a ideia, escolhe o     │
│ ângulo, sai o roteiro...         │
└──────────────────────────────────┘

[item 2 — Guia de instalação]
[item 3 — Banco de 50 temas]
```

**Bloco de preço:**
```
[linha divisória]

background: linear-gradient(135deg, #111111, #1A0F0A)
border: 1px solid #832C0C
border-radius: 8px
padding: 40px 24px
text-align: center

"Tudo isso por:"
[DM Sans 16px, #A89990]

"R$ 67"
[Bebas Neue, 72px, #FFFFFF + text-shadow: 0 0 40px rgba(225,107,49,0.4)]

"Acesso vitalício. Sem mensalidade. Sem renovação.
Paga uma vez, usa para sempre."
[DM Sans 14px, #A89990]
```

**Bloco de garantia:**
```
background: #111111
border: 1px solid #2A1A14
border-radius: 8px
padding: 24px
display: flex
gap: 16px

[ícone escudo — #E16B31, 40px]

"Garantia de 7 dias."
[Bebas Neue 24px, branco]

"Instala, usa, e se achar que não valeu cada
centavo, manda mensagem. Devolvo tudo sem
perguntar nada. Mas acho que você não vai pedir."
[DM Sans 15px, #A89990]
```

**CTA principal da oferta:**
```
[CTA BUTTON — full width, maior]
Quero a Máquina por R$ 67

[MICRO-COPY]
Pagamento seguro. Acesso imediato após confirmação.
```

---

### 4.7 FAQ SECTION

**Objetivo:** Eliminar objeções finais. Responder sobre o Claude especificamente.

**Badge:** `[ DÚVIDAS ]`

**Headline:** "Perguntas frequentes"

**Componente FAQ — accordion:**
```
[item fechado]
┌──────────────────────────────────┐
│ O que é o Claude? Preciso        │
│ abandonar o ChatGPT?        [+]  │
└──────────────────────────────────┘

[item aberto]
┌──────────────────────────────────┐
│ O que é o Claude? Preciso        │
│ abandonar o ChatGPT?        [−]  │
├──────────────────────────────────┤
│ O Claude é uma IA que também     │
│ disponibiliza o plano inicial    │
│ gratuito...                      │
└──────────────────────────────────┘
```

**Ícone +/−:** cor `#E16B31`
**Animação:** height de 0 para auto com transition 300ms ease

**7 perguntas** — copy exata do documento md:

1. **O que é o Claude? Preciso abandonar o ChatGPT?** — O Claude é uma IA que também disponibiliza o plano inicial gratuito, parecida com o ChatGPT, mas que segue processos configurados de um jeito muito mais preciso. Você não precisa abandonar nada. Cria a conta no Claude em 3 minutos e usa as duas ferramentas quando quiser.

2. **Preciso pagar alguma assinatura do Claude para usar?** — Não. O Claude tem plano gratuito e ele resolve. O guia de instalação já inclui o passo a passo para criar sua conta do zero.

3. **Preciso saber de tecnologia para instalar?** — Não. O guia tem print de cada tela. Se você sabe copiar e colar, você instala em 10 minutos.

4. **Funciona para qualquer nicho?** — Sim. O processo é configurado com o seu tema. Funciona para coach, terapeuta, loja, profissional de saúde, educador, prestador de serviço — qualquer pessoa que cria conteúdo.

5. **Por que o ChatGPT não faz isso sozinho?** — Faz, mas mal. Sem um processo configurado, ele gera conteúdo genérico que parece qualquer pessoa. O que você está comprando é a lógica de criação que faz a ferramenta trabalhar do jeito certo, com a sua voz e para o seu público. O Claude executa esse processo de um jeito que o ChatGPT não acompanha.

6. **Quanto tempo leva para criar um roteiro do zero?** — Entre 3 e 8 minutos. Para gerar 30 roteiros, separa uma tarde tranquila.

7. **Esse processo expira ou fica desatualizado?** — Não. Você instala uma vez e usa enquanto quiser. Se houver atualização importante, você recebe.

---

### 4.8 FINAL CTA SECTION

**Objetivo:** Fechamento emocional. Última chamada à ação.

**Layout:**
```
background: radial-gradient(ellipse at 50% 50%, #1A0A05 0%, #090909 70%)
padding: 80px 24px
text-align: center

[copy de fechamento — DM Sans 18px, leading 1.8]
[headline final — Bebas Neue 40px]
[CTA BUTTON — full width]
[micro-copy]

[DIVISÓRIA]

[P.S. — DM Sans 16px, itálico, #A89990]
```

**Copy exata** (do documento md):

> Toda semana você olha para o feed da concorrente e pensa: preciso postar mais.
>
> Toda semana você começa, trava, adia.
>
> O conteúdo que não foi postado essa semana foi uma venda que não aconteceu. Um seguidor que não chegou. Uma autoridade que ficou represada dentro da sua cabeça.
>
> Você já conhece o ChatGPT. O Claude você vai aprender em 5 minutos. O processo você instala em 10. O primeiro roteiro sai antes do fim do dia.
>
> Por R$ 67, você instala hoje e cria hoje.

**Headline final:** "Por R$ 67, você instala hoje e cria hoje." — Bebas Neue 48px

**CTA:** `Quero a Máquina de Conteúdo Infinito — R$ 67`

**Micro-copy:** Acesso imediato. Garantia de 7 dias. Paga uma vez, usa para sempre.

**P.S.:**
> Você não está comprando mais uma coisa para aprender. Você está comprando um processo para usar agora. A diferença é que esse você instala hoje e já cria hoje.

---

### 4.9 STICKY BAR (mobile only)

**Aparece:** após scroll de 300px, com slide-up animation.  
**Desaparece:** quando CTA da oferta está visível na tela.

```
position: fixed
bottom: 0
left: 0
right: 0
background: #111111
border-top: 1px solid #832C0C
padding: 12px 16px
display: flex
gap: 12px
align-items: center
z-index: 50

[preço — Bebas Neue 24px, #FFFFFF]
R$ 67

[CTA — flex 1, height 44px]
Quero agora →
```

---

## 5. Comportamentos Interativos

### 5.1 Scroll Animations
```
Biblioteca: Framer Motion (useInView)
Padrão: fade-in + translateY(20px → 0)
Duration: 0.5s
Ease: easeOut
Threshold: 0.1 (dispara quando 10% do elemento está visível)
Once: true (não repete)
```

Aplicar em: headlines de seção, cards de benefício (stagger 100ms entre itens), cards de depoimento, itens do produto.

### 5.2 FAQ Accordion
```
Estado: useState por item
Animação: Framer Motion AnimatePresence + height auto
Border-bottom do item muda de #2A1A14 para #832C0C quando aberto
```

### 5.3 CTA Hover
```
scale: 1.01
box-shadow: 0 0 80px rgba(225, 107, 49, 0.4)
transition: 0.2s ease
```

### 5.4 Número de preço (hero/oferta)
```
Sem contador animado — o preço é simples e direto.
Aparece com fade-in + scale(0.9 → 1) quando entra na viewport.
```

---

## 6. Responsividade

### Breakpoints
```
mobile:  < 640px  (base)
tablet:  640px–1024px
desktop: > 1024px
```

### Regras Mobile-first críticas
- Container: `px-5` mobile, `px-8` tablet, `max-w-3xl mx-auto` desktop
- Fontes display: reduzem conforme tabela tipográfica
- Botões CTA: sempre `w-full` em mobile
- Cards de passo: empilhados verticalmente (nunca lado a lado em mobile)
- Sticky bar: visível apenas em mobile (`lg:hidden`)
- Imagem hero: `aspect-video` com `object-cover`

---

## 7. Performance e SEO

### Meta Tags (layout.tsx)
```tsx
export const metadata = {
  title: 'Máquina de Conteúdo Infinito — Transforme qualquer ideia em roteiro em 5 minutos',
  description: 'A ferramenta que transforma qualquer ideia solta em roteiro pronto para gravar em menos de 5 minutos. Funciona no plano gratuito do Claude.',
  openGraph: {
    title: 'Máquina de Conteúdo Infinito',
    description: '...',
    image: '/og-image.jpg', // 1200x630
  }
}
```

### Performance
- Fontes: `next/font/google` com `display: swap`
- Imagens: `next/image` com `priority` no hero
- Sem JavaScript desnecessário — animações apenas com Framer Motion (tree-shakeable)
- Botão CTA: `<a href={checkoutUrl}>` — não `<button>` — para rastreamento correto

---

## 8. Variáveis de Configuração

Centralizar em `config/page.ts`:

```ts
export const PAGE_CONFIG = {
  productName: 'Máquina de Conteúdo Infinito',
  price: 'R$ 67',
  checkoutUrl: 'INSERIR_URL_HOTMART',
  guaranteeDays: 7,
  ctaText: 'Quero a Máquina de Conteúdo Infinito por R$ 67',
  ctaTextShort: 'Quero agora →',
}
```

---

## 9. Checklist de Entrega

### Funcional
- [ ] Página renderiza corretamente em mobile (375px), tablet (768px), desktop (1280px)
- [ ] Todos os 4 CTAs apontam para `PAGE_CONFIG.checkoutUrl`
- [ ] Sticky bar aparece após 300px de scroll e some quando CTA da oferta está visível
- [ ] FAQ accordion abre/fecha corretamente
- [ ] Scroll animations funcionam
- [ ] Nenhum link de navegação externo na página (exceto CTA de compra)

### Copy
- [ ] Copy 100% idêntica ao documento `Máquina de Conteúdo Infinito.md`
- [ ] Nenhuma palavra inventada ou alterada
- [ ] P.S. presente no final
- [ ] Micro-copy dos botões corretos por seção

### Design
- [ ] Paleta restrita às 4 cores definidas + variantes
- [ ] Fontes: Bebas Neue (display), DM Sans (body), JetBrains Mono (labels)
- [ ] Efeito grain overlay presente
- [ ] Glow nos CTAs
- [ ] Trust bar no hero

### Performance
- [ ] Lighthouse Performance > 90 mobile
- [ ] Lighthouse Accessibility > 85
- [ ] Sem layout shift (CLS < 0.1)
- [ ] Meta tags OG configuradas

---

## 10. Notas para o Desenvolvedor

1. **Imagem do produto (hero):** deixar `<div>` placeholder com `bg-[#111111]` e texto `{/* TODO: inserir screenshot da ferramenta */}`. Dimensões: `aspect-video w-full`.

2. **Depoimentos:** deixar array de objetos placeholder com `TODO` comment. Estrutura: `{ quote: string, name: string, niche: string }`.

3. **URL de checkout:** nunca hardcoded. Sempre via `PAGE_CONFIG.checkoutUrl`. Adicionar ao `.env.local` como `NEXT_PUBLIC_CHECKOUT_URL`.

4. **Analytics:** deixar `TODO` nos eventos de clique do CTA para integração com pixel do Meta / GA4.

5. **A/B testing:** estruturar o headline do hero como variável em `PAGE_CONFIG` para facilitar testes futuros sem alterar o componente.

6. **Fontes fallback:** `Bebas Neue` → `Impact, sans-serif`. `DM Sans` → `system-ui, sans-serif`.

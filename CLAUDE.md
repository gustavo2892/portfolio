# CLAUDE.md

Portfólio pessoal de Gustavo Freitas ("Freitas Software"), bilíngue (pt/en), estático e sem back-end. Deploy na Vercel; domínio oficial de produção: **https://devfreitas.vercel.app**.

## Stack

- **Next.js 16** (App Router, Turbopack no dev) + **React 19** + **TypeScript 5** (`strict`)
- **Tailwind CSS v4**: tema definido via `@theme` em `src/styles/globals.css` (não existe `tailwind.config`)
- **shadcn/ui** (Radix + `class-variance-authority`), `vaul` (drawer), `lucide-react` (ícones)
- `@react-spring/web` (apenas no `BubbleCursor` da home)
- i18n próprio: `negotiator` + `@formatjs/intl-localematcher` no `src/proxy.ts` (convenção `proxy` do Next 16, sempre em runtime Node.js; não declare `runtime` nesse arquivo)
- Gerenciador de pacotes: **pnpm** (`pnpm-lock.yaml`)

Não há: APIs/rotas de API, variáveis de ambiente, formulários, biblioteca de validação, estado global (só React Context) nem testes automatizados.

## Comandos

```bash
pnpm install          # instalar dependências
pnpm dev              # dev server (http://localhost:3000)
pnpm build            # build de produção — principal verificação disponível
pnpm start            # servir o build
pnpm exec tsc --noEmit   # checagem de tipos
pnpm exec eslint .       # lint (eslint.config.mjs)
```

Não há scripts `lint`, `typecheck` ou `test` no `package.json`; use os comandos acima diretamente.

## Estrutura

```
src/
├─ proxy.ts              # redireciona "/" e rotas sem idioma para /{locale} (fica no mesmo nível de app/)
├─ app/
│  ├─ layout.tsx         # root layout (apenas importa globals.css)
│  ├─ page.tsx           # fallback que redireciona para /pt
│  ├─ icon.tsx           # favicon gerado (ImageResponse), servido em /icon
│  ├─ robots.ts          # gera /robots.txt (MetadataRoute.Robots)
│  ├─ sitemap.ts         # gera /sitemap.xml com as 6 páginas públicas (MetadataRoute.Sitemap)
│  └─ [lang]/            # layout com Header/Footer/Whatsapp + páginas (dynamicParams = false)
│     ├─ page.tsx        # home
│     ├─ about-me/page.tsx
│     └─ projects/page.tsx
├─ templates/            # conteúdo de cada página (home, about-me, projects)
│  └─ <pagina>/components/<secao>/
├─ components/           # compartilhados: header, footer, logo, whatsapp, page-skeleton, redirect
│  └─ ui/                # componentes shadcn (button, drawer, dropdown-menu)
├─ contexts/             # DictionaryContext (dicionário + lang para client components)
├─ hooks/                # useWindowSize
├─ lib/utils.ts          # cn() = clsx + tailwind-merge
├─ dictionaries/         # pt.json, en.json
├─ get-dictionary.ts     # getDictionary(locale) + tipo Dictionary
└─ i18n-config.ts        # locales ["en", "pt"], default "pt", tipo Locale
public/                  # imagens, bandeiras (pt.png/en.png), CVs ({lang}_gustavo_freitas_cv.pdf)
```

## Arquitetura (preservar)

1. **Rotas finas** (`src/app/[lang]/**/page.tsx`): apenas `await params`, `generateMetadata` e retorno do template. Sem markup/lógica de UI aqui.
2. **Templates** (`src/templates/<pagina>/`): Server Component `async` que chama `getDictionary(lang)` e compõe seções, normalmente dentro de `<PageSkeleton title=...>`.
3. **Componentes**: seções específicas de uma página ficam em `templates/<pagina>/components/`; o que é reutilizado entre páginas fica em `src/components/`.

Nova página = `app/[lang]/<rota>/page.tsx` + `templates/<rota>/` + export em `templates/index.ts` + link no `Header` e no `MenuMobileContent` + chaves nos dois dicionários + entrada em `PAGES` de `src/app/sitemap.ts`.

### Roteamento, idiomas e SEO

- **`src/proxy.ts`** redireciona (307) rotas sem prefixo de idioma para `/{locale}{caminho}`:
  - Não intercepta `/api`, `/_next/static`, `/_next/image`, `favicon.ico` nem a rota exata `/icon` (matcher), e ignora caminhos com ponto (arquivos de `public/`, `robots.txt`, `sitemap.xml`).
  - Idioma via `Accept-Language`: a lista passada ao `Negotiator` começa por `i18n.defaultLocale`, então sem cabeçalho ou com `*` o destino é `pt`; preferências explícitas são respeitadas.
  - Remove barras finais do destino, para que `/` vá direto para `/pt` ou `/en` (um único redirecionamento).
- **`src/app/[lang]/layout.tsx`** usa `dynamicParams = false`: apenas os idiomas de `generateStaticParams` (`pt`, `en`) existem; qualquer outro valor de `[lang]` retorna 404.
- **`robots.ts` / `sitemap.ts`** usam `https://devfreitas.vercel.app` como URL base. Não invente `lastModified`, `changeFrequency` ou `priority` no sitemap.

## Convenções de código

- **Uma pasta por componente**, nome em kebab-case: `foo-bar/foo-bar.tsx` + `foo-bar/index.ts` (`export * from './foo-bar'`). Registrar no barrel do nível acima (`components/index.ts`, `templates/index.ts`, `.../components/index.ts`).
- Componentes como **arrow functions com export nomeado** (`export const FooBar = ...`). `export default` apenas em arquivos especiais do Next (`page`, `layout`, `loading`, `icon`, `robots`, `sitemap`).
- Imports pelo alias `@/` (ex.: `@/components`, `@/get-dictionary`, `@/i18n-config`).
- Tipos de dados em `*.types.ts`; dados estáticos em arquivos próprios (ex.: `projects_data.ts`, `social.enum.tsx`).
- Classes condicionais com `cn()` de `@/lib/utils`.
- Componentes de `components/ui/` seguem o padrão shadcn (cva + `cn`); para novos, gerar com shadcn e adaptar às cores do tema.

## Regras

### TypeScript
- Tipagem estrita. **Não usar `any`, `@ts-ignore` nem `@ts-nocheck`** em código novo (o `BubbleCursor` é legado; não replique).
- Use `Locale` (de `@/i18n-config`) em vez de `string` para idioma e `Dictionary` (de `@/get-dictionary`) em vez de redeclarar o tipo.

### Server x Client Components
- **Server Components por padrão.** `"use client"` apenas quando houver estado, efeitos, eventos do navegador ou hooks como `usePathname`.
- Mantenha os client components nas folhas da árvore; passe dados (incluindo o dicionário) por props ou via `DictionaryProvider`/`useDictionary`.
- Não chame `getDictionary` em client components.

### Internacionalização (pt e en)
- Todo texto visível vai em **`src/dictionaries/pt.json` e `en.json`, com as mesmas chaves** nos dois arquivos.
- Links internos sempre prefixados com o idioma: `` `/${lang}/rota` ``.
- `generateMetadata` deve ter título/descrição para `pt` e `en` (com fallback para `pt`).
- Assets por idioma seguem o padrão `/{lang}_...` (ex.: CV).

### Estilo
- **Tailwind CSS v4** com os tokens de `src/styles/globals.css` (`secondary-100/150/200/250`, `blue-100..400`, `cyan-*`, `gray-*`, tipografia `text-heading-*`, `text-body-*`, `text-action-*`). Não introduza cores hex soltas nem CSS-in-JS.
- Novos tokens vão no bloco `@theme` de `globals.css`.
- Layout padrão: `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`; breakpoint mobile em `md` (768px).
- Imagens com `next/image`; ícones com `lucide-react`.

### Reutilização e dependências
- Antes de criar algo, verifique `src/components`, `src/components/ui`, `src/hooks`, `src/contexts` e `src/lib`.
- **Use pnpm** (`pnpm add`, `pnpm add -D`); nunca npm/yarn nem outro lockfile.
- Não adicione dependências sem justificativa explícita (por que é necessária e por que o que já existe não basta).

## Fluxo de trabalho

- **Antes de alterações significativas** (nova página/feature, refatoração em vários arquivos, nova dependência), apresente um plano de implementação e aguarde aprovação.
- **Não altere arquivos fora do escopo da tarefa.** Problemas encontrados fora do escopo devem ser apenas reportados.
- **Não faça commits automaticamente**; commit/push só quando solicitado.
- **Após alterações**, execute as verificações disponíveis e informe os resultados (inclusive falhas):
  1. `pnpm exec tsc --noEmit`
  2. `pnpm exec eslint .`
  3. `pnpm build`

## Problemas conhecidos (não corrigir sem pedido)

- `components.json` referencia `tailwind.config.js` inexistente.
- Classe inválida `ls:px-8` (deveria ser `lg:px-8`) no `Header` e no `PageSkeleton`.
- `getDictionary` usa `en` como fallback, embora o padrão seja `pt`.
- `generateMetadata` duplicado nas três páginas; `openGraph.url` aponta para a imagem.
- O domínio de produção está repetido em `robots.ts`, `sitemap.ts` e nos metadados Open Graph das páginas.
- Caminhos com barra final (ex.: `/about-me/`) geram dois redirecionamentos: o Next remove a barra (308) antes de o proxy rodar (307).
- Rotas inexistentes exibem a página 404 padrão do Next, sem o layout do site.
- README cita yarn/npm.

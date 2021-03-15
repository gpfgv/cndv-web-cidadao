### CNDV Web Cidadão
Web desenvolvida usando React.js/Next.js e TailwindCSS. 

O cidadão poderá na web fazer tudo o que ele pode fazer pela à APP: autenticar-se e cadastrar-se, consultar campanhas.

### Configurar  

- Instalar NodeJS **LTS** <a href="https://nodejs.org/en">Página oficial do NodeJs</a>
- Unzip os arquivos na máquina do servidor
- Abrir terminal
- Usando Linux:`npm/yarn run install:clean`
- `npm/yarn install`
- `npm/yarn run build:tailwind` (Cada vez que agregamos uma classe, ela não existe `src/assets/styles/tailwind.css`, execute o comando)
- `npm/yarn run dev`
- Abra https://localhost:3000
- [Tailwind CSS](https://tailwindcss.com/)

### Produção
- `next build`

### Páginas
- Presentation](https://demos.creative-tim.com/notus-nextjs/?ref=nnjs-github-readme)
- Admin Samples
- Dashboard
- Settings
- Tables
- Maps
- Authentication Samples
- Login
- Register
- Presentation Samples
- Index
- Profile

### 18 componentes dinamicos

- Alerts
- Popper for Menus
- Menus
- Modals
- Navbars
- Popper for popover content
- Tabs
- Popper for tooltips content

## Estrutura de Arquivos
```
CNDV
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── assets
│   ├── img
│   │   ├── brand
│   │   │   └── favicon.ico
│   │   ├── github.svg
│   │   └── google.svg
│   └── styles
│       ├── index.css
│       └── tailwind.css
├── components
│   ├── Cards
│   │   ├── CardBarChart.js
│   │   ├── CardLineChart.js
│   │   ├── CardPageVisits.js
│   │   ├── CardProfile.js
│   │   ├── CardSettings.js
│   │   ├── CardSocialTraffic.js
│   │   ├── CardStats.js
│   │   └── CardTable.js
│   ├── Dropdowns
│   │   ├── IndexDropdown.js
│   │   ├── NotificationDropdown.js
│   │   ├── PagesDropdown.js
│   │   ├── TableDropdown.js
│   │   └── UserDropdown.js
│   ├── Footers
│   │   ├── Footer.js
│   │   ├── FooterAdmin.js
│   │   └── FooterSmall.js
│   ├── Headers
│   │   └── HeaderStats.js
│   ├── Maps
│   │   └── MapExample.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   ├── AuthNavbar.js
│   │   └── IndexNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   └── Sidebar
│       └── Sidebar.js
├── layouts
│   ├── Admin.js
│   └── Auth.js
├── next.config.js
├── package.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── dashboard.js
│   │   ├── maps.js
│   │   ├── settings.js
│   │   └── tables.js
│   ├── auth
│   │   ├── login.js
│   │   └── register.js
│   ├── index-old.js
│   ├── index.js
│   └── profile.js
└── tailwind.config.js
```

### Benchmark 
`Next build` para preparar arquivos para o servidor.

```
info  - Collecting page data  
Page                                 Size     First Load JS
┌ λ /                                16.9 kB        87.8 kB
├   /_app                            0 B            63.1 kB
├ λ /404                             1.28 kB        64.4 kB
├ λ /admin/dashboard                 138 kB          212 kB
├ λ /admin/maps                      33.9 kB         108 kB
├ λ /admin/settings                  1.86 kB          76 kB
├ λ /admin/tables                    2.01 kB        76.2 kB
├ λ /auth/login                      5.94 kB        76.9 kB
├ λ /auth/register                   5.91 kB        76.8 kB
├ λ /landing                         5.58 kB        76.5 kB
└ λ /profile                         3.66 kB        74.6 kB
+ First Load JS shared by all        63.1 kB
  ├ chunks/353c0a03.ff5578.js        68 B
  ├ chunks/commons.55a59c.js         10.3 kB
  ├ chunks/framework.1d36bc.js       40.2 kB
  ├ chunks/main.3eafd0.js            7.29 kB
  ├ chunks/pages/_app.dc614b.js      4.49 kB
  ├ chunks/styles.00d720.js          98 B
  ├ chunks/webpack.d7b2fb.js         751 B
  ├ css/353c0a03.0f742b7d.chunk.css  1.18 MB
  └ css/styles.eef505b9.chunk.css    10.3 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
(ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```
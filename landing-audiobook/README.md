# Landing Page do Audiobook

Projeto em HTML, CSS e JavaScript puro para vender um audiobook low ticket com checkout externo.

## Como editar o link do checkout

Abra [script.js](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/script.js) e altere a constante:

```js
const checkoutLink = "https://hotm.io/diagnostico-despertar-audiobook";
```

Todos os botões principais da página usam essa mesma URL. Se quiser trocar no
futuro, basta substituir esse valor por outro link `https://`.

## Onde alterar textos

- Headline, subheadline e preços principais: [script.js](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/script.js)
- Copy estrutural de cada seção: [index.html](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/index.html)
- Base estratégica de copy e variações: [docs/copy-base.md](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/docs/copy-base.md), [docs/offer-variants.md](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/docs/offer-variants.md) e [docs/creative-hooks.md](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/docs/creative-hooks.md)

## Onde trocar imagens

Substitua os arquivos dentro de [assets/img](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/assets/img):

- `hero-mockup.webp`
- `author-photo.webp`
- `og-cover.webp`

Os ícones e favicon ficam em:

- [assets/icons](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/assets/icons)
- [assets/favicon](/c:/Users/Zadoni/Documents/LP%20AUDIOBOOK%20MINDSET%20MATURIDADE/landing-audiobook/assets/favicon)

## Como publicar no Netlify

1. Acesse o painel da Netlify e clique em `Add new site` > `Deploy manually`.
2. Arraste a pasta `landing-audiobook` inteira para a área de upload.
3. Aguarde o deploy terminar e teste a URL publicada no celular.
4. Antes de subir tráfego, confirme o `checkoutLink`, as imagens finais e o Open Graph.

## Estrutura

```text
landing-audiobook/
├── index.html
├── style.css
├── script.js
├── README.md
├── AGENTS.md
├── assets/
│   ├── img/
│   ├── icons/
│   └── favicon/
└── docs/
```

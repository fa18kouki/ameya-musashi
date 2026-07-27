import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://ameya-musashi.jp";
const SITE_NAME = "飴屋MUSASHI";
const DIST = path.resolve("dist");

const faqs = [
  ["最小ロットは何粒からですか？", "業界最小水準の2,500粒からご注文いただけます。小ロットでもオーダーメイドに対応しています。"],
  ["納期はどのくらいかかりますか？", "ご注文確定後、最短2週間での納品を目指しています。イベント日が決まっている場合はお早めにお問い合わせください。"],
  ["飴本体への印刷と包装への印刷はどう違いますか？", "飴本体への印刷は手作りならではのにじみや潰れも味わいになります。包装への印刷はロゴやメッセージをより鮮明に表現できます。用途に合わせてご提案します。"],
  ["フレーバーは選べますか？", "りんご・オレンジ・グレープ・ピーチ・レモン・西洋梨・ストロベリー・ライチ・うめ・しそ・抹茶・コーラ・サイダーの全13種類からお選びいただけます。"],
  ["送料はかかりますか？", "一括納品の場合は送料無料でお届けします。詳細はお見積もり時にご確認ください。"],
  ["デザインのデータは自分で用意する必要がありますか？", "データをお持ちでない場合もご相談ください。デザインのご提案から対応しています。"],
];

function buildTopPageLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo-symbol.svg`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "080-9700-1919",
          contactType: "customer service",
          availableLanguage: "Japanese",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: [
          "飴屋武蔵",
          "アメヤムサシ",
          "ameya musashi",
          "オーダーメイド飴",
          "オリジナル包装飴",
        ],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: "080-9700-1919",
        priceRange: "¥¥",
        description: "オーダーメイド手作り飴・オリジナル包装飴の製造。販促・おもてなし・ノベルティ向けに最小2,500粒〜対応。",
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}/#product`,
        name: "オーダーメイド手作り飴・オリジナル包装飴",
        description: "飴そのものにロゴ・文字を入れる手作り飴と、包装にデザインを印刷するオリジナル包装飴。最小2,500粒〜、1粒25円〜、最短2週間納品。",
        brand: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          priceCurrency: "JPY",
          price: "25",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "25",
            priceCurrency: "JPY",
            unitText: "粒",
          },
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };
}

function buildBlogPageLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "飴屋MUSASHIブログ",
        url: `${SITE_URL}/blog`,
        description: "おもてなし・販促・ノベルティに役立つオーダーメイド飴の活用アイデア",
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "トップ",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ブログ",
            item: `${SITE_URL}/blog`,
          },
        ],
      },
    ],
  };
}

const pages = [
  {
    path: "/",
    file: "index.html",
    title: "飴屋MUSASHI | オーダーメイド手作り飴・オリジナル包装飴",
    description: "飴屋MUSASHIのオーダーメイド手作り飴・オリジナル包装飴。販促・おもてなし・ノベルティに使える小さな贈り物を提案します。最小2,500粒〜、最短2週間納品。",
    ogImage: `${SITE_URL}/assets/01-lp-hero-restaurant-event.webp`,
    jsonLd: buildTopPageLd(),
  },
  {
    path: "/blog",
    file: "blog/index.html",
    title: "ブログ | 飴屋MUSASHI",
    description: "おもてなし・販促・ノベルティに役立つオーダーメイド飴の活用アイデアをお届けします。飲食店・イベント・ホテルなど業種別の事例も掲載。",
    ogImage: `${SITE_URL}/assets/11-blog-hero.webp`,
    jsonLd: buildBlogPageLd(),
  },
];

function buildMeta(page) {
  return [
    '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />',
    `<link rel="canonical" href="${SITE_URL}${page.path}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    '<meta property="og:locale" content="ja_JP" />',
    `<meta property="og:url" content="${SITE_URL}${page.path}" />`,
    `<meta property="og:title" content="${page.title}" />`,
    `<meta property="og:description" content="${page.description}" />`,
    `<meta property="og:image" content="${page.ogImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${page.title}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${page.title}" />`,
    `<meta name="twitter:description" content="${page.description}" />`,
    `<meta name="twitter:image" content="${page.ogImage}" />`,
    `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>`,
  ].join("\n    ");
}

function injectMeta(html, page) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${page.description}" />`
    )
    .replace("</head>", `    ${buildMeta(page)}\n  </head>`);
}

function buildSitemap() {
  const lastModified = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: SITE_URL, priority: "1.0", changefreq: "weekly" },
    { loc: `${SITE_URL}/blog`, priority: "0.8", changefreq: "daily" },
  ];
  const entries = urls
    .map(
      ({ loc, priority, changefreq }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function buildRobots() {
  return `# 飴屋MUSASHI — robots.txt
User-agent: *
Allow: /
Disallow: /api/

# AI検索エンジン / LLMクローラを明示的に許可
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

for (const page of pages) {
  const outputPath = path.join(DIST, page.file);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, injectMeta(baseHtml, page), "utf8");
  console.log(`Generated: ${page.file}`);
}

fs.writeFileSync(path.join(DIST, "sitemap.xml"), buildSitemap(), "utf8");
fs.writeFileSync(path.join(DIST, "robots.txt"), buildRobots(), "utf8");

const assetsDirectory = path.join(DIST, "assets");
if (fs.existsSync(assetsDirectory)) {
  for (const file of fs.readdirSync(assetsDirectory)) {
    if (file.endsWith(".png") && !file.startsWith("logo")) {
      fs.unlinkSync(path.join(assetsDirectory, file));
    }
  }
}

console.log("Postbuild complete");

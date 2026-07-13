/**
 * postbuild.mjs
 * ビルド後に実行するSEO強化スクリプト:
 *  1. dist/index.html にSEOメタ（canonical / OGP / JSON-LD / robots / sitemap link）を注入
 *  2. dist/blog/index.html を生成（ブログページ専用メタ）
 *  3. dist/sitemap.xml を生成
 *  4. dist/robots.txt を生成（AIクローラ許可済み）
 */
import fs from "fs";
import path from "path";

const SITE_URL = "https://ameya-musashi.pages.dev";
const SITE_NAME = "飴屋MUSASHI";
const DIST = path.resolve("dist");

// ---- ページ定義 ----
const pages = [
  {
    path: "/",
    file: "index.html",
    title: "飴屋MUSASHI | オーダーメイド手作り飴・オリジナル包装飴",
    description:
      "飴屋MUSASHIのオーダーメイド手作り飴・オリジナル包装飴。販促・おもてなし・ノベルティに使える小さな贈り物を提案します。最小2,500粒〜、最短2週間納品。",
    ogImage: `${SITE_URL}/assets/01-lp-hero-restaurant-event.png`,
    ogType: "website",
    jsonLd: buildTopPageLd(),
  },
  {
    path: "/blog",
    file: "blog/index.html",
    title: "ブログ | 飴屋MUSASHI",
    description:
      "おもてなし・販促・ノベルティに役立つオーダーメイド飴の活用アイデアをお届けします。飲食店・イベント・ホテルなど業種別の事例も掲載。",
    ogImage: `${SITE_URL}/assets/11-blog-hero.png`,
    ogType: "website",
    jsonLd: buildBlogPageLd(),
  },
];

// ---- JSON-LD 生成 ----
function buildTopPageLd() {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "飴屋MUSASHI",
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
          name: "飴屋MUSASHI",
          url: SITE_URL,
          telephone: "080-9700-1919",
          priceRange: "¥¥",
          description:
            "オーダーメイド手作り飴・オリジナル包装飴の製造。販促・おもてなし・ノベルティ向けに最小2,500粒〜対応。",
        },
        {
          "@type": "Product",
          "@id": `${SITE_URL}/#product`,
          name: "オーダーメイド手作り飴・オリジナル包装飴",
          description:
            "飴そのものにロゴ・文字を入れる手作り飴と、包装にデザインを印刷するオリジナル包装飴。最小2,500粒〜、1粒25円〜、最短2週間納品。",
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
          mainEntity: [
            {
              "@type": "Question",
              name: "最小ロットは何粒からですか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "業界最小水準の2,500粒からご注文いただけます。小ロットでもオーダーメイドに対応しています。",
              },
            },
            {
              "@type": "Question",
              name: "納期はどのくらいかかりますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ご注文確定後、最短2週間での納品を目指しています。お急ぎの場合はお問い合わせください。",
              },
            },
            {
              "@type": "Question",
              name: "飴本体への印刷と包装への印刷はどう違いますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "飴本体への印刷は手作りならではのにじみや潰れも味わいになります。包装への印刷はロゴやメッセージをより鮮明に表現できます。用途に合わせてご提案します。",
              },
            },
            {
              "@type": "Question",
              name: "フレーバーは選べますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "りんご・オレンジ・グレープ・ピーチ・レモン・西洋梨・ストロベリー・ライチ・うめ・しそ・抹茶・コーラ・サイダーの全13種類からお選びいただけます。",
              },
            },
            {
              "@type": "Question",
              name: "送料はかかりますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "一括納品の場合は送料無料でお届けします。詳細はお見積もり時にご確認ください。",
              },
            },
          ],
        },
      ],
    },
    null,
    2
  );
}

function buildBlogPageLd() {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: "飴屋MUSASHIブログ",
          url: `${SITE_URL}/blog`,
          description:
            "おもてなし・販促・ノベルティに役立つオーダーメイド飴の活用アイデア",
          publisher: {
            "@type": "Organization",
            name: "飴屋MUSASHI",
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
    },
    null,
    2
  );
}

// ---- メタタグ注入 ----
function buildMeta(page) {
  return `
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
    <link rel="canonical" href="${SITE_URL}${page.path}" />
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:url" content="${SITE_URL}${page.path}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${page.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${page.title}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${page.ogImage}" />
    <script type="application/ld+json">${page.jsonLd}</script>`;
}

function injectMeta(html, page) {
  // titleを更新
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  // meta descriptionを更新
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${page.description}" />`
  );
  // </head>の直前にメタを挿入
  html = html.replace("</head>", `${buildMeta(page)}\n  </head>`);
  return html;
}

// ---- sitemap.xml 生成 ----
function buildSitemap() {
  const now = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: SITE_URL, priority: "1.0", changefreq: "weekly" },
    { loc: `${SITE_URL}/blog`, priority: "0.8", changefreq: "daily" },
  ];
  const items = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

// ---- robots.txt 生成 ----
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

// ---- PNG削除（WebPに移行済み）----
const assetsDir = path.join(DIST, "assets");
if (fs.existsSync(assetsDir)) {
  const pngs = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".png") && !f.startsWith("logo"));
  for (const png of pngs) {
    fs.unlinkSync(path.join(assetsDir, png));
    console.log(`🗑  Removed: assets/${png}`);
  }
}

// ---- メイン処理 ----
const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

for (const page of pages) {
  const outPath = path.join(DIST, page.file);
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const html = injectMeta(baseHtml, page);
  fs.writeFileSync(outPath, html, "utf-8");
  console.log(`✅ Generated: ${page.file}`);
}

fs.writeFileSync(path.join(DIST, "sitemap.xml"), buildSitemap(), "utf-8");
console.log("✅ Generated: sitemap.xml");

fs.writeFileSync(path.join(DIST, "robots.txt"), buildRobots(), "utf-8");
console.log("✅ Generated: robots.txt");

console.log("\n🎉 postbuild complete");

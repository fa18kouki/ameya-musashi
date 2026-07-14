import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Coins,
  Gift,
  Mail,
  Package,
  PackageCheck,
  Phone,
  Truck,
  Utensils,
} from "lucide-react";
import "./styles.css";

const assets = {
  hero: "/assets/01-lp-hero-restaurant-event.webp",
  comparison: "/assets/02-product-comparison-candy-wrapper.webp",
  speed: "/assets/03-feature-speed-delivery.webp",
  customize: "/assets/04-feature-customization.webp",
  restaurant: "/assets/05-case-restaurant.webp",
  event: "/assets/06-case-event.webp",
  hotel: "/assets/07-case-hotel.webp",
  amusement: "/assets/08-case-amusement.webp",
  onsen: "/assets/09-case-onsen-heatstroke.webp",
  flavor: "/assets/10-product-flavor-lineup.webp",
  blogHero: "/assets/11-blog-hero.webp",
  blogRestaurant: "/assets/12-blog-thumb-restaurant.webp",
  blogNovelty: "/assets/13-blog-thumb-novelty.webp",
  blogCompare: "/assets/14-blog-thumb-candy-vs-wrapper.webp",
  blogEvent: "/assets/15-blog-thumb-event.webp",
  blogDesign: "/assets/16-blog-thumb-design-reproducibility.webp",
  blogLot: "/assets/17-blog-thumb-small-lot-estimate.webp",
};

function Logo() {
  return (
    <a className="logo" href="/" aria-label="飴屋MUSASHI トップへ">
      <span className="logoMark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="logoText">
        <strong>飴屋 MUSASHI</strong>
        <small>オーダーメイド手作り飴・オリジナル包装飴の製造</small>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Logo />
        <nav aria-label="ページリンク">
          <a href="/blog">ブログ</a>
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({ kicker, title, children }) {
  return (
    <div className="sectionTitle">
      {kicker && <span>{kicker}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Button({ children, href = "#estimate", variant = "primary" }) {
  return (
    <a className={`button ${variant}`} href={href}>
      <Mail size={18} />
      {children}
    </a>
  );
}

const stats = [
  { icon: Package, label: "業界最小水準ロット", value: "2,500", suffix: "粒〜" },
  { icon: Coins, label: "参考価格", value: "1粒25円", suffix: "〜" },
  { icon: CalendarDays, label: "最短納期", value: "2週間", suffix: "〜" },
  { icon: Truck, label: "一括納品なら", value: "送料無料", suffix: "" },
];

const concerns = [
  {
    icon: Utensils,
    title: "お口直しでもお店のブランディングをしたい",
    text: "会計後の一粒で、お店の印象を最後まで残したい。",
  },
  {
    icon: Gift,
    title: "価格を抑えたノベルティで認知拡大をしたい",
    text: "限られた予算でも、受け取られやすい販促物にしたい。",
  },
  {
    icon: PackageCheck,
    title: "印象に残るおもてなしをしたい",
    text: "小さなおもてなしを、記憶に残る体験へ変えたい。",
  },
  {
    icon: ArrowRight,
    title: "販促で競合との差別化がしたい",
    text: "ありがちなノベルティから、ひと目で違う提案にしたい。",
  },
];

const cases = [
  {
    image: assets.restaurant,
    name: "高級焼肉店",
    purpose: "会計後のお口直し・再来店促進",
    result: "最後のおもてなしに店名の記憶を添える",
  },
  {
    image: assets.event,
    name: "イベント会社",
    purpose: "展示会・イベントでの配布",
    result: "小さく配れて、持ち帰られやすい販促物に",
  },
  {
    image: assets.hotel,
    name: "ホテル・旅館",
    purpose: "ウェルカムスイーツ・記念品",
    result: "到着時の印象をやわらかく演出",
  },
  {
    image: assets.amusement,
    name: "パチンコ店",
    purpose: "景品・イベント時の配布",
    result: "来店動機とブランド接点をつくる",
  },
  {
    image: assets.onsen,
    name: "温浴施設",
    purpose: "熱中症対策・館内サービス",
    result: "季節施策にも使いやすい配布品に",
  },
];

const flavors = [
  "りんご",
  "オレンジ",
  "グレープ",
  "ピーチ",
  "レモン",
  "西洋梨",
  "ストロベリー",
  "ライチ",
  "うめ",
  "しそ",
  "抹茶",
  "コーラ",
  "サイダー",
];

const formGroups = [
  {
    label: "用途",
    options: [
      "飲食店のお口直し",
      "展示会・イベント配布",
      "来店客向けノベルティ",
      "工場・現場の熱中症対策",
      "ホテル・旅館のおもてなし",
      "パチンコ店・アミューズメント景品",
      "まだ決まっていない",
    ],
  },
  {
    label: "作りたいもの",
    options: [
      "飴そのものに文字・ロゴを入れたい",
      "包装に会社名・ロゴを入れたい",
      "両方検討したい",
      "違いが分からないので相談したい",
    ],
  },
  {
    label: "数量の目安",
    options: ["2,500〜5,000粒", "5,001〜10,000粒", "10,001〜30,000粒", "30,001粒以上", "まだ分からない"],
  },
  {
    label: "希望時期",
    options: ["できるだけ早く", "1か月以内", "2〜3か月以内", "イベント日が決まっている", "まだ未定"],
  },
  {
    label: "相談したい内容",
    options: ["デザインについて相談したい", "価格を知りたい", "納期を知りたい", "活用方法を提案してほしい", "まずは話だけ聞きたい"],
  },
];

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">販促・おもてなし・記念品を、もっと印象的に。</p>
            <h1>
              オーダーメイド手作り飴・オリジナル包装飴で、
              <br />
              記憶に残るおもてなしを。
            </h1>
            <p className="lead">
              販促・ノベルティ・おもてなしに使えるオーダーメイド飴。最小2,500粒〜、最短2週間納品。飲食店・ホテル・イベント会社に選ばれています。
            </p>
            <Button>見積もり・相談をする</Button>
          </div>
          <div className="heroImage">
            <img src={assets.hero} alt="飲食店とイベントで配られるオーダーメイド手作り飴" />
          </div>
        </section>

        <section className="stats" aria-label="基本情報">
          {stats.map(({ icon: Icon, label, value, suffix }) => (
            <article className="statCard" key={label}>
              <Icon size={34} />
              <div>
                <span>{label}</span>
                <strong>
                  {value}
                  <small>{suffix}</small>
                </strong>
              </div>
            </article>
          ))}
        </section>

        <section className="section">
          <SectionTitle title="こんなお悩みはありませんか？" />
          <div className="concernGrid">
            {concerns.map(({ icon: Icon, title, text }) => (
              <article className="concernCard" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section solution">
          <SectionTitle title="オーダーメイド手作り飴・オリジナル包装飴なら、記憶に残る接点に変えられます。">
            飴に入れる場合は手作りならではのにじみや潰れも味わいに。包装に入れる場合はロゴやメッセージをより鮮明に表現できます。
          </SectionTitle>
          <div className="solutionPanel">
            <div className="solutionCopy">
              <h3>用途に合わせて、最適な見せ方をご提案</h3>
              <ul>
                <li>
                  <Check size={18} /> 飴そのものにデザインを入れる
                </li>
                <li>
                  <Check size={18} /> 包装にロゴやメッセージを入れる
                </li>
                <li>
                  <Check size={18} /> 両方を組み合わせて印象を高める
                </li>
              </ul>
            </div>
            <img src={assets.comparison} alt="飴本体と包装印刷の仕上がり比較" />
          </div>
        </section>

        <section className="section features">
          <SectionTitle kicker="STRENGTH" title="飴屋MUSASHIの強み">
            短納期と高い自由度で、販促・おもてなしを具体的な形にします。
          </SectionTitle>
          <FeatureBlock
            number="01"
            title="スピード納品"
            image={assets.speed}
            points={["担当営業が1営業日以内に回答", "ご注文確定後、最短2週間で納品", "業界最短納期を目指しています"]}
          >
            お問い合わせや見積もり依頼に対して、担当営業がすばやく確認。用途や納期に合わせて、無理のない進行をご案内します。
          </FeatureBlock>
          <FeatureBlock
            number="02"
            title="自由度の高さ"
            image={assets.customize}
            flip
            points={["飴のデザイン・色・フレーバーを調整", "包装デザインまでオリジナル制作可能", "ペロペロキャンディや棒付きキャンディにも対応"]}
          >
            飴のことなら何でもお問い合わせください。ブランドの雰囲気や配布シーンに合わせて、商品仕様から見せ方までご提案します。
          </FeatureBlock>
        </section>

        <section className="section cases">
          <SectionTitle kicker="CASE" title="導入実績">
            業種や目的に合わせて、会社名（店名）・使用用途・実際の画像を掲載できるカード構成です。
          </SectionTitle>
          <div className="caseGrid">
            {cases.map((item) => (
              <article className="caseCard" key={item.name}>
                <img src={item.image} alt={`${item.name}での活用イメージ`} />
                <div>
                  <span>会社名（店名）</span>
                  <h3>{item.name}</h3>
                  <span>使用用途・目的</span>
                  <p>{item.purpose}</p>
                  <span>活用イメージ</span>
                  <p>{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section product">
          <SectionTitle kicker="DETAIL" title="製品の基本情報" />
          <div className="productGrid">
            <div className="detailCards">
              {stats.map(({ icon: Icon, label, value, suffix }) => (
                <article className="detailCard" key={label}>
                  <Icon size={24} />
                  <span>{label}</span>
                  <strong>
                    {value}
                    {suffix}
                  </strong>
                </article>
              ))}
              <article className="detailCard">
                <PackageCheck size={24} />
                <span>包装</span>
                <strong>個包装対応</strong>
              </article>
            </div>
            <div className="flavorBox">
              <img src={assets.flavor} alt="13種類のフレーバーイメージ" />
              <h3>選べるフレーバー（全13種類）</h3>
              <div className="chips">
                {flavors.map((flavor) => (
                  <span key={flavor}>{flavor}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}

function FeatureBlock({ number, title, image, points, children, flip = false }) {
  return (
    <article className={`featureBlock ${flip ? "flip" : ""}`}>
      <div className="featureText">
        <span className="featureNumber">{number}</span>
        <h3>{title}</h3>
        <p>{children}</p>
        <ul>
          {points.map((point) => (
            <li key={point}>
              <Check size={18} />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <img src={image} alt={`${title}のイメージ`} />
    </article>
  );
}

const faqs = [
  {
    q: "最小ロットは何粒からですか？",
    a: "業界最小水準の2,500粒からご注文いただけます。小ロットでもオーダーメイドに対応しています。",
  },
  {
    q: "納期はどのくらいかかりますか？",
    a: "ご注文確定後、最短2週間での納品を目指しています。イベント日が決まっている場合はお早めにお問い合わせください。",
  },
  {
    q: "飴本体への印刷と包装への印刷はどう違いますか？",
    a: "飴本体への印刷は手作りならではのにじみや潰れも味わいになります。包装への印刷はロゴやメッセージをより鮮明に表現できます。用途に合わせてご提案します。",
  },
  {
    q: "フレーバーは選べますか？",
    a: "りんご・オレンジ・グレープ・ピーチ・レモン・西洋梨・ストロベリー・ライチ・うめ・しそ・抹茶・コーラ・サイダーの全13種類からお選びいただけます。",
  },
  {
    q: "送料はかかりますか？",
    a: "一括納品の場合は送料無料でお届けします。詳細はお見積もり時にご確認ください。",
  },
  {
    q: "デザインのデータは自分で用意する必要がありますか？",
    a: "データをお持ちでない場合もご相談ください。デザインのご提案から対応しています。",
  },
];

function FaqSection() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="section faq" id="faq">
      <SectionTitle kicker="FAQ" title="よくあるご質問" />
      <div className="faqList">
        {faqs.map((item, i) => (
          <div key={i} className={`faqItem${open === i ? " open" : ""}`}>
            <button
              className="faqQ"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <ChevronRight size={18} className="faqIcon" />
            </button>
            {open === i && <p className="faqA">{item.a}</p>}
          </div>
        ))}
      </div>
      <p className="faqMore">
        その他のご質問は<a href="#estimate">お問い合わせフォーム</a>からお気軽にどうぞ。
      </p>
    </section>
  );
}

function EstimateForm() {
  const [status, setStatus] = React.useState("idle"); // idle | sending | done | error
  const [selections, setSelections] = React.useState({});

  const toggleOption = (group, option) => {
    setSelections((prev) => {
      const current = prev[group] || [];
      return {
        ...prev,
        [group]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    // チェックボックスの選択内容を文字列として追加
    const quantityParts = [];
    Object.entries(selections).forEach(([group, opts]) => {
      if (opts.length > 0) quantityParts.push(`${group}：${opts.join("、")}`);
    });
    const payload = {
      name: data.get("name") || "",
      company: data.get("company") || "",
      email: data.get("email") || "",
      phone: data.get("phone") || "",
      quantity: quantityParts.join(" / "),
      message: data.get("message") || "",
      _honeypot: data.get("_gotcha") || "",
    };
    try {
      const res = await fetch("https://ameya-musashi-contact.k-kanno.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section estimate" id="estimate">
      <div className="estimateIntro">
        <h2>デザイン・金額・納期からご相談いただけます</h2>
        <p>内容が未定でも大丈夫です。選択肢にチェックを入れて、分かる範囲でお問い合わせください。</p>
        <div className="phoneBox">
          <Phone size={22} />
          <div>
            <span>お急ぎの方はお電話でも承ります</span>
            <strong>080-9700-1919</strong>
          </div>
        </div>
      </div>
      {status === "done" ? (
        <div className="formDone">
          <Check size={40} />
          <h3>送信が完了しました</h3>
          <p>1営業日以内にご連絡いたします。</p>
        </div>
      ) : (
        <form className="quoteForm" onSubmit={handleSubmit}>
          {/* ハニーポット（スパム対策） */}
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
          {formGroups.map((group) => (
            <fieldset key={group.label}>
              <legend>{group.label}</legend>
              <div className="chips selectable">
                {group.options.map((option) => (
                  <label key={option} className={(selections[group.label] || []).includes(option) ? "selected" : ""}>
                    <input
                      type="checkbox"
                      checked={(selections[group.label] || []).includes(option)}
                      onChange={() => toggleOption(group.label, option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <div className="fieldGrid">
            <label>
              会社名
              <input name="company" placeholder="例）株式会社 飴屋MUSASHI" />
            </label>
            <label>
              お名前 <span className="required">必須</span>
              <input name="name" required placeholder="例）山田 太郎" />
            </label>
            <label>
              メールアドレス <span className="required">必須</span>
              <input name="email" type="email" required placeholder="例）info@example.jp" />
            </label>
            <label>
              ご要望・ご質問
              <textarea name="message" placeholder="用途や納期、検討中の内容をご記入ください" />
            </label>
          </div>
          <p className="privacyNote">
            送信することで<a href="/privacy">プライバシーポリシー</a>に同意したものとみなします。
          </p>
          <button type="submit" disabled={status === "sending"}>
            <Mail size={18} />
            {status === "sending" ? "送信中…" : "見積もりを依頼する / 相談内容を送信する"}
          </button>
          {status === "error" && (
            <p className="formError">送信に失敗しました。お手数ですがお電話にてご連絡ください。</p>
          )}
        </form>
      )}
    </section>
  );
}

const posts = [
  {
    title: "飲食店のお口直しを「記憶に残る体験」に変える方法",
    category: "飲食店のお口直し",
    image: assets.blogRestaurant,
  },
  {
    title: "ノベルティが捨てられないために必要な3つの考え方",
    category: "ノベルティ活用",
    image: assets.blogNovelty,
  },
  {
    title: "オーダーメイド手作り飴とオリジナル包装飴の違い",
    category: "商品・仕様",
    image: assets.blogCompare,
  },
  {
    title: "イベント配布で印象に残るお菓子ノベルティとは",
    category: "イベント配布",
    image: assets.blogEvent,
  },
  {
    title: "飴のデザインはどこまで再現できる？",
    category: "デザインの考え方",
    image: assets.blogDesign,
  },
  {
    title: "小ロットで始める販促用キャンディの活用例",
    category: "小ロット相談",
    image: assets.blogLot,
  },
];

function BlogPage() {
  return (
    <>
      <Header />
      <main className="blogPage">
        <section className="blogHero">
          <div>
            <p className="eyebrow">BLOG</p>
            <h1>ブログ</h1>
            <p>おもてなし・販促に役立つ飴の活用アイデアをお届けします。</p>
          </div>
          <img src={assets.blogHero} alt="飴屋MUSASHIのブログイメージ" />
        </section>
        <section className="section blogLayout">
          <div>
            <article className="featuredPost">
              <img src={posts[0].image} alt="" />
              <div>
                <span>{posts[0].category}</span>
                <h2>{posts[0].title}</h2>
                <p>小さな一粒を、ただのサービスではなく、店名を思い出してもらう接点へ変える考え方を紹介します。</p>
                <a href="#">
                  記事を読む <ChevronRight size={18} />
                </a>
              </div>
            </article>
            <div className="postGrid">
              {posts.slice(1).map((post) => (
                <article className="postCard" key={post.title}>
                  <img src={post.image} alt="" />
                  <div>
                    <span>{post.category}</span>
                    <h3>{post.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="blogSide">
            <h2>カテゴリ</h2>
            {["飲食店のお口直し", "ノベルティ活用", "イベント配布", "ホテル・旅館", "商品・仕様", "デザインの考え方"].map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <p>飴の力で、想いをつなぐ。</p>
      <nav className="footerNav" aria-label="フッターリンク">
        <a href="/blog">ブログ</a>
        <a href="#faq">FAQ</a>
        <a href="#estimate">お問い合わせ</a>
        <a href="/privacy">プライバシーポリシー</a>
      </nav>
      <p className="footerCopy">&copy; {new Date().getFullYear()} 飴屋MUSASHI</p>
    </footer>
  );
}

function App() {
  return window.location.pathname.startsWith("/blog") ? <BlogPage /> : <HomePage />;
}

createRoot(document.getElementById("root")).render(<App />);

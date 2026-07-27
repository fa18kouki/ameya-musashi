import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
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

function SectionTitle({ kicker, title, children, id }) {
  return (
    <div className="sectionTitle">
      {kicker && <span>{kicker}</span>}
      <h2 id={id}>{title}</h2>
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
  {
    icon: Package,
    label: "業界最小水準ロット",
    value: "2,500",
    suffix: "粒〜",
    description: "最小2,500粒よりご注文を承ります",
  },
  {
    icon: Coins,
    label: "参考価格",
    value: "1粒25円",
    suffix: "〜",
    description: "75,000円〜（1粒25円〜）で導入可能な、特別なおもてなしです",
  },
  {
    icon: CalendarDays,
    label: "最短納期",
    value: "2週間",
    suffix: "〜",
    description: "注文確定から最短2週間で納品いたします",
  },
  {
    icon: Truck,
    label: "一括納品なら",
    value: "送料無料",
    suffix: "",
    description: "分割納品も可能ですが、一括納品なら送料無料になります",
  },
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

const solutionBenefits = [
  {
    icon: Package,
    title: "最小ロット2,500粒から",
    text: "業界最低水準のロットで様々なシーンに対応可能。",
  },
  {
    icon: Gift,
    title: "包装も思いのままに",
    text: "飴だけでなく包装デザインもオリジナルで制作できます。",
  },
  {
    icon: CalendarDays,
    title: "納期は最短2週間",
    text: "急ぎのご注文にもできる限り対応いたします。飴の保管が難しい場合は分割納品もできます。",
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

const reasons = [
  {
    number: "01",
    icon: PackageCheck,
    title: "包装紙もオリジナルで制作可能",
    text: "ロゴやメッセージ、ブランドカラーに合わせて、飴だけでなく包装紙までオリジナルで制作できます。",
  },
  {
    number: "02",
    icon: Truck,
    title: "スピード納品",
    text: "担当営業が1営業日以内にお返事し、ご注文確定後は最短2週間での納品を目指します。",
  },
  {
    number: "03",
    icon: ArrowRight,
    title: "担当営業がニーズに最適な提案を",
    text: "用途やご予算、納期を丁寧に伺い、お客様にとって最適な飴と見せ方をご提案します。",
  },
];

const comparisonRows = [
  {
    label: "最小ロット",
    musashi: "必要な分から始めやすい、2,500粒〜",
    others: "最小ロットは会社・商品により異なる",
  },
  {
    label: "参考価格",
    musashi: "75,000円〜（1粒25円〜）で導入可能",
    others: "価格は仕様・数量により異なる",
  },
  {
    label: "最短納期",
    musashi: "注文確定から最短2週間で納品",
    others: "納期は会社・商品・仕様により異なる",
  },
  {
    label: "オリジナル制作",
    musashi: "飴も包装紙もオリジナル制作可能",
    others: "制作できる範囲は会社・商品により異なる",
  },
  {
    label: "納品方法",
    musashi: "分割納品に対応。一括納品なら送料無料",
    others: "分割対応や送料は会社・商品により異なる",
  },
];

const processSteps = [
  {
    icon: Mail,
    title: "無料相談、見積もり依頼",
    text: "営業からメールまたは電話にて1営業日以内にお返事いたします。",
  },
  {
    icon: Check,
    title: "デザイン、個数、納期が決まり次第注文確定",
    text: "営業がお客様にとって最適な飴をご提案いたします。",
  },
  {
    icon: Gift,
    title: "職人が心を込めて制作",
    text: "昔ながらの伝統技法で職人が一から手作りいたします。",
  },
  {
    icon: Truck,
    title: "納品",
    text: "一括納品なら送料無料。分割納品にも対応いたします。",
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
      "オーダーメイド飴＋無地透明包装",
      "柄無し飴＋オリジナル包装",
      "オーダーメイド飴＋オリジナル包装",
      "未定",
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
      <main className="landingPage">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">販促・おもてなし・記念品を、もっと印象的に。</p>
            <h1>
              <span>小さな一粒が、大きな印象に。</span>
              <span>心に残りつづける贈り物</span>
            </h1>
            <p className="lead">
              <span>オーダーメイド手作り飴やオリジナル包装飴で</span>
              <span>お店やブランドの記憶に残る小さなおもてなしを形にします</span>
            </p>
            <Button>見積もり・相談をする</Button>
          </div>
          <div className="heroImage">
            <img src={assets.hero} alt="飲食店とイベントで配られるオーダーメイド手作り飴" />
          </div>
        </section>

        <section className="section strengthSummary" aria-labelledby="strength-summary-title">
          <SectionTitle id="strength-summary-title" kicker="STRENGTH" title="飴屋MUSASHIの強み" />
          <div className="stats">
            {stats.map(({ icon: Icon, label, value, suffix, description }) => (
              <article className="statCard" key={label}>
                <div className="statPrimary">
                  <Icon size={36} />
                  <div>
                    <span>{label}</span>
                    <strong>
                      {value}
                      <small>{suffix}</small>
                    </strong>
                  </div>
                </div>
                <p className="statDescription">{description}</p>
              </article>
            ))}
          </div>
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
          <div className="solutionHeading">
            <p>飴屋MUSASHIの</p>
            <h2>
              <span>オーダーメイド手作り飴が</span>
              <span>そんな悩みを解決します</span>
            </h2>
          </div>
          <div className="solutionPanel">
            <div className="solutionCopy">
              <div className="solutionBenefits">
                {solutionBenefits.map(({ icon: Icon, title, text }) => (
                  <article key={title}>
                    <Icon size={26} />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <img src={assets.comparison} alt="飴本体と包装印刷の仕上がり比較" />
          </div>
        </section>

        <section className="section features">
          <SectionTitle kicker="REASON" title="飴屋MUSASHIが選ばれている理由">
            商品づくりから納品まで、専任の担当営業がお客様の目的に寄り添います。
          </SectionTitle>
          <div className="reasonGrid">
            {reasons.map(({ number, icon: Icon, title, text }) => (
              <article className="reasonCard" key={number}>
                <div className="reasonCardTop">
                  <span>{number}</span>
                  <Icon size={32} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cases">
          <SectionTitle kicker="CASE" title="導入実績" />
          <CaseCarousel />
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

        <ComparisonSection />
        <ProcessSection />
        <FaqSection />
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}

function CaseCarousel() {
  const trackRef = useRef(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  function updateControls() {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollBack(track.scrollLeft > 2);
    setCanScrollForward(track.scrollLeft < maxScrollLeft - 2);
  }

  useEffect(() => {
    updateControls();
    window.addEventListener("resize", updateControls);
    return () => window.removeEventListener("resize", updateControls);
  }, []);

  function scrollCases(direction) {
    const track = trackRef.current;
    const card = track?.querySelector(".caseCard");
    if (!track || !card) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const distance = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: "auto",
    });
  }

  return (
    <div className="caseCarousel">
      <div className="caseControls" aria-label="導入実績カルーセルの操作">
        <button
          type="button"
          aria-label="前の導入実績を見る"
          aria-controls="case-carousel"
          disabled={!canScrollBack}
          onClick={() => scrollCases(-1)}
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="次の導入実績を見る"
          aria-controls="case-carousel"
          disabled={!canScrollForward}
          onClick={() => scrollCases(1)}
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
      <div
        className="caseTrack"
        id="case-carousel"
        ref={trackRef}
        role="region"
        aria-label="導入実績5件"
        tabIndex="0"
        onScroll={updateControls}
      >
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
    </div>
  );
}

function ComparisonSection() {
  return (
    <section className="section comparison" aria-labelledby="comparison-title">
      <SectionTitle id="comparison-title" kicker="COMPARISON" title="他社との比較">
        小ロット・価格・納期に加え、オリジナル制作と納品方法まで比べてお選びください。
      </SectionTitle>
      <div className="comparisonTableWrap" role="region" aria-label="他社との比較表" tabIndex="0">
        <table>
          <caption className="srOnly">飴屋MUSASHIと一般的なオーダーメイド飴サービスの比較</caption>
          <thead>
            <tr>
              <th scope="col">比較ポイント</th>
              <th scope="col" className="musashiColumn">
                飴屋MUSASHI
              </th>
              <th scope="col">一般的なサービス</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td className="musashiColumn">
                  <Check size={18} aria-hidden="true" />
                  <strong>{row.musashi}</strong>
                </td>
                <td>{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="comparisonNote">一般的なサービスの条件は会社・商品ごとに異なります。詳しくは各社へご確認ください。</p>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process" aria-labelledby="process-title">
      <SectionTitle id="process-title" kicker="FLOW" title="相談から納品までの流れ">
        ご相談から制作、納品まで、担当営業が伴走します。
      </SectionTitle>
      <ol className="processScroller" aria-label="相談から納品までの4ステップ">
        {processSteps.map(({ icon: Icon, title, text }, index) => (
          <li className="processCard" key={title}>
            <div className="processCardTop">
              <span>STEP {index + 1}</span>
              <Icon size={28} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
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
  const [open, setOpen] = useState(null);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <SectionTitle id="faq-title" kicker="FAQ" title="よくあるご質問" />
      <div className="faqList">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article className={`faqItem${isOpen ? " open" : ""}`} key={item.q}>
              <button
                className="faqQ"
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{item.q}</span>
                <ChevronRight size={20} className="faqIcon" aria-hidden="true" />
              </button>
              {isOpen && (
                <p className="faqA" id={answerId}>
                  {item.a}
                </p>
              )}
            </article>
          );
        })}
      </div>
      <p className="faqMore">
        その他のご質問は<a href="#estimate">お問い合わせフォーム</a>からお気軽にどうぞ。
      </p>
    </section>
  );
}

function EstimateForm() {
  const [status, setStatus] = useState("idle");
  const [selections, setSelections] = useState({});

  function toggleOption(group, option, allowsMultiple) {
    setSelections((current) => {
      const selected = current[group] || [];
      const next = allowsMultiple
        ? selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option]
        : [option];

      return { ...current, [group]: next };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectionSummary = Object.entries(selections)
      .filter(([, options]) => options.length > 0)
      .map(([group, options]) => `${group}：${options.join("、")}`)
      .join(" / ");
    const payload = {
      name: formData.get("name") || "",
      company: formData.get("company") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      quantity: selectionSummary,
      message: formData.get("message") || "",
      _honeypot: formData.get("_gotcha") || "",
    };

    setStatus("sending");

    try {
      const response = await fetch("https://ameya-musashi-contact.k-kanno.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus(response.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section estimate" id="estimate">
      <div className="estimateIntro">
        <h2>デザイン・金額・納期からご相談いただけます</h2>
        <p>内容が未定でも大丈夫です。選択肢にチェックを入れて、分かる範囲でお問い合わせください。</p>
        <div className="phoneBox">
          <Phone size={22} />
          <div>
            <span>お急ぎの方はお電話でも承ります</span>
            <a className="phoneNumber" href="tel:08097001919">
              080-9700-1919
            </a>
          </div>
        </div>
      </div>
      {status === "done" ? (
        <div className="formDone" role="status">
          <Check size={40} aria-hidden="true" />
          <h3>送信が完了しました</h3>
          <p>1営業日以内にご連絡いたします。確認メールもあわせてご確認ください。</p>
        </div>
      ) : (
        <form className="quoteForm" onSubmit={handleSubmit} aria-busy={status === "sending"}>
          <label className="honeyField" aria-hidden="true">
            ウェブサイト
            <input type="text" name="_gotcha" autoComplete="off" tabIndex="-1" />
          </label>
          {formGroups.map((group) => {
            const allowsMultiple = group.label === "相談したい内容";

            return (
              <fieldset key={group.label}>
                <legend>{group.label}</legend>
                <div className="chips selectable">
                  {group.options.map((option) => {
                    const isSelected = (selections[group.label] || []).includes(option);

                    return (
                      <label key={option} className={isSelected ? "selected" : ""}>
                        <input
                          type={allowsMultiple ? "checkbox" : "radio"}
                          name={group.label}
                          value={option}
                          checked={isSelected}
                          onChange={() => toggleOption(group.label, option, allowsMultiple)}
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            );
          })}
          <div className="fieldGrid">
            <label>
              会社名
              <input type="text" name="company" autoComplete="organization" maxLength="120" placeholder="例）株式会社 飴屋MUSASHI" />
            </label>
            <label>
              お名前 <span className="required">必須</span>
              <input type="text" name="name" autoComplete="name" maxLength="80" placeholder="例）山田 太郎" required />
            </label>
            <label>
              メールアドレス <span className="required">必須</span>
              <input type="email" name="email" autoComplete="email" maxLength="254" placeholder="例）info@example.jp" required />
            </label>
            <label>
              電話番号
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" maxLength="40" placeholder="例）03-1234-5678" />
            </label>
            <label>
              ご要望・ご質問
              <textarea name="message" maxLength="3000" placeholder="用途や納期、検討中の内容をご記入ください" />
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
            <p className="formError" role="alert">
              送信に失敗しました。お手数ですがお電話にてご連絡ください。
            </p>
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
        <a href="/#faq">FAQ</a>
        <a href="/#estimate">お問い合わせ</a>
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

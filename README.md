# AlpineBridgeFinance

Website & future platform for **fiat ↔ crypto ↔ gold** exchange guidance in Lugano, Switzerland.  
Built with [Next.js](https://nextjs.org) (TypeScript + Tailwind), bootstrapped via [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev

Open http://localhost:3000
 with your browser.

Start editing by modifying src/app/page.tsx.
The page auto-updates as you edit the file.

📦 Tech Stack

Framework: Next.js 15 (App Router) + TypeScript

Styling: Tailwind CSS

Fonts: next/font
 with Geist

Deployment: Vercel

🗺️ Site Structure (MVP → Growth)
Public routes
/                      → Home
/services              → Services (fiat↔crypto, gold, guidance)
/process               → How it works (step by step)
/compliance            → KYC/AML & crypto screening
/pricing               → Pricing / commissions / limits
/offices               → Offices & contacts (map, hours)
/contact               → Lead form
/legal/terms           → Terms of use
/legal/privacy         → Privacy policy
/faq                   → FAQ



Future routes
/partner               → Partner program / intermediary contract
/status                → Client portal (status of deals)
/admin                 → Admin dashboard (auth required)
/kyc                   → Document upload (provider integration)



📁 Project Layout
src/
  app/
    (public)/
      page.tsx
    services/
    process/
    compliance/
    pricing/
    offices/
    contact/
    legal/
      terms/page.tsx
      privacy/page.tsx

  components/
    ui/          # reusable UI (Button, Input…)
    layout/      # Header, Footer, LangSwitch
    sections/    # page sections (Hero, Features, Steps…)

  lib/
    config.ts    # site config, office addresses
    validators.ts
    mailer.ts    # (later) form notifications

public/
  favicon.ico
  apple-touch-icon.png (opt.)






  🧭 Navigation

Home

Services

Process

Compliance

Pricing

Offices

Contact

Footer: Terms · Privacy · FAQ · Socials

🧩 Content Overview
Home

Title: AlpineBridgeFinance

Subtitle: Fiat ↔ Crypto ↔ Gold — Lugano, Switzerland

3–4 highlights (safety, transparency, licensed offices, KYC guidance)

CTA → /contact

Services

Exchange guidance (fiat ↔ crypto) & gold purchase

Explanation of process, rules, documents

Disclaimer: not advertising partner brand; independent intermediary

Process

Request

Rules / amounts explained

KYC

Office visit scheduled

Exchange executed

Confirmation / receipt

Compliance

What is KYC

AML & crypto wallet screening

Principles: legality, confidentiality, licensed offices only

Pricing

Rules by amount (e.g. up to 1,000 CHF no ID; higher requires KYC)

Example fees (to be updated with partner data)

Offices

Addresses, map, hours

Buttons: Call · Route · WhatsApp

Contact

Form: name, email/phone, amount, currency, notes, consent

Validation (zod), submit to API (later to DB/CRM)

🧪 Roadmap
MVP (Weeks 1–2)

Pages: Home, Services, Process, Compliance, Offices, Contact, Legal

Header/Footer, base typography

Contact form with validation

v1 (Weeks 3–4)

i18n (IT, EN, DE, FR, RU, 中文)

Simple CRM table (leads)

SEO: metadata, sitemap, robots

v2

Form email/webhook notifications

Dynamic pricing calculator

KYC/AML integrations

🔐 Legal Notice

AlpineBridgeFinance acts as an intermediary: no custody of funds, no financial advice.

All deals are executed in licensed partner offices.

Partner brand use is restricted (requires explicit agreement).

📚 Learn More

Next.js Documentation

Learn Next.js

Next.js GitHub Repository

☁️ Deploy on Vercel

The easiest way to deploy is via Vercel Platform.

See deployment docs.


///////////////////////////////////////////////////////////
## Roadmap — What’s Next

### Контент и доверие
- [ ] Дописать тексты: **Services / Process / Compliance** (суммы → документы → «чистота» крипто).
- [ ] Pricing — заглушка с диапазонами и дисклеймером.
- [ ] Offices — точные адреса и часы (плейсхолдеры).
- [ ] Contact — форма + чекбокс согласия + тексты о данных.

### Лиды и связь
- [ ] Настроить отправку заявок с /contact (email / Telegram / Google Sheet / webhook).
- [ ] Добавить простую anti-spam защиту (honeypot).
- [ ] Уведомления администратору при заявке.

### SEO-минимум
- [ ] sitemap.xml, robots.txt.
- [ ] Open Graph: картинка (1200×630), заголовок, описание.
- [ ] Title/Description для всех страниц.

### Юридические и приватность
- [ ] Terms & Privacy (RU/EN).
- [ ] Cookie-баннер («только функциональные»).

### I18n
- [ ] Подключить `next-intl`.
- [ ] Локализации: IT / EN / DE / FR / RU / 中文.

### Платформенная часть (после MVP)
- [ ] Таблица лидов (админ/CSV).
- [ ] Интеграция KYC/AML провайдера (опционально).
- [ ] Service Worker (офлайн) при необходимости.
```
.
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── app
│   │   ├── compliance
│   │   ├── contact
│   │   ├── globals.css
│   │   ├── language
│   │   ├── layout.tsx
│   │   ├── legal
│   │   ├── page.tsx
│   │   ├── pricing
│   │   ├── process
│   │   ├── request
│   │   └── services
│   ├── components
│   │   ├── layout
│   │   └── qr
│   └── config
│       └── nav.ts
├── structure.txt
└── tsconfig.json

16 directories, 22 files
///////////////////////////////////////////////////////////////////

Design Maket — пошаговый план
0. Подготовка

0.1 Палитра и фон: нейтральный светлый фон (не чисто белый), акценты: Fiat (#C0392B), Crypto (#1ABC9C), Gold (#D4AF37).
0.2 Отступы: высота секций: 80–96px (desktop) / 48–64px (mobile).
Готово, когда: фон не «стерильный», секции “дышат”.

1. Header (шапка)

1.1 Навигация: Home · Services · Pricing · Process · Compliance · Offices · Contact.
1.2 Главный элемент справа: одна CTA — Start Exchange (не меняется по сайту).
1.3 Активный пункт меню: заметная подсветка/подчёркивание.
Готово, когда: CTA видна на каждой странице, активный пункт читается мгновенно.

2. Hero (первый экран, /)

2.1 Композиция (desktop): слева текст+CTA, справа — карточка с QR. На мобиле: текст → CTA → QR.
2.2 Тексты:

H1: AlpineBridgeFinance

Подзаголовок: Fiat ↔ Crypto ↔ Gold — Licensed deals in Lugano

Описание (2 строки): Official agent. Secure in-office exchanges, compliant KYC/AML, concierge support.

Маркеры доверия (3 шт.):

Licensed offices only

Clear KYC tiers by amount

Concierge support end-to-end

CTA (кнопка): Start Exchange

Микро-текст под CTA: No funds to third parties • 3 office locations

QR-карточка:
Заголовок: Open on your phone · Подпись: Scan the code
Готово, когда: с первого экрана понятно, куда нажать, QR не доминирует.

3. Блок преимуществ (под героем)

3.1 Три карточки одинаковой высоты с иконкой, заголовком и одной фразой:

Safe — Licensed offices. No third-party custody.

Compliant — KYC/AML tiers by amount. Clear document list.

Concierge — From crypto screening to office booking & notary.
Готово, когда: карточки уравнены, при hover слегка «поднимаются».

4. Services (/services)

4.1 Секции-услуги (4 шт.):

Fiat ↔ Crypto Exchange — In-office, transparent, compliant.

Gold Purchase Assistance — From selection to payment execution.

Compliance Guidance — KYC/AML, source-of-funds, address screening.

Deal Support — Scheduling, documents, coordination with partners.
4.2 CTA внизу страницы: Start Exchange.
Готово, когда: каждая услуга понятна за 3–5 секунд.

5. Pricing (/pricing)

5.1 Структура: заголовок → короткое описание → таблица «Комиссии и лимиты» → примечания.
5.2 Тексты:

Заголовок: Pricing & Limits

Описание: Transparent rates and clear verification levels by amount.

Примечания:
– Final pricing depends on deal size, currency pair, and office.
– All exchanges are executed in licensed offices.
5.3 CTA: Start Exchange.
Готово, когда: видно, что цены прозрачны и зависят от суммы.

6. Process (/process)

6.1 5 шагов (иконки + 1 строка):

Inquiry — Tell us your pair, amount, and timing.

Screening — Optional crypto screening via bot.

KYC/Docs — We share the exact checklist by tier.

Scheduling — Pick an office and time slot.

Execution — Deal in office. Receipt and confirmation.
6.2 CTA: Book a Meeting.
Готово, когда: путь клиента понятен за 10–15 секунд.

7. Compliance (/compliance)

7.1 Интро: We follow Swiss KYC/AML rules. Required documents depend on deal amount (tiers).
7.2 Таблица KYC Tiers (заголовки):

Tier 1 (lower amounts) — ID, basic form.

Tier 2 (mid amounts) — ID, source-of-funds, address proof.

Tier 3 (high amounts) — Enhanced due diligence (EDD).
7.3 FAQ (3–5 вопросов):

What documents do I need for my amount?

How long does verification take?

Is my data protected?

Can I use a company account?

Do you accept stablecoins?
7.4 CTA: Prepare Documents.
Готово, когда: посетитель понимает, что нужно именно ему по сумме.

8. Offices (/offices)

8.1 Лид-текст: Three licensed offices. Choose the most convenient location.
8.2 Карточки офисов (3 шт.): адрес, часы, контакт, CTA: Book a Meeting.
8.3 Карта: кликабельные метки; адрес открывает навигатор.
Готово, когда: адрес и время читаются мгновенно, карта работает.

9. Contact (/contact)

9.1 Форма (минимум): Name · Email/WhatsApp/Telegram · Pair · Amount · Preferred office/time · Comment.
9.2 Текст над формой: Tell us the pair, amount, and preferred office/time. We’ll confirm shortly.
9.3 CTA формы: Send Request.
Готово, когда: форма короткая, понятная, не отпугивает.

10. Footer

10.1 About (2 строки):
Official agent of a Swiss company providing in-office crypto ↔ fiat exchanges and gold purchase support.
10.2 Compliance note: We don’t take custody. All exchanges are executed in licensed offices with verified counterparties.
10.3 Legal: © AlpineBridgeFinance. All rights reserved. Terms • Privacy.
Готово, когда: футер лаконичный и внушает доверие.

11. Архитектура CTA (сквозная)

11.1 Главная CTA: Start Exchange — в герое и в хедере.
11.2 Повторы CTA: внизу Services, Pricing, Process, Compliance, Offices.
Готово, когда: на любой странице есть путь к действию за 1 клик.

12. Тон доверия (microcopy)

12.1 Под героем строка: Official agent of a Swiss company • 3 licensed offices.
12.2 В футере строка: We don’t take custody… (см. п.10.2).
Готово, когда: ключевые сомнения закрыты прямо текстом.

13. Микро-анимации

13.1 Навигация: мягкая подложка/подчёркивание при hover (200–250мс).
13.2 Карточки: лёгкое поднятие + тень при hover.
13.3 Кнопки: небольшой “press” при клике.
Готово, когда: интерфейс живой, но ничего не отвлекает от CTA.

14. Доступность (A11y)

14.1 Контраст текста/фона ≥ WCAG AA.
14.2 Видимый фокус у ссылок/кнопок.
14.3 Альт-тексты для QR и важных изображений.
Готово, когда: проходит базовую проверку доступности.

15. Мультиязычность (6 языков)

15.1 Перевести: навигацию, Hero, CTA, карточки преимуществ, заголовки страниц, формы, FAQ, футер.
15.2 Иконка языка — вторична, не конкурирует с CTA.
Готово, когда: переключение языка не ломает сетку и длину заголовков.

16. Финальный чек-лист перед релизом

 CTA видна на каждой странице и в хедере.

 На мобиле: в герое порядок — заголовок → CTA → QR.

 Карточки преимуществ одинаковой высоты.

 Services/Pricing/Process имеют повтор CTA внизу.

 Compliance чётко объясняет уровни (tiers) и документы.

 Offices: адреса/часы/карта работают и кликабельны.

 В футере есть non-custody и юридический блок.

 Контрасты и фокусы соответствуют доступности.

17. Приоритеты спринта (что делать по дням)

День 1: Header (CTA) + Hero (тексты/композиция).
День 2: Блок преимуществ + повтор CTA на /services и /pricing.
День 3: /process (5 шагов) + /compliance (tiers + FAQ).
День 4: /offices (карта + 3 карточки) + /contact (короткая форма).
День 5: Footer + микроанимации + доступность + общий полиш.
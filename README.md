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
Что дальше (по уму и по важности)

Контент и доверие (сегодня/завтра)

Дописать тексты: Services, Process, Compliance (четко: суммы → какие документы → что такое «чистота» крипто).

На Pricing — пока заглушка с примерами диапазонов и дисклеймером.

На Offices — точные адреса/часы (плейсхолдеры — потом обновим).

На Contact — форма + чекбокс согласия и тексты о данных.

Лиды и связь (после контента)

Форма /contact: отправка на почту/в Telegram/в Google Sheet или webhook.

Простая anti-spam защита (honeypot).

Уведомление тебе при заявке.

SEO-минимум

sitemap.xml, robots.txt.

Open Graph (картинка 1200×630, заголовок/описание).

title/description на страницах.

Юридические и приватность

Terms / Privacy: простая, но корректная версия (RU/EN).

Баннер cookies (легкий, без трекинга — «только функциональные»).

I18n (когда будет над чем работать)

Языки: IT/EN/DE/FR/RU/中文 через next-intl.

Платформенная часть (после MVP)

Табличка лидов (админ/CSV).

Интеграция KYC/AML провайдера (если решишь делать онлайн-прекомплаенс).

Сервис-воркер (офлайн) при необходимости.
```

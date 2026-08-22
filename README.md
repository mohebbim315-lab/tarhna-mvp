# طرحنا — Tarhna MVP

MVP اولیه پلتفرم تولید محتوای AI.

## اجرا

1. Node.js 20+ نصب باشد.
2. PostgreSQL بسازید.
3. `.env.example` را به `.env` کپی کنید و `DATABASE_URL` را تنظیم کنید.
4. اجرا:
   ```bash
   npm install
   npx prisma generate
   npx prisma db push
   npm run dev
   ```
5. سایت: `http://localhost:3000`

## وضعیت

این نسخه اسکلت اجرایی MVP است و بخش‌های زیر را دارد:
- صفحه اصلی RTL
- Generator
- Prompt Enhancer mock
- انتخاب Standard/Pro
- مدل دیتابیس PostgreSQL
- Credit Wallet schema
- Payment schema
- Gallery schema
- Referral schema
- صفحات Edit / Poster / Logo / Prompts / Gallery / Dashboard

### قبل از Production باید تکمیل شود
- OTP واقعی
- احراز هویت امن و session
- API واقعی تولید تصویر
- تراکنش اتمیک Credit
- Storage واقعی
- درگاه پرداخت ایرانی
- Webhook پرداخت
- پنل Admin
- moderation و گزارش محتوا
- rate limiting و anti-abuse
- پرداخت ارزی
- قوانین حریم خصوصی و شرایط استفاده

## معماری AI

`User -> Tarhna AI Router -> Provider Adapter -> Image Model`

فایل `lib/ai.ts` در MVP یک mock provider دارد تا UI بدون API پولی قابل تست باشد.

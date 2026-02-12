# Email & Contact Strategy

The site needs two things: a working contact form and a professional email address. These overlap — the contact form needs somewhere to deliver messages, and the email setup determines how you reply.

## Option A: Minimal (Formspree only)

**Cost:** Free (50 submissions/month)
**Accounts needed:** Formspree
**Custom email:** No — form submissions go to your personal email

- Sign up at formspree.io, point the contact form at their endpoint
- Submissions arrive in your personal inbox
- No custom domain email — you reply from your personal address
- Fastest to set up (30 minutes), no DNS changes needed
- Good if you just want the form working now and don't care about a branded email yet

## Option B: Full Cloudflare Stack (recommended)

**Cost:** Free
**Accounts needed:** SMTP2GO, Resend
**Custom email:** Yes — `laura@yourdomain.com` for both receiving and sending

### How it fits together:

1. **Contact form → Cloudflare Pages Function → Resend**
   - Form submissions hit a serverless function in your repo (`functions/api/contact.ts`)
   - Function calls Resend API to email you a formatted notification
   - Free: Pages Functions (100K req/day) + Resend (100 emails/day)

2. **Inbound email → Cloudflare Email Routing → Gmail**
   - Create `laura@yourdomain.com`, `hello@yourdomain.com`, etc.
   - All forwarded to your personal Gmail
   - Free, unlimited addresses

3. **Outbound email → Gmail "Send mail as" → SMTP2GO**
   - Reply from Gmail, appears as `laura@yourdomain.com`
   - Free tier: 1,000 emails/month
   - One-time setup in Gmail settings

### Setup order:
1. Transfer domain to Cloudflare (see domain-transfer.md)
2. Set up Cloudflare Email Routing (inbound)
3. Set up SMTP2GO + Gmail "Send mail as" (outbound)
4. Build the Pages Function + wire up Resend (contact form)

Everything stays free, everything runs through Cloudflare, and you get a fully branded email presence.

## Option C: Formspree + Cloudflare Email (middle ground)

**Cost:** Free
**Accounts needed:** Formspree, SMTP2GO
**Custom email:** Yes — but contact form goes through Formspree instead of your own function

- Contact form: Formspree (simpler, no code to maintain)
- Inbound email: Cloudflare Email Routing → Gmail
- Outbound email: Gmail + SMTP2GO

Same branded email as Option B, but trades the Pages Function for Formspree's hosted form handling. Less control, but fewer moving parts.

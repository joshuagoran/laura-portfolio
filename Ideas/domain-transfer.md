# Domain Transfer: Squarespace → Cloudflare

Current domain is paid through August 2026 via Squarespace.

## When to Do It

Anytime before August renewal. No rush — the site is live on Cloudflare Pages already.

## Steps

1. **Unlock the domain** in Squarespace (Settings → Domains → your domain → Transfer away)
2. **Get the auth/EPP code** from Squarespace (they'll email it)
3. **Initiate transfer at Cloudflare** (Domain Registration → Transfer → enter domain → paste auth code)
4. **Approve the transfer** via confirmation email from the current registrar
5. Wait for propagation (up to 5-7 days, often faster)

## Notes

- Cloudflare charges at-cost (~$9-10/yr for .com), paid at transfer time
- The year you pay for gets added on top of your existing expiry (no lost time)
- ICANN requires 60 days since last transfer or registration — not an issue here
- Once transferred, connect the domain to the Cloudflare Pages project under Custom domains

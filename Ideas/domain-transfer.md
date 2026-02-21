# Domain Setup: noellandscapestudio.com → Cloudflare Pages

Domain: `noellandscapestudio.com`
Registrar: Squarespace (paid through August 2026)
Hosting: Cloudflare Pages

## What We Did (Feb 20, 2026)

Pointed the domain from the old Squarespace site to the Cloudflare Pages project by changing nameservers (no domain transfer needed).

### Steps Taken

1. **In Cloudflare**: Workers & Pages → project → Custom domains → added `noellandscapestudio.com`
2. **Cloudflare provided nameservers** to point the domain at
3. **In Squarespace**: Settings → Domains → `noellandscapestudio.com` → changed nameservers to Cloudflare's
4. Waiting for DNS propagation (up to 48 hours, usually faster)

## What's Next

- **Verify** the domain is resolving to Cloudflare Pages once propagation completes
- **Cancel Squarespace subscription** when ready (the old site will no longer be reachable on this domain)
- **Optional: Transfer domain registration** to Cloudflare before August 2026 renewal for cheaper renewals (~$9-10/yr at-cost vs Squarespace pricing). See steps below.

## Optional: Full Domain Transfer (Later)

If you want to move the domain registration itself to Cloudflare:

1. Unlock the domain in Squarespace (Settings → Domains → Transfer away)
2. Get the auth/EPP code from Squarespace (they'll email it)
3. Initiate transfer at Cloudflare (Domain Registration → Transfer → enter domain → paste auth code)
4. Approve the transfer via confirmation email
5. Wait 5-7 days for transfer to complete

Notes:
- Cloudflare charges at-cost (~$9-10/yr for .com), paid at transfer time
- The year you pay for gets added on top of existing expiry (no lost time)
- ICANN requires 60 days since last transfer or registration — not an issue here

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend"

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
})

export async function sendWorkbookDownloadEmail({ toEmail, toName, workbookSlugs }) {
  if (!workbookSlugs?.length) return

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const { createDownloadToken } = await import("./download-tokens")
  const { WORKBOOKS, COMPANION } = await import("./books-catalog")

  const from = new Sender(
    process.env.MAILERSEND_FROM_EMAIL,
    process.env.MAILERSEND_FROM_NAME
  )

  const recipients = [new Recipient(toEmail, toName || "Customer")]

  const listItems = workbookSlugs
    .map((slug) => {
      const isCompanion = slug === "companion"
      const label = isCompanion ? COMPANION.title : WORKBOOKS.find((w) => w.slug === slug)?.title
      if (!label) return ""

      const token = createDownloadToken({
        workbookSlug: slug,
        email: toEmail,
        expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
      })

      const url = `${siteUrl}/api/workbook-download/${token}`
      return `<li style="margin-bottom:10px;"><strong>${label}</strong><br /><a href="${url}">${url}</a></li>`
    })
    .filter(Boolean)
    .join("")

  const emailParams = new EmailParams()
    .setFrom(from)
    .setTo(recipients)
    .setSubject("Your Wanda Rogers workbook download is here")
    .setHtml(`
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">
        <h2>Your workbook is ready</h2>
        <p>Thank you for your purchase. Click your download link(s) below to get your PDF(s).</p>
        <ul>${listItems}</ul>
        <p>These links expire in 7 days. Save your PDF after downloading.</p>
      </div>
    `)
    .setText(`Your workbook download links are ready. Visit your email for clickable links.`)

  await mailerSend.email.send(emailParams)
}

export async function sendDownloadEmail({ toEmail, toName, tracks }) {
  if (!tracks?.length) return

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const { createDownloadToken } = await import("./download-tokens")

  const from = new Sender(
    process.env.MAILERSEND_FROM_EMAIL,
    process.env.MAILERSEND_FROM_NAME
  )

  const recipients = [new Recipient(toEmail, toName || "Customer")]

  const listItems = tracks
    .map((track) => {
      const token = createDownloadToken({
        trackSlug: track.slug,
        email: toEmail,
        expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
      })

      const url = `${siteUrl}/api/download/${token}`
      return `<li style="margin-bottom:10px;"><strong>${track.title}</strong><br /><a href="${url}">${url}</a></li>`
    })
    .join("")

  const emailParams = new EmailParams()
    .setFrom(from)
    .setTo(recipients)
    .setSubject("Your Wanda Rogers music download is here")
    .setHtml(`
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">
        <h2>Your music is ready</h2>
        <p>Thank you for your purchase. Your download links are below.</p>
        <ul>${listItems}</ul>
        <p>These links expire in 7 days.</p>
      </div>
    `)
    .setText(
      `Your download links:\n\n${tracks
        .map((track) => `${track.title}`)
        .join("\n")}`
    )

  await mailerSend.email.send(emailParams)
}
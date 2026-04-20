import { MailerSend, EmailParams, Sender, Recipient } from "mailersend"

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
})

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
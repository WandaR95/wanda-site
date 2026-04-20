import crypto from "crypto"

const secret = process.env.DOWNLOAD_TOKEN_SECRET

function sign(payload) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex")
}

export function createDownloadToken({ trackSlug, email, expiresAt }) {
  const payload = JSON.stringify({ trackSlug, email, expiresAt })
  const signature = sign(payload)
  const combined = JSON.stringify({ payload, signature })
  return Buffer.from(combined).toString("base64url")
}

export function verifyDownloadToken(token) {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8")
    const parsed = JSON.parse(decoded)
    const expected = sign(parsed.payload)

    if (parsed.signature !== expected) {
      return null
    }

    const data = JSON.parse(parsed.payload)

    if (Date.now() > data.expiresAt) {
      return null
    }

    return data
  } catch {
    return null
  }
}
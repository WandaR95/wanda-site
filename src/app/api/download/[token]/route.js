import fs from "fs"
import path from "path"
import { getTrackBySlug } from "@/lib/music-catalog"
import { verifyDownloadToken } from "@/lib/download-tokens"

export async function GET(_request, { params }) {
  const tokenData = verifyDownloadToken(params.token)

  if (!tokenData) {
    return new Response("Invalid or expired download link.", { status: 403 })
  }

  const track = getTrackBySlug(tokenData.trackSlug)

  if (!track) {
    return new Response("Track not found.", { status: 404 })
  }

  const filePath = path.join(process.cwd(), "storage", "full-tracks", track.fullPath)

  if (!fs.existsSync(filePath)) {
    return new Response("File not found.", { status: 404 })
  }

  const fileBuffer = fs.readFileSync(filePath)

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Disposition": `attachment; filename="${track.slug}.mp3"`,
      "Cache-Control": "no-store",
    },
  })
}
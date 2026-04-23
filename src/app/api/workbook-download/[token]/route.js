import fs from "fs"
import path from "path"
import { verifyDownloadToken } from "@/lib/download-tokens"
import { WORKBOOKS, COMPANION } from "@/lib/books-catalog"

export async function GET(_request, { params }) {
  const tokenData = verifyDownloadToken(params.token)

  if (!tokenData) {
    return new Response("Invalid or expired download link.", { status: 403 })
  }

  const slug = tokenData.workbookSlug
  const isCompanion = slug === "companion"
  const fileSlug = isCompanion ? COMPANION.fileSlug : WORKBOOKS.find((w) => w.slug === slug)?.fileSlug

  if (!fileSlug) {
    return new Response("Workbook not found.", { status: 404 })
  }

  const filePath = path.join(process.cwd(), "storage", "workbooks", `${fileSlug}.pdf`)

  if (!fs.existsSync(filePath)) {
    return new Response("File not found.", { status: 404 })
  }

  const fileBuffer = fs.readFileSync(filePath)
  const filename = isCompanion
    ? "Creative-Clarity-Companion.pdf"
    : `${fileSlug}-workbook.pdf`

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  })
}

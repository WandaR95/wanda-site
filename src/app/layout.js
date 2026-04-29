import "./globals.css"

const META_TITLE = "Wanda Rogers | Artist, Author, Founder of Mellow Mastermind"
const META_DESCRIPTION =
  "Wanda Rogers is an artist, author, and founder of Mellow Mastermind, a creative framework for clarity, self-trust, and sustainable expression. She helps creatives break through overthinking, build clarity, and create with more consistency through books, music, and transformational tools."

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://www.wandarogers.com",
    siteName: "Wanda Rogers",
    images: [
      {
        url: "/wanda-hero.jpg",
        width: 900,
        height: 1100,
        alt: "Wanda Rogers — Artist, Author, Founder of Mellow Mastermind",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/wanda-hero.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-cream text-ink antialiased"
        suppressHydrationWarning
      >
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml'); ml('account','2171457');`,
          }}
        />
      </body>
    </html>
  )
}
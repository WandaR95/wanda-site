import "./globals.css"

export const metadata = {
  title: "Wanda Rogers | Artist, Author, Founder of Mellow Mastermind",
  description:
    "Wanda Rogers is an artist, author, and founder of Mellow Mastermind — a creative framework for clarity, self-trust, and sustainable expression.",
  icons: {
    icon: "/favicon.png",
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
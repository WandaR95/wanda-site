export const metadata = {
  title: "Wanda Rogers | Artist, Author, Creativity Coach",
  description:
    "The official website of Wanda Rogers — music, books, free creative tools, coaching, and Mellow Mastermind.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
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
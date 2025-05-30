import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IdeoGFX",
  description: "Your site description here", // Add a meaningful description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag for responsiveness */}
        {/* COMMENTED TEMPORARLY TO FORCE DESKTOP VIEWPORT */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="viewport" content="width=1024, user-scalable=no" />

        {/* Add other meta tags for SEO */}
        <meta name="description" content="Your site description here" />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="IdeoGFX" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="IdeoGFX" />
        <meta property="og:description" content="Your site description here" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ideogfx-com.web.app" />
        <meta
          property="og:image"
          content="https://ideogfx-com.web.app/logo.png"
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IdeoGFX" />
        <meta name="twitter:description" content="Your site description here" />
        <meta
          name="twitter:image"
          content="https://ideogfx-com.web.app/logo.png"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-135QK8T9VD`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-135QK8T9VD');
          `}
        </Script>

        {/* Hotjar Tracking Code */}
        <Script id="hotjar" strategy="lazyOnload">
          {`
            (function(h,o,t,j,a,r){
              h.hj = h.hj || function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6414938,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Smartlook Tracking Code */}
        {/* <Script id="smartlook" strategy="afterInteractive">
          {`
            window.smartlook||(function(d) {
              var o=smartlook=function(){o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '5b0fd64945849b5fd66a8ebe8c3aa02bc158b60e', { region: 'eu);
          `}
        </Script> */}

        {/* Microsoft Clarity Tracking Code */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rpynm4ymtu");
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

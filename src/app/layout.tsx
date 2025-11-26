import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { DateBanner } from '@/components/layout/date-banner';

export const metadata: Metadata = {
  title: 'StoryBoost Stickers',
  description: 'Deixe seus Stories irresistíveis com o pack de figurinhas pensado para criar conexão e vender.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <style>
          {`
            /* Alturas seguras: evite 100vh em IAB */
            html, body { height: 100%; min-height: 100%; overflow-x: hidden; }

            /* Use 100svh/dvh em seções de tela cheia */
            .hero, .checkout-wrapper, .full-height {
              min-height: 100svh; /* alternativamente: min-height: 100dvh; */
            }

            /* Cabeçalhos fixos quebram em IAB; prefira sticky */
            .site-header.is-fixed { position: sticky; top: 0; }

            /* Inputs com fonte >=16px evitam zoom forçado no iOS/IAB */
            input, select, textarea { font-size: 16px; }

            /* Evitar travar rolagem do body por engano após modais */
            body.modal-open { overflow: hidden; }
          `}
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap" rel="stylesheet" />
        <Script src="https://fast.wistia.com/player.js" strategy="beforeInteractive" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '809479004946925');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6926e7ebb1a5e6edc1d7a949";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
            <img height="1" width="1" style={{display: 'none'}}
                 src="https://www.facebook.com/tr?id=809479004946925&ev=PageView&noscript=1"
            />
        </noscript>
        <DateBanner />
        {children}
        <Toaster />
        <Script id="in-app-browser-detector" strategy="afterInteractive">
          {`
            (function () {
              var ua = navigator.userAgent || "";
              var isInApp = /Instagram|FBAN|FBAV|Messenger|Line|TikTok/i.test(ua);
              if (isInApp) {
                console.log("In-app browser detectado. Abertura via target _blank no clique do usuário.");
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

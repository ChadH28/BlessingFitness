import Navigation from "@/components/navigation";
import "@/app/globals.css";
import Footer from "@/components/footer";
import AOSProvider from "@/components/aos";
import JsonLd from "@/components/json-ld";

export const metadata = {
  metadataBase: new URL("https://totalblessingfitnessandtraveltours.co.za"),
  title: {
    default: "Total Blessing Fitness & Travel Tours",
    template: "%s | Total Blessing",
  },
  description:
    "Fitness, wellness retreats & guided adventure tours in Cape Town. Total Blessing blends expert workouts with unforgettable guided travel experiences.",
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Total Blessing Fitness & Travel Tours",
    description:
      "Fitness, wellness retreats & guided adventure tours in Cape Town.",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Total Blessing Fitness & Travel Tours",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <JsonLd />
        <Navigation />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}

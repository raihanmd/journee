import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "~/styles/globals.css";
import { ThemeProvider } from "~/providers/ThemeProvoder";

export const metadata = {
  title: "Jourñee. | Travel Agency",
  description: "Lets travel with Jourñee!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={styles.layout}>
        <div className={styles.header}><Header /></div>

        <div className={styles.content}>{children}</div>

        <div className={styles.footer}><Footer /></div>
      </body>
    </html>
  );
}


import localFont from "next/font/local";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" ></link>
      </head>
      <body >
                {children}
        
      </body>
    </html>
  );
}

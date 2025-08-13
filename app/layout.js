export const metadata = {
  title: "Focal Vision",
  description: "Start your project with Focal Vision — quick lead form.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 (optional): replace G-XXXXXXX with your ID or remove */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} />
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-XXXXXXX');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}

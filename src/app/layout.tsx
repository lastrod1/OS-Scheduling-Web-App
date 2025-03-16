import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Scheduling Algorithms</title>
        <style>{`
          html, body {
            background-color: black;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
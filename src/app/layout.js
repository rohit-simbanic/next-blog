import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/globals.css";
export const metadata = {
  title: "Propmptdata",
  description: "Discover & share AI",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}

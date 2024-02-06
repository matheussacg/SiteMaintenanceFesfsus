import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <>
      <Header />
        <main className="min-h-screen flex flex-col items-center justify-center">
          <Slide />
          <Services />
        </main>
      <Footer />
    </>
  );
}

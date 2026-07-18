import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-4">
        <Hero />
        <Companies />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

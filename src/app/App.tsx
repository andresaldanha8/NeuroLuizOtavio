import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VirtualChat } from './components/VirtualChat';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6fafc]">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <VirtualChat />
    </div>
  );
}

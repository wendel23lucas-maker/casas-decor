import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import InstagramSection from "@/components/InstagramSection";
import TipsSection from "@/components/TipsSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DifferentiatorsSection />
        <ServicesSection />
        <PortfolioSection />
        <InstagramSection />
        <TipsSection />
        <ReviewsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

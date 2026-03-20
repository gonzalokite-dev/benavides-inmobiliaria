import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import PropertiesPreview from "@/components/sections/PropertiesPreview";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import InternationalClients from "@/components/sections/InternationalClients";
import NetBenefitCalculator from "@/components/sections/NetBenefitCalculator";
import NetBenefitCalculatorCompact from "@/components/sections/NetBenefitCalculatorCompact";
import SmartValuation from "@/components/sections/SmartValuation";
import TaxDiagnostic from "@/components/sections/TaxDiagnostic";
import LeadForm from "@/components/sections/LeadForm";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PropertiesPreview locale={locale} />
        <ValueProposition />
        <Services />
        <HowWeWork />
        <WhyUs />
        <About />
        <NetBenefitCalculatorCompact />
        <Team />
        <InternationalClients />
        <NetBenefitCalculator />
        <SmartValuation />
        <TaxDiagnostic />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

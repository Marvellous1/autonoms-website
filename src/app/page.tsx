import { Nav }          from "@/components/layout/Nav";
import { Footer }       from "@/components/layout/Footer";
import { Hero }         from "@/components/sections/Hero";
import { LogoBar }      from "@/components/sections/LogoBar";
import { Features }     from "@/components/sections/Features";
import { TeamBuilder }  from "@/components/sections/TeamBuilder";
import { UseCases }     from "@/components/sections/UseCases";
import { InboxCallout } from "@/components/sections/InboxCallout";
import { Benefits }     from "@/components/sections/Benefits";
import { FinalCTA }     from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <TeamBuilder />
        <UseCases />
        <InboxCallout />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

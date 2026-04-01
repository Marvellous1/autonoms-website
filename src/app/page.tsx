import { Nav }            from "@/components/layout/Nav";
import { Footer }         from "@/components/layout/Footer";
import { Hero }           from "@/components/sections/Hero";
import { LogoBar }        from "@/components/sections/LogoBar";
import { Metrics }        from "@/components/sections/Metrics";
import { Features }       from "@/components/sections/Features";
import { AgentPersonas }  from "@/components/sections/AgentPersonas";
import { TeamBuilder }    from "@/components/sections/TeamBuilder";
import { Testimonials }   from "@/components/sections/Testimonials";
import { UseCases }       from "@/components/sections/UseCases";
import { InboxCallout }   from "@/components/sections/InboxCallout";
import { Integrations }   from "@/components/sections/Integrations";
import { Benefits }       from "@/components/sections/Benefits";

import { FAQ }            from "@/components/sections/FAQ";
import { FinalCTA }       from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Metrics />
        <Features />
        <InboxCallout />
        <AgentPersonas />
        <TeamBuilder />
        <Testimonials />
        <UseCases />
        <Integrations />
        <Benefits />

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

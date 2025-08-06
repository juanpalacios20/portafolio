import { ScrollShadow } from "@heroui/react";

import DefaultLayout from "@/layouts/default";
import Hero from "@/components/profile";
import Gallery from "@/components/gallery";
import { Technologies } from "@/components/technologies";
import { Contact } from "@/components/contact";

export default function IndexPage() {
  return (
    <ScrollShadow className="w-screen h-screen">
      <DefaultLayout>
        <section className="flex flex-col gap-20">
          <Hero />
          <Gallery />
          <Technologies />
          <Contact />
        </section>
      </DefaultLayout>
    </ScrollShadow>
  );
}

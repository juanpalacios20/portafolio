import DefaultLayout from "@/layouts/default";
import Hero from "@/components/profile";
import Gallery from "@/components/gallery";
import { Technologies } from "@/components/technologies";
import { ScrollShadow } from "@heroui/react";

export default function IndexPage() {
  return (
    <ScrollShadow className="w-full h-full">
      <DefaultLayout>
        <section className="flex flex-col gap-20">
          <Hero />
          <Gallery />
          <Technologies />
        </section>
      </DefaultLayout>
    </ScrollShadow>
  );
}

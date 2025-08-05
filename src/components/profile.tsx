// src/components/Hero.tsx

import { subtitle, title } from "./primitives";

export default function Hero() {
  return (
    <section className="flex flex-col gap-2">
      <span className={title()}>Juan David Palacios Casanova.</span>
      <span className={title({ color: "blue", size: "sm" })}>
        Desarrollador full stack.
      </span>
      <span className={subtitle()}>
        Soy un desarrollador full stack con gran capacidad de adaptación,
        pensamiento crítico y enfoque en la resolución de problemas. Me apasiona
        aprender, mejorar constantemente y trabajar en equipo para transformar
        ideas en soluciones reales que generen impacto.
      </span>
    </section>
  );
}

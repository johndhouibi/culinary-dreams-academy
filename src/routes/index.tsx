import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Award, Clock, MapPin, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-kitchen.jpg";
import pizza from "@/assets/pizza.jpg";
import pastry from "@/assets/pastry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Académie Master Class — Formation Cuisine & Pizzaïolo à Kélibia" },
      {
        name: "description",
        content:
          "Centre de formation professionnelle à Kélibia : diplômes agréés en cuisine et pâtisserie, formation intensive pizzaïolo et fast food. Encadrement par des chefs.",
      },
      {
        property: "og:title",
        content: "Académie Master Class — Formation Cuisine & Pizzaïolo à Kélibia",
      },
      {
        property: "og:description",
        content:
          "Diplômes agréés en cuisine et pâtisserie, formations pizzaïolo et fast food avec pratique intensive à Kélibia, Tunisie.",
      },
    ],
  }),
  component: Home,
});

const programs = [
  {
    to: "/formation-pizzaiolo" as const,
    image: pizza,
    eyebrow: "Formation intensive",
    title: "Pizzaïolo & Fast Food",
    text: "Pizza 4 Saisons, Napolitaine, Margherita, Makloub, Baguette farcie, Soufflé, Chappati, Mlawi. Pratique intensive, encadrement professionnel, certificat à la clé.",
    meta: "Sessions courtes · Certificat",
  },
  {
    to: "/formation-cuisine" as const,
    image: pastry,
    eyebrow: "Diplôme agréé par l'État",
    title: "Cuisine & Pâtisserie",
    text: "Programme complet en arts culinaires : bases techniques, cuisine chaude et froide, dressage gastronomique et pâtisserie française.",
    meta: "Parcours diplômant",
  },
];

function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Chef dressant une assiette gastronomique dans la cuisine de l'académie"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-40">
          <p className="eyebrow">Kélibia · Tunisie · Depuis 2019</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
            L'école des métiers de bouche du <span className="text-gradient-gold">Cap Bon</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Formations professionnelles en cuisine, pâtisserie, pizzaïolo et fast food. Diplômes
            agréés par l'État, pratique intensive en cuisine réelle et encadrement par des chefs en
            activité.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" hash="inscription" className="btn-gold">
              S'inscrire maintenant <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/formation-pizzaiolo" className="btn-outline-gold">
              Voir les formations
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "Diplômé agréé par l'État", text: "Reconnaissance officielle" },
            { icon: Flame, title: "90% de pratique", text: "En cuisine, chaque jour" },
            { icon: Clock, title: "Sessions flexibles", text: "Intensives ou longue durée" },
            { icon: MapPin, title: "Centre de Kélibia", text: "68 Rue Ali Belhouane" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="eyebrow">Nos programmes</p>
        <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
          Deux parcours, une même exigence de métier
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {programs.map((p) => (
            <Link key={p.to} to={p.to} className="group surface-card overflow-hidden rounded-sm">
              <img
                src={p.image}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-7">
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="mt-3 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
                <p className="mt-6 flex items-center gap-2 text-sm text-gold">
                  {p.meta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-ink/70">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-24">
          <h2 className="text-3xl sm:text-4xl">Prêt à passer derrière les fourneaux ?</h2>
          <p className="mt-4 text-muted-foreground">
            Les places de chaque promotion sont limitées afin de garantir un suivi individuel.
            Réservez la vôtre dès aujourd'hui.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" hash="inscription" className="btn-gold">
              Pré-inscription en ligne
            </Link>
            <a href="tel:+21640701734" className="btn-outline-gold">
              +216 40 701 734
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

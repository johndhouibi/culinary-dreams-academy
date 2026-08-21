import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Award, Utensils, CakeSlice, Soup } from "lucide-react";
import pastry from "@/assets/pastry.jpg";

export const Route = createFileRoute("/formation-cuisine")({
  head: () => ({
    meta: [
      { title: "Formation Cuisine & Pâtisserie diplômante — AMC Kélibia" },
      {
        name: "description",
        content:
          "Formation professionnelle diplômante en cuisine et pâtisserie à Kélibia, agréée par l'État : techniques de base, cuisine gastronomique, dressage et pâtisserie française.",
      },
      { property: "og:title", content: "Formation Cuisine & Pâtisserie diplômante — AMC Kélibia" },
      {
        property: "og:description",
        content:
          "Diplôme agréé par l'État : arts culinaires, dressage gastronomique et pâtisserie française à l'Académie Master Class.",
      },
    ],
  }),
  component: CuisinePage,
});

const tracks = [
  {
    id: "cuisine",
    label: "Arts culinaires",
    icon: Soup,
    intro:
      "Le socle du métier de cuisinier : organisation du poste, maîtrise des cuissons et régularité en service.",
    items: [
      "Hygiène, HACCP et organisation de la brigade",
      "Techniques de découpe et taillage des légumes",
      "Fonds, sauces mères et jus de cuisson",
      "Cuissons : sauté, rôti, braisé, pochage, sous vide",
      "Poissons et viandes : parage, portionnage, cuisson juste",
      "Cuisine tunisienne et méditerranéenne revisitée",
    ],
  },
  {
    id: "gastronomie",
    label: "Dressage & gastronomie",
    icon: Utensils,
    intro:
      "L'assiette qui se vend : composition, volumes, couleurs et régularité dans un service haut de gamme.",
    items: [
      "Principes de composition et d'équilibre de l'assiette",
      "Textures et éléments croquants, gels, émulsions",
      "Dressage à l'assiette et finitions au moment",
      "Élaboration d'un menu et fiches techniques",
      "Calcul des coûts matière et gestion des portions",
      "Service en conditions réelles chronométrées",
    ],
  },
  {
    id: "patisserie",
    label: "Pâtisserie française",
    icon: CakeSlice,
    intro:
      "Toute la précision de la pâtisserie : pesées, températures, cuissons, montage et décor.",
    items: [
      "Pâtes de base : brisée, sucrée, feuilletée, à choux",
      "Crèmes : pâtissière, mousseline, ganaches, mousses",
      "Entremets modernes et glaçages miroir",
      "Viennoiserie : croissants, pains au chocolat, brioche",
      "Travail du chocolat et du sucre, décors",
      "Desserts à l'assiette et pièces de présentation",
    ],
  },
] as const;

function CuisinePage() {
  const [active, setActive] = useState<string>(tracks[0].id);
  const track = tracks.find((t) => t.id === active) ?? tracks[0];

  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Diplômé agréé par l'État</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">
              Formation en <span className="text-gradient-gold">Cuisine et Pâtisserie</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Un parcours professionnel complet, du geste de base à l'assiette gastronomique, avec un
              volet pâtisserie française approfondi. À l'issue de la formation, vous obtenez un
              diplôme agréé par l'État, reconnu par les employeurs du secteur.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" hash="inscription" className="btn-gold">
                Demander le programme
              </Link>
              <Link to="/a-propos" className="btn-outline-gold">
                Voir nos diplômés
              </Link>
            </div>
            <p className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Award className="h-5 w-5 text-gold" />
              Évaluation continue en atelier + examen pratique final.
            </p>
          </div>
          <img
            src={pastry}
            alt="Chef pâtissier dressant une pâtisserie française"
            width={1200}
            height={900}
            className="rounded-sm border border-border object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="eyebrow">Modules</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Un programme en trois blocs</h2>

        <div className="mt-9 flex flex-wrap gap-3">
          {tracks.map((t) => {
            const Icon = t.icon;
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={
                  isActive
                    ? "btn-gold !px-5 !py-2.5 text-sm"
                    : "btn-outline-gold !px-5 !py-2.5 text-sm"
                }
              >
                <Icon className="h-4 w-4" /> {t.label}
              </button>
            );
          })}
        </div>

        <div className="surface-card mt-8 rounded-sm p-7 sm:p-9">
          <p className="text-muted-foreground">{track.intro}</p>
          <ul className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {track.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-10 text-center">
          <h2 className="text-3xl">Prochaine promotion</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Places limitées pour garantir un suivi individuel en cuisine. Contactez-nous pour
            connaître les dates, les tarifs et les modalités de paiement.
          </p>
          <Link to="/contact" hash="inscription" className="btn-gold mt-8">
            Je m'inscris
          </Link>
        </div>
      </section>
    </div>
  );
}

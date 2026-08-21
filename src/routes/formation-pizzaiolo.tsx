import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, ChevronDown, BadgeCheck, UserCheck, Timer } from "lucide-react";
import pizza from "@/assets/pizza.jpg";

export const Route = createFileRoute("/formation-pizzaiolo")({
  head: () => ({
    meta: [
      { title: "Formation Pizzaïolo & Fast Food — AMC Kélibia" },
      {
        name: "description",
        content:
          "Formation intensive pizzaïolo et fast food à Kélibia : pizza 4 saisons, napolitaine, margherita, makloub, baguette farcie, soufflé, chappati et mlawi. Certificat inclus.",
      },
      { property: "og:title", content: "Formation Pizzaïolo & Fast Food — AMC Kélibia" },
      {
        property: "og:description",
        content:
          "Pratique intensive au four, encadrement professionnel et certificat : devenez pizzaïolo ou ouvrez votre snack.",
      },
    ],
  }),
  component: PizzaioloPage,
});

const modules = [
  {
    name: "Pizza 4 Saisons",
    detail:
      "Pâte à pizza maîtrisée, équilibre des quatre garnitures, cuisson homogène et découpe régulière.",
  },
  {
    name: "Pizza Napolitaine",
    detail:
      "Hydratation élevée, pointage et apprêt, cornicione aéré, cuisson rapide à très haute température.",
  },
  {
    name: "Pizza Margherita",
    detail:
      "La référence : sauce tomate crue, mozzarella, basilic. Le module de contrôle du geste de base.",
  },
  {
    name: "Makloub",
    detail:
      "Galette tunisienne pliée : pâte souple, garnitures viande/fromage, cuisson plaque et pliage propre.",
  },
  {
    name: "Baguette Farcie",
    detail: "Préparation des sauces maison, montage rapide en service, gestion des cuissons à la commande.",
  },
  {
    name: "Soufflé",
    detail: "Pâte levée frite ou cuite, garnitures salées, contrôle de la texture et du gonflant.",
  },
  {
    name: "Chappati",
    detail: "Pâte fine, roulage régulier, montage best-seller pour snack et food truck.",
  },
  {
    name: "Mlawi",
    detail: "Feuilletage à la main, cuisson à la plaque, déclinaisons salées pour la vente à emporter.",
  },
];

function PizzaioloPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <img
          src={pizza}
          alt="Pizza napolitaine sortant du four à bois"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="eyebrow">Formation intensive</p>
          <h1 className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Formation <span className="text-gradient-gold">Pizzaïolo & Fast Food</span>
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Un parcours court et 100% opérationnel pour travailler en pizzeria ou lancer votre propre
            snack : pâtes, sauces, four, plaque et organisation du service.
          </p>
          <Link to="/contact" hash="inscription" className="btn-gold mt-8">
            Réserver ma place
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Flame,
              title: "Pratique intensive",
              text: "Vous pétrissez, garnissez et enfournez à chaque séance, sur matériel professionnel.",
            },
            {
              icon: UserCheck,
              title: "Encadrement professionnel",
              text: "Chefs pizzaïolos en activité, corrections individuelles du geste et du rendement.",
            },
            {
              icon: BadgeCheck,
              title: "Certificat de formation",
              text: "Délivré après évaluation pratique : un vrai atout pour l'embauche ou votre projet.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="surface-card rounded-sm p-6">
              <Icon className="h-6 w-6 text-gold" />
              <p className="mt-4 font-display text-xl">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-ink/50">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <p className="eyebrow">Programme</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Les modules, un par un</h2>
          <p className="mt-4 text-muted-foreground">
            Cliquez sur un module pour découvrir ce que vous apprenez en atelier.
          </p>

          <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
            {modules.map((m, i) => {
              const isOpen = open === i;
              return (
                <div key={m.name}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span className="w-8 font-display text-sm text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl">{m.name}</span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-6 pl-12 text-sm text-muted-foreground">{m.detail}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 surface-card flex flex-col gap-4 rounded-sm p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <Timer className="h-5 w-5 text-gold" />
              Sessions intensives, places limitées par promotion.
            </p>
            <Link to="/contact" hash="inscription" className="btn-gold text-sm">
              Demander les dates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

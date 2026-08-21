import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ChefHat, Users, BadgeCheck } from "lucide-react";
import graduation from "@/assets/graduation.jpg";
import pastry from "@/assets/pastry.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "L'Académie & nos diplômés — AMC Kélibia" },
      {
        name: "description",
        content:
          "Découvrez l'Académie Master Class de Kélibia : ateliers pratiques, encadrement par des chefs, remises de diplômes et insertion professionnelle de nos stagiaires.",
      },
      { property: "og:title", content: "L'Académie & nos diplômés — AMC Kélibia" },
      {
        property: "og:description",
        content:
          "Ateliers pratiques, encadrement professionnel et certifications qui valorisent le CV de nos stagiaires.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "100%", label: "Formations pratiques en cuisine réelle" },
  { value: "Agréé", label: "Diplômes agréés par l'État" },
  { value: "1 à 9", label: "Mois selon la formation choisie" },
  { value: "Kélibia", label: "Au cœur du Cap Bon" },
];

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <p className="eyebrow">L'Académie</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
          Former des professionnels, pas seulement des <span className="text-gradient-gold">amateurs</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Académie Master Class est un centre de formation professionnelle situé à Kélibia. Nos
          stagiaires passent la majorité de leur temps en cuisine, aux côtés de chefs en activité,
          sur du matériel professionnel. À la sortie : un savoir-faire immédiatement employable, un
          diplôme ou un certificat qui pèse dans un CV, et la confiance nécessaire pour travailler
          en brigade ou ouvrir son propre commerce.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface-card rounded-sm p-6">
              <p className="font-display text-3xl text-gold">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2">
          <img
            src={graduation}
            alt="Stagiaires de l'Académie Master Class recevant leurs diplômes en cuisine"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-sm border border-border object-cover"
          />
          <div>
            <p className="eyebrow">Réussite des stagiaires</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Des remises de diplômes qui ouvrent des portes</h2>
            <p className="mt-4 text-muted-foreground">
              Chaque promotion termine son parcours par une évaluation pratique devant nos
              formateurs, puis une remise officielle de diplômes et de certificats. Beaucoup de nos
              diplômés rejoignent des restaurants, hôtels et pâtisseries de la région ; d'autres
              lancent leur propre snack, food truck ou pizzeria.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  icon: ChefHat,
                  text: "Ateliers quotidiens en cuisine équipée : découpe, cuissons, dressage, pétrissage, four.",
                },
                {
                  icon: Users,
                  text: "Petits groupes et encadrement individuel par des chefs professionnels.",
                },
                {
                  icon: BadgeCheck,
                  text: "Certificats et diplômes agréés valorisant immédiatement votre candidature.",
                },
                {
                  icon: GraduationCap,
                  text: "Accompagnement à la préparation d'un projet personnel : carte, coûts, organisation.",
                },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-sm text-muted-foreground">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Notre méthode</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Le geste avant la théorie</h2>
          <p className="mt-4 text-muted-foreground">
            Nous enseignons par répétition du geste : chaque module est démontré par le chef, puis
            reproduit par le stagiaire jusqu'à la maîtrise. L'hygiène, l'organisation du poste et la
            gestion du temps de service sont intégrées à chaque séance, exactement comme en
            entreprise.
          </p>
          <Link to="/contact" hash="inscription" className="btn-gold mt-8">
            Rejoindre la prochaine promotion
          </Link>
        </div>
        <img
          src={pastry}
          alt="Chef pâtissier dressant un dessert à l'académie"
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-sm border border-border object-cover"
        />
      </section>
    </div>
  );
}

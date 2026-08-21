import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Music2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Pré-inscription — AMC Kélibia" },
      {
        name: "description",
        content:
          "Contactez l'Académie Master Class à Kélibia : 68 Rue Ali Belhouane, 40 701 734. Formulaire de pré-inscription aux formations cuisine, pâtisserie et pizzaïolo.",
      },
      { property: "og:title", content: "Contact & Pré-inscription — AMC Kélibia" },
      {
        property: "og:description",
        content: "Adresse, téléphone et formulaire de pré-inscription de l'Académie Master Class.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Nom trop court").max(100, "Nom trop long"),
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  telephone: z
    .string()
    .trim()
    .min(6, "Numéro invalide")
    .max(30, "Numéro trop long")
    .regex(/^[0-9+\s().-]+$/, "Numéro invalide"),
  formation: z.enum(["pizzaiolo", "cuisine", "patisserie", "autre"]),
  message: z.string().trim().max(1000, "Message trop long (1000 caractères max)"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      nom: form.get("nom"),
      email: form.get("email"),
      telephone: form.get("telephone"),
      formation: form.get("formation"),
      message: form.get("message") ?? "",
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }

    setErrors({});
    const d = result.data;
    const body = [
      `Nom : ${d.nom}`,
      `E-mail : ${d.email}`,
      `Téléphone : ${d.telephone}`,
      `Formation souhaitée : ${d.formation}`,
      "",
      d.message,
    ].join("\n");
    window.location.href = `mailto:academymasterclass19@gmail.com?subject=${encodeURIComponent(
      "Pré-inscription AMC — " + d.nom,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold";

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
        Parlons de votre <span className="text-gradient-gold">projet culinaire</span>
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Une question sur une formation, les dates de sessions ou les tarifs ? Écrivez-nous ou passez
        directement à l'académie, en plein centre de Kélibia.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          {[
            {
              icon: MapPin,
              title: "Adresse",
              lines: ["68 Rue Ali Belhouane", "Kélibia 8090, Tunisie"],
            },
            {
              icon: Phone,
              title: "Téléphone",
              lines: ["40 701 734", "+216 40 701 734"],
              href: "tel:+21640701734",
            },
            {
              icon: Mail,
              title: "E-mail",
              lines: ["academymasterclass19@gmail.com"],
              href: "mailto:academymasterclass19@gmail.com",
            },
            {
              icon: Clock,
              title: "Horaires",
              lines: ["Lundi – Samedi", "09h00 – 18h00"],
            },
          ].map(({ icon: Icon, title, lines, href }) => (
            <div key={title} className="surface-card flex gap-4 rounded-sm p-5">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-medium">{title}</p>
                {href ? (
                  <a href={href} className="mt-1 block text-sm text-muted-foreground hover:text-gold">
                    {lines.join(" · ")}
                  </a>
                ) : (
                  lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-1">
            <a
              href="https://www.instagram.com/academy_master_class"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold !px-4 !py-2 text-sm"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@academymasterclas"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold !px-4 !py-2 text-sm"
            >
              <Music2 className="h-4 w-4" /> TikTok
            </a>
            <a
              href="https://www.facebook.com/search/top?q=Academy%20master%20Class"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold !px-4 !py-2 text-sm"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>

        <div id="inscription" className="surface-card rounded-sm p-6 sm:p-9">
          <h2 className="text-2xl">Formulaire de pré-inscription</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Remplissez ce formulaire, nous vous rappelons pour finaliser votre inscription.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-7 space-y-5">
            <div>
              <label htmlFor="nom" className="text-xs tracking-widest uppercase text-muted-foreground">
                Nom et prénom
              </label>
              <input id="nom" name="nom" maxLength={100} className={field} />
              {errors.nom && <p className="mt-1 text-xs text-destructive">{errors.nom}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs tracking-widest uppercase text-muted-foreground"
                >
                  E-mail
                </label>
                <input id="email" name="email" type="email" maxLength={255} className={field} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="text-xs tracking-widest uppercase text-muted-foreground"
                >
                  Téléphone
                </label>
                <input id="telephone" name="telephone" maxLength={30} className={field} />
                {errors.telephone && (
                  <p className="mt-1 text-xs text-destructive">{errors.telephone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="formation"
                className="text-xs tracking-widest uppercase text-muted-foreground"
              >
                Formation souhaitée
              </label>
              <select id="formation" name="formation" defaultValue="pizzaiolo" className={field}>
                <option value="pizzaiolo">Pizzaïolo & Fast Food</option>
                <option value="cuisine">Cuisine professionnelle</option>
                <option value="patisserie">Pâtisserie</option>
                <option value="autre">Autre / renseignement</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs tracking-widest uppercase text-muted-foreground"
              >
                Message (optionnel)
              </label>
              <textarea id="message" name="message" rows={4} maxLength={1000} className={field} />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-gold w-full">
              Envoyer ma pré-inscription
            </button>
            {sent && (
              <p className="text-sm text-gold">
                Merci ! Votre messagerie s'ouvre pour finaliser l'envoi. Vous pouvez aussi nous
                appeler au 40 701 734.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-sm border border-border">
        <iframe
          title="Localisation de l'Académie Master Class à Kélibia"
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.086%2C36.836%2C11.106%2C36.851&layer=mapnik&marker=36.8435%2C11.0961"
          className="h-[380px] w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

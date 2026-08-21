import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Académie Master Class</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Centre de formation professionnelle en cuisine, pâtisserie, pizzaïolo et fast food à
            Kélibia.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/academy_master_class"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold transition-colors hover:border-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@academymasterclas"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold transition-colors hover:border-gold"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=Academy%20master%20Class"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold transition-colors hover:border-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Formations</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/formation-pizzaiolo" className="hover:text-gold">
                Formation Pizzaïolo & Fast Food
              </Link>
            </li>
            <li>
              <Link to="/formation-cuisine" className="hover:text-gold">
                Cuisine & Pâtisserie diplômante
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:text-gold">
                L'Académie & nos diplômés
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Pré-inscription
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              68 Rue Ali Belhouane, Kélibia 8090, Tunisie
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+21640701734" className="hover:text-gold">
                40 701 734 / +216 40 701 734
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:academymasterclass19@gmail.com" className="hover:text-gold">
                academymasterclass19@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Académie Master Class — Kélibia, Tunisie.
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

const TEAM_MEMBERS: Record<string, { role: string; image: string }> = {
  default: { role: "Računovođa, ENS d.o.o.", image: "/images/ens-logo.png" },
  "Amila Hodžić": { role: "Ovlašteni računovođa", image: "/images/ens-logo.png" },
  "ENS Tim": { role: "Stručni tim ENS d.o.o.", image: "/images/ens-logo.png" },
};

export function AuthorBox({ author }: { author: string }) {
  const meta = TEAM_MEMBERS[author] ?? TEAM_MEMBERS.default;

  return (
    <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-5">
      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-primary/10 flex items-center justify-center">
        <span className="text-2xl font-bold text-primary">
          {author.charAt(0)}
        </span>
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">O autoru</p>
        <h3 className="font-bold text-gray-900 text-lg">{author}</h3>
        <p className="text-sm text-gray-600 mb-3">{meta.role} — Sarajevo, BiH</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          ENS d.o.o. je računovodstvena agencija sa sjedištem u Sarajevu. Pružamo usluge
          knjigovodstva, obračuna plata, PDV prijava i savjetovanja za firme u FBiH i RS.{" "}
          <Link href="/o-nama" className="text-primary hover:underline font-medium">
            Saznajte više o nama →
          </Link>
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  title: string;
  description: string;
  tag?: string;
  accent?: "ember" | "gold";
  image?: string;
  icon?: string;
};

export default function HeroCard({
  href,
  title,
  description,
  tag,
  accent = "ember",
  image,
  icon,
}: Props) {
  const hoverClass = accent === "gold" ? "card-hover-radiant" : "card-hover-dire";
  const textClass = accent === "gold" ? "group-hover:text-secondary" : "group-hover:text-primary";
  const tagText = accent === "gold" ? "text-secondary" : "text-primary-container";
  const tagBg = accent === "gold" ? "bg-secondary/10 border-secondary/20" : "bg-primary/10 border-primary/20";

  return (
    <Link
      href={href}
      className={`glass-card rounded-xl p-stack-md group transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-pointer ${hoverClass}`}
    >
      {image && (
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-surface-container-high">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        {icon && (
          <span className={`material-symbols-outlined text-3xl group-hover:scale-110 transition-transform ${tagText}`}>
            {icon}
          </span>
        )}
        {tag && (
          <span className={`font-label-sm text-label-sm uppercase px-2 py-0.5 rounded border ${tagText} ${tagBg}`}>
            {tag}
          </span>
        )}
      </div>
      <h3 className={`font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-bold ${textClass} transition-colors`}>
        {title}
      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow line-clamp-3">
        {description}
      </p>
      <div className={`flex items-center ${tagText} font-label-bold text-label-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform`}>
        Ver mas <ArrowRight size={14} className="ml-1" />
      </div>
    </Link>
  );
}

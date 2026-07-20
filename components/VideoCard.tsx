import Image from "next/image";
import { Play } from "lucide-react";

type Props = {
  title: string;
  videoId: string;
  thumbnailUrl?: string;
  channel?: string;
};

export default function VideoCard({ title, videoId, thumbnailUrl, channel }: Props) {
  const thumb = thumbnailUrl || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <article className="glass-card rounded-xl overflow-hidden group video-card-hover cursor-pointer transition-all duration-300 hover:border-primary/50 relative">
      <div className="relative aspect-video overflow-hidden bg-surface-container-highest">
        <Image
          src={thumb}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-60"
        />
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label={`Ver ${title}`}
        >
          <span className="bg-primary-container rounded-full p-4 flex items-center justify-center">
            <Play size={24} className="text-white fill-white" />
          </span>
          <span className="absolute bottom-4 font-label-bold text-label-bold text-white uppercase tracking-wider">
            Reproducir
          </span>
        </a>
      </div>
      <div className="p-stack-md">
        <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm line-clamp-2">
          {title}
        </h3>
        {channel && (
          <div className="flex items-center text-on-surface-variant font-body-sm text-body-sm">
            <span>{channel}</span>
          </div>
        )}
      </div>
    </article>
  );
}

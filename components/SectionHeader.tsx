import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-stack-lg">
      {eyebrow && (
        <span className="font-label-bold text-label-bold text-primary uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-1 font-display-md text-display-md text-on-surface font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-2 font-body-md text-body-md text-on-surface-variant max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  responsive?: boolean;
  className?: string;
};

export default function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLModElement>(null);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // noop - ad blocker running
    }
  }, [client]);

  if (!client) {
    return (
      <div
        className={`my-6 flex items-center justify-center rounded-lg border border-dashed border-ember-700/40 bg-ink-900/40 p-6 text-center text-xs text-gray-500 ${className}`}
        aria-hidden="true"
      >
        Espacio publicitario reservado (AdSense). Se activara cuando aproben la cuenta.
      </div>
    );
  }

  return (
    <ins
      ref={ref}
      className={`adsbygoogle block my-6 ${className}`}
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}

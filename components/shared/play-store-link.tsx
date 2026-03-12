"use client";

import React from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.voiledrift.mobile";

function handlePlayStoreClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (typeof window.gtag !== "undefined") {
    e.preventDefault();
    let navigated = false;
    const navigate = () => {
      if (!navigated) {
        navigated = true;
        window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
      }
    };
    window.gtag("event", "conversion", {
      send_to: "AW-11267156254/x_qCCJ_UzvgbEJ7SzPwp",
      transaction_id: "",
      event_callback: navigate,
    });
    // Fallback in case callback doesn't fire
    setTimeout(navigate, 1000);
  }
}

export function PlayStoreLink({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handlePlayStoreClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

"use client";

import { Analytics } from "@vercel/analytics/next";

export function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (event.url.includes("/tools")) return null;
        return event;
      }}
    />
  );
}

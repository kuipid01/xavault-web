"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

export function ApiStatus() {
  const isConfigured = Boolean(process.env.NEXT_PUBLIC_API_URL);
  const { isSuccess } = useQuery({
    queryKey: ["api-health"],
    queryFn: () => api.get("/health"),
    enabled: isConfigured,
    staleTime: 60_000,
  });

  return (
    <span className="inline-flex items-center gap-2">
      <i className={`size-1.5 rounded-full ${isSuccess ? "bg-mint" : "bg-white/25"}`} />
      {isSuccess ? "Xavault API connected" : "API-ready frontend"}
    </span>
  );
}

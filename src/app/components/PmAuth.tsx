"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const PASSWORD = "piramicasa2026";

export default function PmAuth({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [checked, setChecked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("pm-auth="));
    if (cookie?.split("=")[1] === PASSWORD) {
      setAuthenticated(true);
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (checked && !authenticated && pathname !== "/acceso") {
      router.replace("/acceso");
    }
  }, [checked, authenticated, pathname, router]);

  if (!checked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3d4a30, #5a6b4a)",
        }}
      >
        <div style={{ fontSize: "2rem", color: "#f7f4f0" }}>△</div>
      </div>
    );
  }

  if (!authenticated && pathname !== "/acceso") {
    return null;
  }

  return <>{children}</>;
}

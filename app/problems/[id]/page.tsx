import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/ui/excalidrawWrapper")).default,
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SiteHeader />
        <div
          style={{
            flex: 1,
            position: "relative",
            zIndex: "100",
          }}
        >
          <ExcalidrawWrapper />
        </div>
        <SiteFooter />
      </div>
    </>
  );
}

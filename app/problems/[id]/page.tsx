import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/ui/excalidrawWrapper")).default,
  {
    ssr: false,
  }
);
type Props = {
    params: {
        id: string;
    }
};

export default function Page({ params }: Props) {
    return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SiteHeader />
        <div className="z-50">
          <ExcalidrawWrapper  id={params.id} />
        </div>
        <SiteFooter />
      </div>
    </>
  );
}

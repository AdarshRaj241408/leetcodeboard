import { SiteFooter } from "@/components/ui/site-footer";
import { SiteHeader } from "@/components/ui/site-header";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <SiteHeader />

      <div className="relative flex flex-col justify-center overflow-hidden z-50">
        <iframe
          src={`https://excalidraw.com/#${id}`}
          style={{ width: "100%", height: "92.5vh", border: "none" }}
          title="Excalidraw"
        />
      </div>
      <SiteFooter />
    </>
  );
}

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
        problemID: string;
    }
};

export default function Page({ params }: Props) {
    return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SiteHeader />
        {/*<div*/}
        {/*  style={{*/}
        {/*    flex: 1,*/}
        {/*    position: "relative",*/}
        {/*    zIndex: "100",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <ExcalidrawWrapper  problem_ID={params.problemID} />*/}
        {/*</div>*/}

          <div>
              Hello {params.problemID}!
          </div>
        <SiteFooter />
      </div>
    </>
  );
}

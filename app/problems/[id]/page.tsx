import { SiteFooter } from "@/components/ui/site-footer";
import { SiteHeader } from "@/components/ui/site-header";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <SiteHeader />

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/45 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="flex space-x-4">Problem ID: {id}</div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}

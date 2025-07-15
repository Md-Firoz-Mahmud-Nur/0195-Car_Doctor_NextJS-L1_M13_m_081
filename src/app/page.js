export const dynamic = "force-dynamic";
import HomePage from "@/components/homePage/HomePage";

export default function Home() {
  return (
    // <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
    //   <HomePage></HomePage>
    // </div>
    <main className="bg-base-100">
      <HomePage />
    </main>
  );
}

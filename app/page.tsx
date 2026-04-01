import Link from "next/link";

export const dynamic = "error";
export const revalidate = false;

export default function Home() {
  return (
    <>
      <section className="m-8">
        <h1 className="mx-auto my-8 w-fit text-center text-2xl font-semibold">
          サークル総合プラットフォーム
        </h1>
        <p className="text-accent">
          このサイトは、高校生、新入生の方向けのサークルに関する情報サイトであり、現サークル生の方のプラットフォームでもあります。現サークル生の交流を通じて、新鮮な情報を手に入れることができます。
        </p>
        <Link
          className="btn mx-auto my-6 block h-fit w-fit py-2 btn-primary"
          href="/circles"
        >
          さっそくサークル紹介を見る
        </Link>
      </section>
      <section className="bg-info-content p-8">
        サークルのすばらしさ、重要性などここに書く
      </section>
    </>
  );
}

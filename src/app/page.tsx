import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between px-16 py-8 ">
        <div className="logo font-bold">
          <h2>DOTO.</h2>
        </div>
        <div>
          <Link href="/home">
            <button className="border-2 border-[#222] bg-white text-[#222] py-1 px-4 rounded-2xl hover:bg-[#222] hover:text-white transition duration-500 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </main>
  );
}

import Navbar from "@/components/Navbar"

import Shop from "@/components/Shop"

export default function Home(){
  return (
    <main>
      <Navbar />
      <section className="p-4 grid place-items-center gap-8">
        <h1 className="text-3xl">This is second project</h1>
        <Shop />
      </section>
    </main>
  )
}
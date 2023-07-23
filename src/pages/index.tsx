import React from "react"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home({ connected }) {
  return (
    <div>
      <Head>
        <title>Myceliums</title>

        <meta name="description" content="The library of green projects" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen justify-center bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 py-20">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="logos"
            src="/logos/Myceliums.svg"
            height={200}
            width={200}
          />
          <h1 className="mb-10 font-serif text-2xl">
            Salutations mes petit funghis !
          </h1>
          <h1 className="mb-10 font-serif text-2xl">Bienvenue sur Myceliums</h1>
          <hr></hr>
          <div className="w-1/2 space-y-2 p-4 text-justify font-serif text-xl">
            <p>
              Myceliums 🍄 est une association Loi 1901, créée en 2023. Son
              objectif est de référencer, de promouvoir, et de catalyser la
              coopération autour de projets technologiques à visée
              environnementale.
            </p>
            <p>
              Vous trouverez bientôt ici les projets que nous réalisons, mais
              aussi un outils qui vous permettra de publier vos propres projets,
              de participer à des projets en cours, ou de récupérer des projets
              en sommeil.
            </p>
            <p>
              Nous mettrons aussi à disposition, les outils que nous avons
              développé afin que vous puissiez vous en servir.
            </p>
            <p>
              Pour <strong>devenir membre</strong> de l'association c'est par{" "}
              <Link href="/membership" passHref>
                <a className="text-blue-500 hover:underline">ici</a> 👈
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

import React from "react"

import Head from "next/head"
import Link from "next/link"

import Logo from "@components/Logo"

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
          <Logo />
          <p className="mb-2 font-serif text-2xl">
            Salutations mes petits fungis !
          </p>
          <h1 className="mb-10 font-serif text-2xl">
            Bienvenue sur <strong>Myceliums</strong>
          </h1>
          <hr></hr>
          <div className="w-full space-y-4 p-4 text-justify font-serif text-xl lg:w-1/2">
            <p>
              Myceliums 🍄 est une association Loi 1901, créée en 2023. Notre
              objectif principal est de recenser, promouvoir et faciliter la
              coopération autour de projets technologiques axés sur
              l'environnement.
            </p>
            <p>
              Bientôt, vous trouverez ici la liste des projets sur lesquels nous
              travaillons actuellement. De plus, nous développons un outil qui
              vous permettra de publier vos propres projets, de contribuer aux
              initiatives en cours ou de relancer des projets en sommeil.
            </p>
            <p>
              Nous nous engageons également à mettre à disposition nos outils et
              ressources pour une utilisation publique.
            </p>
            <div className="flex flex-col items-center py-8 lg:flex-row lg:items-start">
              Pour <strong className="mx-1">devenir membre</strong> de
              Myceliums, cliquez{" "}
              <Link
                href="https://www.helloasso.com/associations/myceliums/adhesions/myceliums"
                passHref
              >
                <p className="mx-1 cursor-pointer text-blue-500 hover:underline">
                  ici
                </p>
              </Link>
              <p className="ml-1">👈</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

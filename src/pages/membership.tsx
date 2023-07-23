import React, { useState } from "react"

import Head from "next/head"

export default function Home() {
  const [formData, setFormData] = useState({})

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const sendInfos = async (e) => {
    e.preventDefault()
    try {
      await fetch("http://localhost:3000/api/mail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          to: formData["email"],
          subject: "Merci de ton inscription !",
          text: "Hello les mecs",
          html: "Merci bien !",
        }),
      })
    } catch (e) {
      console.error("There was an error")
    }
  }

  return (
    <div>
      <Head>
        <title>Myceliums</title>

        <meta name="description" content="Devenir Membre" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 py-20">
        <div className="flex w-1/2 flex-col items-center justify-center space-y-2 p-4 text-justify font-serif">
          <h1 className="whitespace-nowrap py-4 text-2xl">Devenir membre 🍄</h1>
          <p className="mt-16 text-justify">
            Devenir membre de Myceliums, c'est s'engager dans une passionnante
            aventure intellectuelle ! Rejoindre notre communauté te permettra de
            découvrir et de soutenir des projets passionnants, tout en
            contribuant au super projet de sauver la planète. Pour seulement{" "}
            <strong>50€</strong> par an, tu recevras ta carte de membre ainsi
            que des avantages exclusifs sur notre plateforme une fois celle-ci
            opérationnelle ! De plus, ton avis est essentiel à l'évolution de
            notre association et nous t'invitons chaleureusement à participer
            aux assemblées générales !
          </p>
          <p>
            Nous sommes convaincus que chaque membre de Myceliums joue un rôle
            crucial dans la concrétisation de notre vision commune. En tant
            qu'association, notre stratégie repose sur une approche
            participative, où chaque voix compte. Nous encourageons la diversité
            d'idées et la collaboration pour trouver des solutions innovantes
            aux défis environnementaux auxquels nous faisons face.
          </p>
          <p>
            En nous rejoignant, tu feras partie d'une communauté dynamique
            d'individus animés par la même volonté de créer un impact positif
            sur notre planète. Ensemble, nous créerons un écosystème où les
            idées novatrices fleurissent, où les projets prennent forme, et où
            chacun peut contribuer à façonner un avenir plus durable.{" "}
          </p>
          <p>
            Nous sommes impatients de t'accueillir parmi nous ! Ensemble, nous
            construirons un avenir meilleur pour notre planète et les
            générations futures. Rejoins Myceliums dès aujourd'hui et fais
            partie du changement !
          </p>
        </div>
        <div className="my-16 w-1/6">
          <form
            onSubmit={() => sendInfos}
            className="mt-2 w-full space-y-2 rounded border p-4"
          >
            <label className="col-span-1 flex w-full items-center font-bold">
              Prénom
            </label>
            <input
              name="prenom"
              onChange={(e) => handleInputChange(e)}
              autoComplete="off"
              placeholder="Renseigne ton prénom"
              className="w-full rounded border shadow-inner"
              type="text"
            />

            <label className="col-span-1 flex w-full items-center font-bold">
              Nom
            </label>
            <input
              name="nom"
              onChange={(e) => handleInputChange(e)}
              autoComplete="off"
              placeholder="Renseigne ton nom"
              className="w-full rounded border shadow-inner"
              type="text"
            />
            <label className="col-span-1 flex w-full items-center font-bold">
              Email
            </label>
            <input
              name="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Renseigne ton addresse mail"
              className="w-full rounded border shadow-inner"
              type="email"
            />
            <button
              type="submit"
              className="col-span-2 w-full rounded bg-black p-2 text-white hover:bg-orange-300"
            >
              Devenir Membre
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

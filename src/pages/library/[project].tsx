import Navbar from "@components/Navbar"
import { TEST_HTML_CONTENT } from "../../types/mockups/constants"
import Head from "next/head"
import { createContext, useContext } from "react"
import Image from "next/image"
import {
  LikeButton,
  CommentButton,
  ShareButton,
  ReadButton,
  WriteButton,
  SettingsButton,
} from "@components/buttons"
import { mockUpProject } from "../../types/mockups"

const ProjectContext = createContext(mockUpProject)

export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>ProjectName</title>
      </Head>
      <main>
        <Navbar />
        <ProjectContext.Provider value={mockUpProject}>
          <div className="flex w-full justify-center">
            <Project />
          </div>
        </ProjectContext.Provider>
      </main>
    </>
  )
}

const Project = () => {
  return (
    <div className="w-5/6">
      <ProjectHead />
      <ProjectPresentation />
    </div>
  )
}

const ProjectHead = () => {
  const project = useContext(ProjectContext)
  return (
    <div className="relative m-4 rounded-xl border shadow">
      <Image
        className="-z-10 rounded-xl"
        alt={"Yes"}
        src={project.coverPicture}
        layout="fill"
        objectFit="cover"
      />
      <div className="grid w-full grid-cols-3 p-4">
        <div className="flex flex-col">
          <ProfilePicture />
          <div className="mt-4 text-white">
            <div className="text-5xl font-bold">{project.name}</div>
            <div className="text-2xl">{project.author.name}</div>
            <div>{project.createdAt.toDateString()}</div>
          </div>
        </div>
        <div className="col-span-2 flex items-start justify-end">
          <SettingsButton />
        </div>
      </div>
      <ProjectMetaData />
    </div>
  )
}

const ProjectMetaData = () => {
  const project = useContext(ProjectContext)
  return (
    <div className="flex flex-col justify-between rounded-b-lg border-t border-dashed backdrop-blur-lg">
      <div className="p-4 text-justify text-white">{project.description}</div>
      <div className="flex flex-row px-4 text-white">
        {project.tags.map((t, i) => {
          return (
            <p key={i} className="mx-1">
              🍄{t}
            </p>
          )
        })}
      </div>
      <div className="flex flex-row justify-between p-4 text-white">
        <div className="flex flex-row space-x-4 text-white">
          <LikeButton active={false} />
          <CommentButton />
          <ShareButton />
        </div>
        <div className="flex flex-row space-x-4 text-white">
          <WriteButton />
          <ReadButton />
        </div>
      </div>
    </div>
  )
}

const ProfilePicture = () => {
  const project = useContext(ProjectContext)
  return (
    <div className="flex h-36 w-36 items-center justify-center rounded-full border bg-white shadow-lg">
      <div className="relative h-32 w-32">
        <Image
          className="rounded-full"
          alt={"Yes"}
          src={project.author.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

const ProjectPresentation = () => {
  return (
    <div
      className="p-4"
      dangerouslySetInnerHTML={{ __html: TEST_HTML_CONTENT }}
    />
  )
}

import { createContext, useContext, useEffect, useMemo, useState } from "react"

import Head from "next/head"
import Image from "next/image"
import { BlockPicker } from "react-color"

import {
  LikeButton,
  CommentButton,
  ShareButton,
  ReadButton,
  WriteButton,
  SettingsButton,
} from "@components/buttons"
import Navbar from "@components/Navbar"

import { mockUpProject } from "../../types/mockups"
import { TEST_HTML_CONTENT } from "../../types/mockups/constants"

const MAX_LENGTH_TEXTAREA = 1200

const ProjectContext = createContext(mockUpProject)
const ThemeContext = createContext({
  color: mockUpProject.color,
  setColor: mockUpProject.setColor,
})

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
      <ProjectHead isEditable={true} />
      <ProjectBody />
    </div>
  )
}

const ProjectHead = ({ isEditable }: { isEditable: boolean }) => {
  const project = useContext(ProjectContext)

  const [color, setColor] = useState(project.color)
  const initThemeValue = useMemo(
    () => ({ color, setColor }),
    [color, setColor] // Add setColor here
  )

  return (
    <div className="relative m-4 rounded-xl border shadow">
      <ThemeContext.Provider value={initThemeValue}>
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
            <ProjectNameSection isEditable />
            <AuthorInfoSection />
          </div>
          <div className="col-span-2 flex items-start justify-end">
            {isEditable && <SettingsPanel />}
          </div>
        </div>
        <ProjectMetaData isEditable={isEditable} />
      </ThemeContext.Provider>
    </div>
  )
}

const ProjectNameSection = ({ isEditable }) => {
  const project = useContext(ProjectContext)
  const [name, setName] = useState(project.name)
  const { color } = useContext(ThemeContext)

  return (
    <div className="mt-4 text-white">
      {isEditable ? (
        <input
          onChange={(e) => setName(e.target.value)}
          className={`m-0 rounded border border-2 border-dashed border-white bg-transparent p-0 text-5xl font-bold`}
          style={{ color: color }}
          value={name}
        />
      ) : (
        <div style={{ color: color }} className="text-5xl font-bold">
          {project.name}
        </div>
      )}
    </div>
  )
}

const AuthorInfoSection = () => {
  const project = useContext(ProjectContext)
  const { color } = useContext(ThemeContext)

  return (
    <div className="mt-4 text-white">
      <div style={{ color: color }} className={`mt-4 text-2xl ${color}`}>
        {project.author.name}
      </div>
      <div style={{ color: color }}>{project.createdAt.toDateString()}</div>
    </div>
  )
}

const ProjectMetaData = ({ isEditable }: { isEditable: boolean }) => {
  const { description, tags } = useContext(ProjectContext)
  const [currDescription, setDescription] = useState<string>(description)
  const { color } = useContext(ThemeContext)

  return (
    <div className="relative flex flex-col justify-between rounded-b-lg border-t border-dashed backdrop-blur-lg">
      {isEditable ? (
        <textarea
          style={{ color: color, resize: "none" }}
          value={currDescription}
          onChange={(e) => setDescription(e.target.value)}
          className="m-4 h-48 overflow-hidden rounded border border-dashed border-white bg-transparent p-2 text-justify text-white"
          maxLength={MAX_LENGTH_TEXTAREA}
        />
      ) : (
        <div style={{ color: color }} className="p-4 text-justify text-white">
          {description}
        </div>
      )}
      <div style={{ color: color }} className="flex flex-row px-4 text-white">
        {tags.map((t, i) => {
          return (
            <p key={i} className="mx-1">
              🍄 {t}
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
  const { color } = useContext(ThemeContext)

  return (
    <div
      style={{ backgroundColor: color, borderColor: color }}
      className="flex h-36 w-36 items-center justify-center rounded-full border bg-white shadow-lg"
    >
      <div className="relative h-32 w-32 rounded-full bg-white">
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

const ProjectBody = () => {
  return (
    <div
      className="p-4"
      dangerouslySetInnerHTML={{ __html: TEST_HTML_CONTENT }}
    />
  )
}

const SettingsPanel = () => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDisplayed && !event.target.closest(".settings-panel")) {
        setIsDisplayed(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isDisplayed])

  return (
    <>
      <SettingsButton
        isActive={isDisplayed}
        setIsActive={() => setIsDisplayed(!isDisplayed)}
      />
      <div
        className={`absolute ${
          isDisplayed ? "w-12 opacity-100" : "w-2 opacity-0"
        } animation-full settings-panel top-0 right-0 z-10 h-full rounded-lg bg-white shadow-inner duration-300`}
      >
        <div className="mt-10 p-2">
          <ColorPickerButton />
        </div>
      </div>
    </>
  )
}

const ColorPickerButton = () => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false)
  const { color, setColor } = useContext(ThemeContext)

  return (
    <div
      onClick={() => setIsDisplayed(!isDisplayed)}
      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full shadow-inner hover:bg-gray-200`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
      <div className="absolute top-10">
        {isDisplayed ? (
          <BlockPicker color={color} onChange={(e) => setColor(e.hex)} />
        ) : null}
      </div>
    </div>
  )
}

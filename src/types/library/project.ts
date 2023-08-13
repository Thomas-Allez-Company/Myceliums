import { Like, User } from "@prisma/client"

export interface ProjectProps {
  id: string
  name: string
  description: string
  author: User
  createdAt: Date
  likes: Like[]
  comments: Comment[]
  tags: string[]
  coverPicture: string
}

export interface ProjectMetaData {
  name: string
  createdAt: Date
  // author : id
  // likes: string[]
  // comment: string[]
}

export type ProjectModule = {
  id: string
} & { contentType: ProjectType.text; content: string }

export enum ProjectType {
  text = "text",
  image = "image",
}

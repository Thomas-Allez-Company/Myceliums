export interface ProjectProps {
  metaData: ProjectMetaData
  modules: ProjectModule[]
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

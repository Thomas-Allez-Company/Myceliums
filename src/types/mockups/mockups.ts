import { User } from "@prisma/client"
import { ProjectProps } from "../library"

export const mockUpUser: User = {
    id: "op-§sihksqk",
    name: "Thomas Allez",
    image:
        "https://zwqlrslkmlxjfqdugswh.supabase.co/storage/v1/object/public/storage/myceliums-logo.png?t=2023-08-13T06%3A25%3A32.366Z",
    email: "allezthomas@gmail.com",
    emailVerified: new Date(Date.now()),
}
export const mockUpProject: ProjectProps = {
    id: "123-43-67565",
    name: "Lorem Ipsum",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam mi ut ante dictum, eu interdum mi accumsan. Nullam a ullamcorper nisl. Sed euismod sapien id leo convallis fermentum. Curabitur lacinia justo vel sapien sollicitudin, nec blandit mauris suscipit. In auctor ex ut quam commodo, a dignissim enim auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius risus nec mi fermentum hendrerit. Integer ut ex nec tellus fringilla malesuada. Fusce condimentum tortor eu ex pharetra, et consectetur turpis tempor. Vivamus vel nisl nec nunc congue dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut eu est vel libero elementum tincidunt. Maecenas aliquet augue at aliquet volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tristique bibendum velit, at laoreet justo varius at.",
    author: mockUpUser,
    createdAt: new Date(Date.now()),
    likes: [],
    comments: [],
    tags: ["lorem", "ipsum", "rocknroll"],
    coverPicture: "https://zwqlrslkmlxjfqdugswh.supabase.co/storage/v1/object/public/storage/iceberg-project.webp",
}
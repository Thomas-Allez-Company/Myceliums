import React, { useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const toolbarOptions = {
  toolbar: {
    syntax: true,
    toolbar: [["code-block"]],
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
      [{ color: [] }, { background: [] }],
    ],
  },
}

export function Editor({ debug = false }: { debug?: boolean }) {
  const [value, setValue] = useState("")

  const handleEditorChange = (content) => {
    setValue(content)
  }

  return (
    <>
      <ReactQuill
        value={value}
        modules={toolbarOptions}
        placeholder="Fais nous rêvez ..."
        onChange={handleEditorChange}
        id="txtDescription"
      />
      {debug ? (
        <>
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#000000",
              border: "1px solid #ddd",
              color: "#FFFFFF",
            }}
          >
            {value}
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
            }}
            dangerouslySetInnerHTML={{ __html: value }}
          />{" "}
        </>
      ) : null}
    </>
  )
}

import React, { useRef } from "react";
import SunEditorCore from "suneditor/src/lib/core";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export const Editor = ({
  value,
  handleChange,
}: {
  value: string;
  /* eslint-disable */
  handleChange: (value: string) => void;
}) => {
  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  return (
    <div>
      <SunEditor
        setContents={value}
        setOptions={{
          minHeight: "70vh",
          maxHeight: "70vh",
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            "/",
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "audio"], // You must add the 'katex' library at options to use the 'math' plugin.
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
          ],
        }}
        onChange={handleChange}
        setAllPlugins={true}
        getSunEditorInstance={getSunEditorInstance}
      />
    </div>
  );
};

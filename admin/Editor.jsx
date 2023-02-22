import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editorTools";

const EditorComponent = () => {
	const ReactEditorJS = createReactEditorJS({});
	return <div className="w-full h-10/11"><ReactEditorJS tools={EDITOR_JS_TOOLS} /></div>;
};
export default EditorComponent;
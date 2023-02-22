import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editorTools";

const EditorComponent = ({ editorCore  }) => {
	const ReactEditorJS = createReactEditorJS({});
	return (
		<div className="w-full h-full border border-gray-800 rounded-md shadow-md text-left">
			<ReactEditorJS
				tools={EDITOR_JS_TOOLS}
				onInitialize={(instance) => (editorCore.current = instance)}
			/>
		</div>
	);
};
export default EditorComponent;
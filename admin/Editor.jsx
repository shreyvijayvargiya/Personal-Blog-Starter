import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "utils/editorTools";

const EditorComponent = ({ editorCore, data, readOnly  }) => {
	const ReactEditorJS = createReactEditorJS({});
	return (
		<div
			className={`w-full h-full ${
				readOnly ? "border-none shadow-none" : "border border-gray-400"
			} rounded-md shadow-md text-left`}
		>
			<ReactEditorJS
				tools={EDITOR_JS_TOOLS}
				data={data}
				readOnly={readOnly}
				onInitialize={(instance) => (editorCore.current = instance)}
			/>
		</div>
	);
};
export default EditorComponent;
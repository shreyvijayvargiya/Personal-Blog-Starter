import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import ImageTool from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import app from "utils/firebase";

export const uploadFile = async (file) => {
	let storageRef = app.storage().ref("Blogs/" + "/images/" + file.name);
	var metadata = {
		contentType: file.type,
	};
	const imagePutUpdate = await storageRef.put(file, metadata);
	if (imagePutUpdate) {
		return app
			.storage()
			.ref("Blogs/"+ "/images/" + file.name)
			.getDownloadURL()
			.then((url) => {
				return {
					success: 1,
					file: {
						url: url,
					},
				};
			});
	}
};
export const EDITOR_JS_TOOLS = {
	embed: Embed,
	table: Table,
	list: List,
	warning: Warning,
	code: Code,
	linkTool: LinkTool,
	image: {
		class: ImageTool,
		inlineToolbar: ["link", "bold", "hyperlink"],
		shortcut: "CMD + I",
		config: {
			embed: {
				display: true,
			},
			
			uploader: {
				uploadByFile: (file) => uploadFile(file),
			},
		},
	},
	raw: Raw,
	header: Header,
	quote: Quote,
	marker: Marker,
	checklist: CheckList,
	delimiter: Delimiter,
	inlineCode: InlineCode,
	simpleImage: SimpleImage,
};

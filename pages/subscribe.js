import React from "react";
import { SubscribeComponent } from "modules";
import { Home } from "components";
import Head from "next/head";

const SubscribePage = () => {
	return (
		<div className="w-full mx-auto py-20">
			<Head>
				<title>Subscribe to Jogn Doe newsletter</title>
			</Head>
			<div className="md:w-2/5 mx-auto sm:w-full xxs:w-full xs:w-full py-20 px-4">
				<p className="text-center text-xl text-gray-900 dark:text-gray-400 m-3">
					Read articles from John Doe directly inside your inbox. Subscribe to
					the newsletter, and don't miss out.
				</p>
				<SubscribeComponent />
			</div>
			<div className="border-t border-gray-300 dark:border-gray-800 w-full" />
			<Home />
		</div>
	);
};
export default SubscribePage;

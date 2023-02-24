import React from "react";
import { SubscribeComponent } from "modules";
import Head from "next/head";
const SubscribePage = () => {
	return (
		<div className="md:w-1/5 sm:w-full xxw:w-full xs:w-full mx-auto md:p-20 sm:p-10 xxs:p-10 xs:p-10">
			<Head>
				<title>Subscribe to Jogn Doe newsletter</title>
			</Head>
			<SubscribeComponent />
		</div>
	);
};
export default SubscribePage;

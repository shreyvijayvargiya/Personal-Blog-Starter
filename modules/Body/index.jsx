import React from "react";
import { Footer, Navbar } from "modules";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { EmptyIcon } from "modules/Icons";
import router from "next/router";

const Body = ({ children }) => {
	const { user: data } = useSelector((state) => state);

	const isDatabaseConnected = process.env.REACT_APP_FIREBASE_KEY ? true : false;

	return (
		<div className={`${data.theme} outline-none h-auto min-h-screen`}>
			<div
				className={`${data.theme} text-center bg-white dark:bg-gray-900 dark:text-gray-100 outline-none h-full min-h-screen`}
			>
				<Navbar />
				{isDatabaseConnected ? (
					<div className="w-full text-center py-10 ">{children}</div>
				) : (
					<div className="text-center w-full h-screen my-4 flex justify-center items-center">
						<div className="border border-gray-300 rounded-md dark:border-gray-800 shadow-md hover:shadow-lg py-10 px-2">
							<EmptyIcon />
							<p className="text-4xl">Database is not connected</p>
							<div className="w-full sm:w-full xxs:w-full xs:w-full mx-auto text-center px-6 py-2">
								<div className="px-2 my-2 text-center w-full">
									<p>
										Add Firebase configuration in{" "}
										<span className="bg-gray-900 dark:bg-gray-800 text-white px-2 py-1 rounded-md">
											next.congif.js
										</span>{" "}
									</p>
									<p>
										Open{" "}
										<span
											onClick={() => router.push("/admin/write")}
											className="underline text-indigo-600 cursor-pointer hover:text-indigo-700"
										>
											Admin Write
										</span>{" "}
										to write blogs
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
				<Footer />
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					theme="dark"
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
					style={{ zIndex: 100 }}
				/>
			</div>
		</div>
	);
};
export default Body;

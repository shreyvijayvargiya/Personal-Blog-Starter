import React from "react";
import { Footer, Navbar } from "modules";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Body = ({ children }) => {
	const { user: data } = useSelector((state) => state);

	

	return (
		<div className={`${data.theme} outline-none h-auto min-h-screen`}>
			<div
				className={`${data.theme} text-center bg-white dark:bg-gray-900 dark:text-gray-100 outline-none h-full min-h-screen`}
			>
				<Navbar />
				<div className="w-full text-center py-10 ">{children}</div>
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

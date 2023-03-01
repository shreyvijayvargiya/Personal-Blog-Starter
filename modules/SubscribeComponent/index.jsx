import React, { useState } from "react";
import { addSubscriber } from "utils/api/subscribeApi";

const SubscribeComponent = ({ flex }) => {
	const [state, setState] = useState({
		userEmail: "",
		error: false,
		loader: false,
	});
	function emailIsValid(email) {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email
		);
	}

	const handleEmailSubmit = async (e) => {
		e.preventDefault();
		if (state.userEmail && emailIsValid(state.userEmail)) {
			setState({ userEmail: state.userEmail, error: false, loader: true });
			await addSubscriber(state.userEmail);
			setState({ userEmail: "", error: false, loader: false });
		} else if (!state.userEmail) {
			setState({
				userEmail: state.userEmail,
				error: "Email required",
				loader: false,
			});
		} else if (!emailIsValid(state.userEmail)) {
			setState({
				userEmail: state.userEmail,
				error: "Invalid email",
				loader: false,
			});
		}
	};

	return (
		<div
			className={`${
				flex === true
					? "grid grid-cols-2 items-center gap-1"
					: "flex flex-col justify-center"
			} border border-gray-100 hover:shadow-md dark:border-gray-800 rounded-md p-4` }
		>
			<p className="text-left text-sm m-2">Subscribe to our newsletter, we will reach directly to you INBOX</p>
			<input
				className="p-2 focus:none outline-none border hover:bg-gray-50 cursor-pointer border-gray-900 rounded-md m-2 dark:bg-gray-800 dark:border-gray-900"
				placeholder="Enter email"
        value={state.userEmail}
				onChange={(e) => {
					const val = e.target.value;
					setState({ userEmail: val, error: false, loader: false });
				}}
			/>
			{state.error && <p className="text-red-600">{state.error}</p>}
			<button
				className="bg-gray-900 text-white m-2 hover:bg-black rounded-md p-2 focus:outline-none outline-none dark:bg-gray-50 dark:text-gray-900"
				onClick={handleEmailSubmit}
			>
				Subscribe
			</button>
		</div>
	);
};
export default SubscribeComponent;

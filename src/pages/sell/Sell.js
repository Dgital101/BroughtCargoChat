import { React, useEffect, useState } from 'react';

const Sell = (props) => {
	const [user, setUser] = useState();

	useEffect(() => {
		const userItem = JSON.parse(localStorage.getItem('userInfo'));
		if (userItem) {
			setUser(userItem);
			console.log(user);
		}
	}, []);
	// if (!user.isSeller) {
	// 	return (
	// 		<div className="h-full flex text-center justify-center items-center text-2xl font-bold">
	// 			You are not authorised to access page
	// 		</div>
	// 	);
	// }

	// if (!user.Approved) {
	// 	return (
	// 		<div className="h-full flex text-center justify-center items-center text-2xl font-bold">
	// 			Waiting for approval
	// 		</div>
	// 	);
	// }

	return (
		<div className="h-full flex text-center justify-center items-center text-2xl font-bold">
			Waiting for approval
		</div>
	);
};

export default Sell;

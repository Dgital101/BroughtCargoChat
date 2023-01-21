import React from 'react';
import Group from '../../components/Group';

const MyGroups = () => {
	const groupData = {
		icon: '/assets/images/groups/group-icon.jfif',
		name: 'Giyani Hustlers',
		numberOfMembers: 350,
		isMember: true,
	};
	return (
		<div className="absolute w-full block md:flex justify-center flex-wrap overflow-y-auto scrollbar-hide">
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<Group groupData={groupData} />
			<div className="h-48"></div>
		</div>
	);
};

export default MyGroups;

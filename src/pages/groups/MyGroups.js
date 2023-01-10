import React from "react";
import Group from "../../components/Group";

const MyGroups = () => {
  const groupData = {
    icon: "/assets/images/groups/group-icon.jfif",
    name: "Giyani Hustlers",
    numberOfMembers: 350,
    isMember: true,
  };
  return (
    <div className="block md:flex justify-center flex-wrap">
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
      <Group groupData={groupData} />
    </div>
  );
};

export default MyGroups;

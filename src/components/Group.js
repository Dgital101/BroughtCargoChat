import React from "react";

const Group = ({ groupData }) => {
  const joinGroup = (groupId) => {
    console.log("group joined");
    // members can join the group
  };

  const viewGroup = () => {
    console.log("group viewed");
    // open the group view page
  };
  return (
    <section className="flex justify-between items-center h-24 w-5/4 md:w-76 md:w-96 border-gray-500 border-2 px-4 m-4">
      <img
        src={groupData.icon}
        alt="group icon"
        className="rounded-full w-16 h-16"
      />
      <div className="ml-4 mr-auto">
        <h1
          className="text-xl hover:cursor-pointer"
          onClick={() => viewGroup()}>
          {groupData.name}
        </h1>
        <h2 className="text-sm text-gray-500 ">
          {groupData.numberOfMembers} Members
        </h2>
      </div>
      {!groupData.isMember && (
        <div
          className="ml-auto rounded-full bg-gray-400 p-1 w-16 flex justify-center items-center hover:cursor-pointer"
          onClick={() => joinGroup(groupData.groupId)}>
          <h1> +Join</h1>
        </div>
      )}
    </section>
  );
};

export default Group;

import TeamMember from "@/ui/TeamMember";
import React from "react";

function Team() {
  return (
    <div className=" p-8 rounded-xl flex flex-col gap-5 bg-white">
      <div className="font-bold text-2xl">Team</div>
      <div className="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quae
        quaerat nisi itaque vel saepe sunt temporibus tenetur natus ipsa minus,
        maxime provident sed ad officia laboriosam! Quas, a aliquid.
      </div>
      <TeamMember
        name="John Smith"
        designation="Designation here"
        image="/images/member1.png"
      >
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </TeamMember>
      <TeamMember
        name="Elina Williams"
        designation="Designation here"
        image="/images/member2.png"
      >
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </TeamMember>
      <TeamMember
        name="John Smith"
        designation="Designation here"
        image="/images/member3.png"
      >
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </TeamMember>
    </div>
  );
}

export default Team;

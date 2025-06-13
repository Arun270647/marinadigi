import React from "react";
import TeamMemberCard from "../Common/TeamMemberCard";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "/assets/img/all-images/team-img1.png",
    socials: [
      { icon: "/assets/img/icons/facebook.svg", link: "#" },
      { icon: "/assets/img/icons/instagram.svg", link: "#" },
      { icon: "/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Jane Smith",
    position: "Digital Marketing Officer",
    image: "/assets/img/all-images/team-img2.png",
    socials: [
      { icon: "/assets/img/icons/facebook.svg", link: "#" },
      { icon: "/assets/img/icons/instagram.svg", link: "#" },
      { icon: "/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Sarah Thompson",
    position: "Web Designer",
    image: "/assets/img/all-images/team-img3.png",
    socials: [
      { icon: "/assets/img/icons/facebook.svg", link: "#" },
      { icon: "/assets/img/icons/instagram.svg", link: "#" },
      { icon: "/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "David Garcia",
    position: "Content Writer",
    image: "/assets/img/all-images/team-img4.png",
    socials: [
      { icon: "/assets/img/icons/facebook.svg", link: "#" },
      { icon: "/assets/img/icons/instagram.svg", link: "#" },
      { icon: "/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="team-inner-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="team2-header-area text-center heading2">
              <h5>Our Team</h5>
              <h2>Meet With Our Expert Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

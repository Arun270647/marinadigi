import Header from "../../Layouts/Header6";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer3";
import WeBelieve from "../../Components/Team/WeBelieve";
import TeamMembersSection from "../../Components/Team/TeamMembersSection";
import TestimonialSection from "../../Components/Team/TestimonialSection";

const Team = () => {

  return (
    <>
      <Header />
      <PageHero
        className="about-header-area"
        title={"Meet The Team Member"}
        breadcrumb={["Home", "Meet The Team"]}
      />
      <WeBelieve />
      <TeamMembersSection title="Executive Team" data={executiveTeam} />
      <TestimonialSection />
      <TeamMembersSection title="Leadership" data={leadershipTeam} />
      <CtaSection />
      <Footer />
    </>
  );
};

const executiveTeam = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "src/assets/img/all-images/team-img1.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Jane Smith",
    position: "Digital Marketing Officer",
    image: "src/assets/img/all-images/team-img2.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Sarah Thompson",
    position: "Web Designer",
    image: "src/assets/img/all-images/team-img3.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "David Garcia",
    position: "Content Writer",
    image: "src/assets/img/all-images/team-img4.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
];

const leadershipTeam = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "src/assets/img/all-images/team-img1.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Jane Smith",
    position: "Digital Marketing Officer",
    image: "src/assets/img/all-images/team-img2.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Sarah Thompson",
    position: "Web Designer",
    image: "src/assets/img/all-images/team-img3.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "David Garcia",
    position: "Content Writer",
    image: "src/assets/img/all-images/team-img4.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Florence Walker",
    position: "Future Creative Director",
    image: "src/assets/img/all-images/team-img9.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Sally Mann",
    position: "Designer",
    image: "src/assets/img/all-images/team-img10.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Miss Darrin Larkin",
    position: "Orchestrator",
    image: "src/assets/img/all-images/team-img11.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
  {
    name: "Stacy White",
    position: "Coordinator",
    image: "src/assets/img/all-images/team-img12.png",
    socials: [
      { icon: "src/assets/img/icons/facebook.svg", link: "#" },
      { icon: "src/assets/img/icons/instagram.svg", link: "#" },
      { icon: "src/assets/img/icons/linkedin.svg", link: "#" },
      { icon: "src/assets/img/icons/youtube.svg", link: "#" },
    ],
  },
];

export default Team;

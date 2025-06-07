import { Link } from "react-router-dom";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  socials: { icon: string; link: string }[];
};

const TeamMemberCard = ({
  teamMember,
  blurBackground,
}: {
  teamMember: TeamMember;
  blurBackground?: boolean;
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="team-boxarea">
        <div className="img1">
          <img src={teamMember.image} alt={teamMember.name} />
        </div>
        <ul
          style={{
            backgroundImage: blurBackground
              ? "url(src/assets/img/bg/iconsbg.png)"
              : "",
          }}
        >
          {teamMember.socials.map((social, i) => (
            <li key={i}>
              <Link to={social.link}>
                <img src={social.icon} alt={`${teamMember.name} social`} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="content">
          <Link to="/team">{teamMember.name}</Link>
          <p>{teamMember.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

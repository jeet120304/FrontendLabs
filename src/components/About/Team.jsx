import React from "react";
import "./Team.css"; // Optional CSS file for custom styles
// Replace with actual images
import abhijeetimg from "../../assets/images/abhijeetimg.jpeg"
import laxmiimg from "../../assets/images/Laxmiimg.jpeg"
import snigdhaimg from "../../assets/images/snigdhaimg.jpeg"
import jaybabuimg from "../../assets/images/jaybabuimg.jpeg"

const teamMembers = [
  { name: "Laxmipriya Ojha", img:laxmiimg },
  { name: "Snigdha Panda", img:snigdhaimg },
  { name: "Jaybabu Sharma", img:jaybabuimg },
  { name: "Abhilipsa Senapati", img: "https://via.placeholder.com/100" },
  { name: "Suman", img: "https://via.placeholder.com/100" },
  { name: "Gaurav Maharana", img: "https://via.placeholder.com/100" },
  { name: "Biswajit", img: "https://media.licdn.com/dms/image/v2/D5603AQEzIVpnvglnaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723961314666?e=1745452800&v=beta&t=bSJ3f4d6tMr5tMPYpvJXdpsGjm5jj5BO_Vpb7YzliD8" },
];

const Team = () => {
  return (
    <div className="container text-center py-4">
      <h1 className="mb-4 text-secondary">Meet Our Team</h1>

      {/* Team Lead */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">
          <div className="card team-card p-3">
            <img src={abhijeetimg} alt="Team Lead" 
            className="team-photo  mx-auto " />
            <h5 className="mt-3">Abhijeet Gouda</h5>
            <p className="role text-primary">Team Lead</p>
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div className="row">
        <h3 className="mb-3">Developers</h3>
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-3">
            <div className="card team-card p-3">
              <img src={member.img} alt={member.name} className="team-photo mx-auto" />
              <h5 className="mt-3">{member.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

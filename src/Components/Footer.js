import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  const gitHubTeamLinks = {
    christinaCephus: {
      github: "https://github.com/theCephusHasLanded",
    },
    jacquelinePasaoa: {
      github: "https://github.com/jkpasaoa"
    }
  };
  return (
    <div className="footer">
      <div className="developers">
        <div className="developer">
          <Link to={gitHubTeamLinks.christinaCephus.github}>Christina's Github</Link>
          
        </div>
        <div className="developer">
          <Link to={gitHubTeamLinks.jacqeulinePasaoa.github}>Jacqueline's Github</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;

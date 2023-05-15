import React from "react";
import ThemeContext from './ThemeContext';
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import pasaoaAvatar from "../assets/pasaoa.jpeg";
import cephusAvatar from "../assets/cephus.jpeg";

function About() {
  return (
    <div>
      <div className="text-center">
        <p>
          Welcome to LiveIt! We're Christina and Jacqueline, two passionate
          software developers with a shared vision to make healthy living more
          accessible to everyone.
          <br />
          <br />
          Our journey into software development began in different ways, but we
          both quickly fell in love with the process of creating and
          problem-solving. As we gained more experience, we found ourselves
          drawn to projects that had a positive impact on people's lives. That's
          when we decided to combine our skills and start LiveIt.
          <br />
          <br />
          Our mission is to provide a platform that makes it easy for people to
          find healthy, delicious snack options that fit their dietary needs and
          preferences. We believe that eating well shouldn't have to be a chore,
          and that's why we've created a platform that's fun, easy to use, and
          full of mouth-watering snacks.
          <br />
          <br />
          One of the things we're most proud of is our commitment to
          sustainability. We believe that healthy living extends beyond just
          what we eat, but also includes how we treat our planet. That's why we
          work with vendors who prioritize eco-friendly practices, and why we're
          always looking for ways to reduce our own environmental impact.
          <br />
          <br />
          At LiveIt, we're not just building a business, we're building a
          community. We're so grateful to be able to share our passion for
          healthy living with all of you, and we're excited to see where this
          journey takes us. Thanks for joining us on this adventure!
          <br />
          <br />
          Let's LiveIt to the Fullest! 🧋
        </p>
        <br />
        <br />
        <br />
        <h3>Follow Us on LinkedIn!</h3>
        <div className="d-flex justify-content-center">
          <div className="mr-4">
            <a
              href="https://www.linkedin.com/in/jacquelinepasaoa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={pasaoaAvatar}
                alt="Jacqueline Pasaoa"
                roundedCircle
                width="150"
              />
            </a>
            <p className="mt-2">
              <a
                href="https://www.linkedin.com/in/jacquelinepasaoa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jacqueline Pasaoa
              </a>
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/thecephus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={cephusAvatar}
                alt="The Cephus"
                roundedCircle
                width="150"
              />
            </a>
            <p className="mt-2">
              <a
                href="https://www.linkedin.com/in/thecephus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Christina Cephus
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

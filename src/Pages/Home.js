import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      <h2>Welcome</h2>
      <h3>To the Live It App!</h3>
      <h6><i>"Why Die-T When You Can Live It?"</i></h6>
      <div style={{ borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          src="https://giphy.com/embed/l2QDPfzp4dIVpbL2M"
          width="480"
          height="360"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          title="Snacks GIF"
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/awkwafina-l2QDPfzp4dIVpbL2M"  style={{ fontFamily: "Victor Mono", color: "green" }}>"We Use Only The Best Reverse-Psychology! 👍🏼"</a>
      </p>
    </Container>
  );
}

export default Home;

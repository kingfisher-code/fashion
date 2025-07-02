import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="justify-self-center">
      <div className="justify-self-center md:justify-self-left p-5">
        <Image
          src="/hair-style.jpg"
          alt=""
          width={600}
          height={400}
          //   layout="responsive"
          className="rounded-xl"
        />
      </div>
      <div className="font-mono text-center">
        <p className="text-center p-3">
          “My name is [], and I’ve been a professional hairstylist for over 8
          years. Graduating from the Paul Mitchell school in 2015, I’ve been
          able to channel my passion for quality hair care and service through
          my various jobs in the industry. Starting as a hair washer in a
          boutique salon, I worked my way through the ranks, becoming an
          assistant colorist, then colorist, then Junior Styler, and eventually
          earning my own chair. In 2022, I was featured in a social media
          campaign for Vogue highlighting [Celebrity’s] daring new Winter
          hairstyle. Not long after, I ventured out to start my own salon—which
          now brings you to me! I’m always looking for new clients, so if you’re
          ready for a style you can love with a professional dedicated to your
          satisfaction, book an appointment today and let’s get to work!”
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hi! My name is Bill. I am a central grader and teaching assistant of data analytics for UCBerkeley Extension through 2U Education. Photography is a hobby of mine. I live in San Jose and I hike local trails about 4 miles three times per week. While I hike a take photos of wild life and landscapes. Here are some of the pictures I have taken.
        </p>
      </div>
    </section>
  );
}

export default About;

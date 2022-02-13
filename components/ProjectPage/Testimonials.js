import React from "react";
import Image from "next/image";

export default function Testimonials({ project }) {
  const projectData = project.fields;
  return (
    <div>
      <h1>Testimonials</h1>
      <div> {projectData.testimonial1}</div>
      <h2> {projectData.testimonialName1}</h2>
      <div> {projectData.testimonial2}</div>
      <h2> {projectData.testimonialName2}</h2>
      <div> {projectData.testimonial3}</div>
      <h2> {projectData.testimonialName3}</h2>
    </div>
  );
}

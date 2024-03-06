import React from "react";

interface AboutProps {
  title: string;
  information: string;
}

const About = ({ title, information }: AboutProps): JSX.Element => {
  return (
    <div className="p-8 rounded-xl flex flex-col gap-4 bg-white">
      <div className="font-bold text-2xl">{title}</div>
      <div className="font-bold text-xl">What is {title} ?</div>
      <div>{information}</div>
      <div className="font-bold text-xl">Lorem ipsum dolor sit amet</div>
      <div>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
        <br />
        <br /> Diam praesent massa dapibus magna aliquam a dictumst volutpat.
        Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing
        cursus felis pellentesque interdum. Odio cursus phasellus velit in
        senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id
        imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
        nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
        quis lobortis phasellus. Integer pellentesque enim convallis ultricies
        at.
        <br />
        <br /> Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
        massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </div>
    </div>
  );
};

export default About;

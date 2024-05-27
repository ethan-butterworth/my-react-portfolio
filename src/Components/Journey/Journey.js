import React, { useState } from 'react';
import './Journey.css'

const Journey = () => {
  const paragraphs = [
    "My introduction to the world of technology began with the Halo series on the Xbox. Captivated by the game, I was inspired to dive deeper into the tech world. This interest led me to build my own PC, which further fueled my passion for video games and technology. This early experience with hardware and software sparked a desire to pursue a career in IT.",
    "I formalized my education in technology by studying IT in both high school and college. This provided me with a strong foundation and the technical knowledge necessary to enter the workforce. Eager to apply my skills and gain practical experience, I decided to start working as soon as possible. This decision led me to an apprenticeship at BNY Mellon.",
    "The apprenticeship at BNY Mellon was a valuable introduction to IT support. Working in a call center environment, I developed strong customer service skills and learned to troubleshoot a variety of technical issues. However, the call center's focus on call statistics limited the complexity of problems I could address. This experience, though beneficial, left me wanting more in terms of technical challenges and growth.",
    "Seeking an environment where I could delve deeper into technical issues, I moved on to Crane Payment Innovations. My role here provided the opportunity to work on more complex problems without the pressure of call statistics. I had the freedom to take the time needed to resolve issues thoroughly and could collaborate directly with other tech teams. This was a significant step forward in my professional development, allowing me to enhance my problem-solving skills and technical knowledge.",
    "Despite these advancements, I found myself unhappy with the work-life balance at Crane Payment Innovations. I did not feel valued and saw limited potential for career progression. This prompted me to seek a new opportunity where I could grow both professionally and personally. I found this at Zuto, where I took on the role of Support Engineer.",
    "At Zuto, my responsibilities expanded to include asset management and participating in significant projects like re-cabling the office. The hands-on nature of the work and the variety of tasks kept me engaged and motivated. Additionally, Zuto's commitment to employee development allowed me to dedicate a day every two weeks to study. I seized this opportunity to begin a web development course on Udemy, laying the groundwork for my transition into a front-end developer role.",
    "Through each of these roles, I have continuously sought to expand my skills and take on new challenges. My journey from gaming enthusiast to IT professional has been driven by a passion for technology and a commitment to personal and professional growth. I am now focused on becoming a front-end developer, ready to bring my diverse experience and skills to new and exciting projects."
  ];

  const [currentParagraph, setCurrentParagraph] = useState(0);

  return (
    <div id='journey'>
      <section className="section">
        <h2>My Journey:</h2>
        <p>{paragraphs[currentParagraph]}</p>
        <div className='buttons'>
          {paragraphs.map((_, index) => (
            <button key={index} onClick={() => setCurrentParagraph(index)}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journey;

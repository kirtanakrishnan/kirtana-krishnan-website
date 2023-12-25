import "./about.css";

function About() {
    return (
        
       <div className="about">

        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="743"
        height="650"
        viewBox="0 0 743 625"
        fill="none"
        className="svg-background"
      >
        <g filter="url(#filter0_f_4_166)">
          <path d="M192.202 286.606C151.9 216.122 126.475 121.055 182.136 61.0415C236.873 1.93804 338.982 14.2287 409.402 55.2749C479.221 95.8659 532.654 157.397 584.713 217.791C605.318 149.81 633.287 83.9544 668.026 21.4367C691.721 -21.1269 721.08 -64.2976 766.731 -84.5552C845.312 -119.456 941.204 -69.8362 986.926 0.799653C1013.51 41.8458 1028.51 89.7963 1029.89 138.126C1032.65 234.331 982.968 324.685 926.461 404.244C876.805 474.143 820.788 539.878 759.233 600.431C738.47 620.855 716.198 641.234 688.331 651.166C616.837 676.613 469.045 568.565 412.389 528.133C322.28 463.833 246.282 381.179 192.202 286.606Z" fill="#602B69" />
        </g>
        <defs>
          <filter id="filter0_f_4_166" x="0" y="-246" width="1180" height="1051" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_4_166" />
          </filter>
        </defs>
      </svg>

            <div className="about-content">
            <div className="about-title">
                About Me

                <p>Hi there! My name is Kirtana and I’m currently a student at Northeastern University. I'm self-motivated, people-oriented, and constantly looking to take on new challenges and acquire new skillsets. 
                As someone who is interested in applying cognitive processes to technological design, 
                I seek to design humane technology that is accessible, connects people across the world, 
                and helps solve modern problems.
                </p>

                <div className="experience-title">
                My Experience

                <h3>* Incoming Software Engineering Co-op at MORSE Corp (Jan 2024 - June 2024)</h3>
                <h3>* UX Content Intern at Sovos (June 2023 - Aug 2023) </h3>
                <h3>* Software Engineering Intern at KeeperAI (March 2023 - June 2023)</h3>
                <h3>* Software Developer at Code4Community (Feb 2023 - Present)</h3>
                <h3>* Fundamentals of CS 1 + 2, Discrete Structures Tutor (Jan 2023 - Present)</h3>
                <h3>* Research Assistant at CORE Lab (May 2022 - Present)</h3>
                
               </div>
                
            </div>

            </div>
           
            

            




            
        </div>
      
    );
  }
  
  export default About;
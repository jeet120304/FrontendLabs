// import React from 'react'
// // import aboutImage from "../../assets/images/aboutImage.png"
// const About = () => {
//   return (

//     <div className="container-fluid p-0">
//       {/* Hero Section */}
//       <header className="hero-section d-flex align-items-center justify-content-between px-5 py-5">
//         <div className="text-container">
//           <p className="text-primary"><h2 className='animate__slideOutUp'>Welcome to Our Frontend Interview Questions Platform</h2></p>
//           <h1 className="fw-bold">Discover Challenging and Engaging</h1>
//             <h1 className="fw-bold"> Frontend Interview Questions</h1>
//           <p className='text-primary'>
//             <h5>Explore a vast collection of frontend interview questions across HTML, CSS, JavaScript,
//              <br/>and React to prepare for your next technical interview.</h5>
//           </p>
//           <div className="mt-4">
//             <a target='blank' href="https://www.geeksforgeeks.org/front-end-development/#:~:text=The%20frontend%20is%20what%20users,8%20min%20read" className="btn btn-primary border border-black">
//             Learn More
//             </a>
//           </div>
//         </div>
//         <div className="image-fluid w-50 h-auto">
//           <img src='https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-illustration-download-in-svg-png-gif-file-formats--website-development-web-programming-backend-programmer-pack-design-illustrations-6109659.png'
//           // style={{ maxWidth: '300px', height: '300px', objectFit: 'cover' }}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }


// export default About
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const About = () => {
  return (
    <div className="container-fluid p-0">
      <motion.header
        className="hero-section d-flex flex-column flex-lg-row align-items-center justify-content-between px-5 py-5"
        initial={{ opacity: 0, y: 0 }} // Initial animation (fade-in & slide-up)
        animate={{ opacity: 1, y: 0 }} // Final position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      >
        <motion.div
          className="text-container text-center text-lg-start mb-4 mb-lg-0"
          initial={{ opacity: 0, x: 0 }} // Slide-in from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-primary">Welcome to Our Frontend Interview Questions Platform</h2>
          <h1 className="fw-bold">Discover Challenging and Engaging</h1>
          <h1 className="fw-bold">Frontend Interview Questions</h1>
          <motion.div
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }} // Delayed fade-in
          >
            <h5>
              Explore a vast collection of frontend interview questions across HTML, CSS, JavaScript,
              <br />
              and React to prepare for your next technical interview.
            </h5>
          </motion.div>
          <motion.div
            className="mt-4"
            whileHover={{ scale: 1 }} // Button hover effect
            whileTap={{ scale: 0.9 }} // Button click effect
          >
            <a
              target="blank"
              href="https://www.geeksforgeeks.org/front-end-development/#:~:text=The%20frontend%20is%20what%20users,8%20min%20read"
              className="btn btn-primary border border-black"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="image-container text-center"
          initial={{ opacity: 0, x: 0 }} // Slide-in from right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-illustration-download-in-svg-png-gif-file-formats--website-development-web-programming-backend-programmer-pack-design-illustrations-6109659.png"
            alt="Frontend Developer"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "300px",
            }}
            className="img-fluid"
          />
        </motion.div>
      </motion.header>
      
    </div>
  );
};

export default About;

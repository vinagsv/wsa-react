// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) {
//       setStep((prev) => prev - 1);
//     }
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((prev) => prev + 1);
//     }
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen(!isOpen)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>
//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>
//           <div className="buttons">
//             <Button textcolor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
//               <span>👈</span> Previous
//             </Button>
//             <Button textcolor="#fff" bgColor="#7950f2" onClick={handleNext}>
//               Next <span>👉</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function Button({ textcolor, bgColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textcolor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

import { useState } from "react";
import Blog from "./Blog";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [showBlog, setShowBlog] = useState(false);

  function handlePrevious() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  }

  if (showBlog) {
    return (
      <>
        <button className="top-blog-button" onClick={() => setShowBlog(false)}>
          ← Back to Stepper
        </button>
        <Blog />
      </>
    );
  }

  return (
    <>
      <button className="top-blog-button" onClick={() => setShowBlog(true)}>
        Blog
      </button>

      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button textcolor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textcolor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textcolor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

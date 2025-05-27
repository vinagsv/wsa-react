import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import Blog from "./Blog";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <button className="blog-button" onClick={() => navigate("/blog")}>
        Blog
      </button>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`item ${openIndex === index ? "open" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <span className="number">{index + 1}</span>
          <span className="title">{faq.title}</span>
          <span className="icon">{openIndex === index ? "-" : "+"}</span>
          {openIndex === index && (
            <div className="content-box">
              <p>{faq.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accordion />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;

import { useState } from "react";

export default function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  function toggleIsOpen(id) {
    setCurrOpen((prev) => (prev === id ? null : id));
  }

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          title={el.title}
          num={index + 1}
          key={el.title}
          onToggleIsOpen={toggleIsOpen}
          currOpen={currOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, onToggleIsOpen, currOpen, children }) {
  let isOpen = currOpen === num ? true : false;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onToggleIsOpen(num)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div className={`content-box`}>{isOpen ? children : ""}</div>
    </div>
  );
}

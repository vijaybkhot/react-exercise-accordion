import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

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

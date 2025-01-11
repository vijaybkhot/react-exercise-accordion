export function AccordionItem({
  num,
  title,
  onToggleIsOpen,
  currOpen,
  children,
}) {
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

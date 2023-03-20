import "./HighlightedText.css";

export const HighlightedText = ({
  text,
  colored,
}: {
  text: string;
  colored?: boolean;
}) => {
  return (
    <div
      className="version-number"
      style={{ backgroundColor: colored ? "#ccffeb" : "rgb(234, 231, 231)" }}
    >
      <p>{text}</p>
    </div>
  );
};

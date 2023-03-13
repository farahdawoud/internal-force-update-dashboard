import React from "react";
import "./HighlightedText.css";

export const HighlightedText = ({ text }: { text: string }) => {
  return (
    <div
      className="highlight"
      //   style={{
      //     backgroundColor: "lightgrey",
      //     width: "30%",
      //     borderRadius: 10,
      //   }}
    >
      <p className="version-number">{text}</p>
    </div>
  );
};

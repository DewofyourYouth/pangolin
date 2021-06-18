import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

export function ParsedMarkdown({ file }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [file]);
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

import React from "react";
import Story from "./Story";
export default function StoryCollection() {
  let storiescount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stories = storiescount.map((item) => {
    return <Story key={item} />;
  });
  return <div className="hide-scrollbar stroy-collection">{stories}</div>;
}

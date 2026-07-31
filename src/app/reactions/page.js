"use client";

import { useState } from "react";

export default function Page() {
  const initialReactions = [
    { id: 1, emoji: "👍", count: 0 },
    { id: 2, emoji: "❤️", count: 0 },
    { id: 3, emoji: "😂", count: 0 },
    { id: 4, emoji: "☺️", count: 0 },
    { id: 5, emoji: "😯", count: 0 },
    { id: 6, emoji: "😢", count: 0 },
    { id: 7, emoji: "😡", count: 0 },
  ];

  const [reactions, setReactions] = useState(initialReactions);

  function handleAdd(id) {
    const newReactions = reactions.map((reaction) => {
      if (reaction.id === id) {
        return {
          ...reaction,
          count: reaction.count + 1 > 5 ? 0 : reaction.count + 1,
        };
      }

      return reaction;
    });

    setReactions(newReactions);
  }

  function handleRemove(id) {
    const newReactions = reactions.filter((reaction) => reaction.id !== id);

    setReactions(newReactions);
  }

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {reactions.map((reaction) => (
        <div
          key={reaction.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,.1)",
          }}
        >
          <button onClick={() => handleAdd(reaction.id)}>
            {reaction.emoji}
          </button>

          <p
            style={{
              color: reaction.count >= 3 ? "green" : "black",
              fontWeight: "bold",
            }}
          >
            {reaction.count}
          </p>

          <button onClick={() => handleRemove(reaction.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

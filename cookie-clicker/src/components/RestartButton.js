import React from "react";

export default function RestartButton({ restartState }) {
  return (
    <div 
    className="restart-state"
    name="restart"
    onClick={restartState}>
      <span>
        Restart game
      </span>
    </div>
  );
}
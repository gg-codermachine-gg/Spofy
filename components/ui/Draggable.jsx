import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable(props) {
  console.log(props.style);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id
  });
  const style = transform
    ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...props.style }}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

interface Note {
  id: string;
  content: string;
  position: { x: number; y: number }; // Define position type
}

const notesData: Note[] = [
  {
    id: "1",
    content: "Study English",
    position: { x: 0, y: 0 },
  },
];

export default function App() {
  const [notes, setNotes] = useState(notesData);

  const handleDragEnd = (event: any) => {
    const note = notes.find((x) => x.id === event.active.id);
    if (note) {
      note.position.x += event.delta.x;
      note.position.y += event.delta.y; // Update position from transform
      const _notes = notes.map((x) => {
        if (x.id === note?.id) return note;
        return x;
      });
      setNotes(_notes);
    }
  };

  return (
    <div className="w-screen h-[80%] relative top-[100px]">
      d
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable>
          {notes.map((note) => (
            <Draggable
              key={note.id}
              id={note.id}
              index={note.id} // Assuming you have an index property
              style={{
                position: "absolute",
                left: `${note.position.x}px`,
                top: `${note.position.y}px`,
              }}
            >
              {note.content}
            </Draggable>
          ))}
        </Droppable>
      </DndContext>
    </div>
  );
}

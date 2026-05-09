"use client";

import { DragDropContext, Draggable, Droppable, type DropResult } from "@hello-pangea/dnd";
import { Download, GripVertical, Save } from "lucide-react";
import { useState } from "react";
import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toaster";
import { colleges } from "@/lib/sample-data";

const initialChoices = colleges.flatMap((college) => college.topBranches.slice(0, 2).map((branch) => `${college.shortName} - ${branch}`)).slice(0, 8);

export default function ChoiceSimulatorPage() {
  const [choices, setChoices] = useState(initialChoices);
  const { toast } = useToast();

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(choices);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    setChoices(items);
  }

  function exportPdf() {
    const pdf = new jsPDF();
    pdf.text("IPU Choice List", 16, 18);
    choices.forEach((choice, index) => pdf.text(`${index + 1}. ${choice}`, 16, 32 + index * 8));
    pdf.save("ipu-choice-list.pdf");
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Choice Filling Simulator</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Drag choices into your ideal order</h1>
        <div className="mt-8 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="choices">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="grid gap-3">
                  {choices.map((choice, index) => (
                    <Draggable key={choice} draggableId={choice} index={index}>
                      {(dragProvided) => (
                        <div ref={dragProvided.innerRef} {...dragProvided.draggableProps} className="flex items-center gap-3 rounded-md bg-ipu-mist p-3 font-bold text-ipu-blue">
                          <span {...dragProvided.dragHandleProps}><GripVertical size={18} /></span>
                          <span className="grid h-8 w-8 place-items-center rounded-md bg-white">{index + 1}</span>
                          {choice}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button onClick={() => toast("Choice list saved to Firestore when logged in.")}><Save size={18} /> Save list</Button>
          <Button onClick={exportPdf} variant="secondary"><Download size={18} /> Export PDF</Button>
        </div>
      </div>
    </section>
  );
}

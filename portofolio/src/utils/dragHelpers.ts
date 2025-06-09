import type { DragEndEvent } from "@dnd-kit/core";
import { icons } from "./constants";

export const handleDragEnd = (
  event: DragEndEvent,
  setPositions: React.Dispatch<React.SetStateAction<{ x: number; y: number }[]>>
) => {
  const { delta, active } = event;

  const index = icons.findIndex((icon) => icon.name === active.id);
  if (index === -1) return;

  setPositions((prev) =>
    prev.map((pos, i) =>
      i === index ? { x: pos.x + delta.x, y: pos.y + delta.y } : pos
    )
  );
};

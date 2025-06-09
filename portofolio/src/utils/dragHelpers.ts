import type { DragEndEvent } from "@dnd-kit/core";

export const handleDragEnd = (
  event: DragEndEvent,
  iconImages: string[],
  setPositions: React.Dispatch<React.SetStateAction<{ x: number; y: number }[]>>
) => {
  const { delta, active } = event;

  const index = iconImages.findIndex((img) => `${img}` === active.id);
  if (index === -1) return;

  setPositions((prev) =>
    prev.map((pos, i) =>
      i === index ? { x: pos.x + delta.x, y: pos.y + delta.y } : pos
    )
  );
};

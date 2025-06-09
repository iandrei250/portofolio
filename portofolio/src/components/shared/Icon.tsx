import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { IIcon } from "../../utils/types/types";

const Icon = ({ id, iconImage, position, title }: IIcon) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    position: "absolute" as const,
    left: position.x,
    top: position.y,
    transform: transform ? CSS.Translate.toString(transform) : undefined,
  };
  return (
    <div
      className="p-2 hover:bg-blue-300 transition-colors duration-300 size-fit "
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <img src={iconImage} alt={`${id} icon`} className="w-[48px] h-[48px]" />
      <div className="text-center text-xs mt-1">{title}</div>
    </div>
  );
};

export default Icon;

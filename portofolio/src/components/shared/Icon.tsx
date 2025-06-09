import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Icon = ({ iconImage }: { iconImage: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${iconImage}`,
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;
  return (
    <div
      className="p-2 hover:bg-blue-300 transition-colors duration-300 size-fit "
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <img src={iconImage} alt="icon iage" className="w-[48px] h-[48px]" />
    </div>
  );
};

export default Icon;

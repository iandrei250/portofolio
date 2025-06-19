import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const PdfViewer = ({ cvPath }: { cvPath: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
  };
  return <iframe
    ref={setNodeRef}
    style={style}
    {...listeners}
    {...attributes}
      src={cvPath}
      className="w-[300px] h-[500px] rounded-xl border"
      title="PDF Viewer"
    />

}

export default PdfViewer;
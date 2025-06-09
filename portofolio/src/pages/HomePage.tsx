import "../styles/home.css";
import cSharpIcon from "../assets/cSharpIcon.svg";
import fileIcon from "../assets/fileIcon.png";
import javaIcon from "../assets/javaIcon.svg";
import pdfIcon from "../assets/pdfIcon.png";
import Icon from "../components/shared/Icon";
import { DndContext } from "@dnd-kit/core";

const HomePage = () => {
  return (
    <DndContext>
      <div className="home w-svw h-svh p-2">
        <Icon iconImage={cSharpIcon} />
        <Icon iconImage={javaIcon} />
        <Icon iconImage={fileIcon} />
        <Icon iconImage={pdfIcon} />
      </div>
    </DndContext>
  );
};

export default HomePage;

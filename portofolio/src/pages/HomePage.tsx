import "../styles/home.css";
import cSharpIcon from "../assets/cSharpIcon.svg";
import fileIcon from "../assets/fileIcon.png";
import javaIcon from "../assets/javaIcon.svg";
import pdfIcon from "../assets/pdfIcon.png";
import Icon from "../components/shared/Icon";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { handleDragEnd } from "../utils/dragHelpers";

const HomePage = () => {
  const iconImages = [cSharpIcon, javaIcon, fileIcon, pdfIcon];

  const [positions, setPositions] = useState(() =>
    iconImages.map((_, i) => ({ x: 10, y: 10 + i * 80 }))
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        handleDragEnd(event, iconImages, setPositions);
      }}
    >
      <div className="home w-svw h-svh p-2 relative">
        {iconImages.map((iconImage, index) => (
          <Icon key={index} iconImage={iconImage} position={positions[index]} />
        ))}
      </div>
    </DndContext>
  );
};

export default HomePage;

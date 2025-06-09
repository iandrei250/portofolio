import "../styles/home.css";
import Icon from "../components/shared/Icon";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { handleDragEnd } from "../utils/dragHelpers";
import { icons } from "../utils/constants";

const HomePage = () => {
  const [positions, setPositions] = useState(() =>
    icons.map((_, i) => ({ x: 10, y: 10 + i * 80 }))
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        handleDragEnd(event, setPositions);
      }}
    >
      <div className="home w-svw h-svh p-2 relative">
        {icons.map((iconImage, index) => (
          <Icon
            key={iconImage.name}
            id={iconImage.name}
            iconImage={iconImage.icon}
            position={positions[index]}
            title={iconImage.name}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default HomePage;

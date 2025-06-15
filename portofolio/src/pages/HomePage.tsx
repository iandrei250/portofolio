import "../styles/home.css";
import Icon from "../components/shared/Icon";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { handleDragEnd } from "../utils/dragHelpers";
import { icons } from "../utils/constants";
import Dialog from "../components/shared/Dialog";

const HomePage = () => {
  const [positions, setPositions] = useState(() =>
    icons.map((_, i) => ({ x: 10, y: 10 + i * 80 }))
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        handleDragEnd(event, setPositions);
      }}
    >
      <div className="home w-svw h-svh p-2 relative">
        {icons.map((iconImage, index) => (
          <div onDoubleClick={() => setIsOpen(true)} key={iconImage.name}>
            <Icon
              key={iconImage.name}
              id={iconImage.name}
              iconImage={iconImage.icon}
              position={positions[index]}
              title={iconImage.name}
            />
            {isOpen && (
              <Dialog
                navigationDestination={iconImage.link ?? ""}
                closeModal={() => setIsOpen(false)}
                title={iconImage.name}
                description={iconImage.description}
              />
            )}
          </div>
        ))}
      </div>
    </DndContext>
  );
};

export default HomePage;

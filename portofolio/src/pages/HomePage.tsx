import "../styles/home.css";
import Icon from "../components/shared/Icon";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { handleDragEnd } from "../utils/dragHelpers";
import { icons } from "../utils/constants";
import Modal from "../components/shared/Modal";
import type { IconConfig } from "../utils/types/types";

const HomePage = () => {
  const [positions, setPositions] = useState(() =>
    icons.map((_, i) => ({ x: 10, y: 10 + i * 80 }))
  );

  const [isOpen, setIsOpen] = useState(false);

  const [activeIcon, setActiveIcon] = useState<IconConfig | null>(null);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        handleDragEnd(event, setPositions);
      }}
    >
      <div className="home w-svw h-svh p-2 relative">
        {icons.map((iconImage, index) => (
          <div
            onDoubleClick={() => setActiveIcon(iconImage)}
            key={iconImage.name}
          >
            <Icon
              key={iconImage.name}
              id={iconImage.name}
              iconImage={iconImage.icon}
              position={positions[index]}
              title={iconImage.name}
            />
          </div>
        ))}

        {activeIcon && (
          <Modal
            navigationDestination={activeIcon?.link ?? ""}
            closeModal={() => setActiveIcon(null)}
            title={activeIcon?.name ?? ""}
            description={activeIcon?.description}
            isVisible={isOpen}
          />
        )}
      </div>
    </DndContext>
  );
};

export default HomePage;

export interface IIcon {
  id: string;
  iconImage: string;
  position: { x: number; y: number };
  title: string;
}

export type IconConfig = {
  name: string;
  icon: string;
  link?: string;
  description?: string;
};

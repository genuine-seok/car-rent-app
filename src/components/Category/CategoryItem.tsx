import { useItemGroup } from "../../contexts/ItemGroupContext";
import { Chip } from "../common";

interface ICategoryItem {
  value: string;
  id: number;
}

export const CategoryItem = ({ value, id }: ICategoryItem) => {
  const { activeId, onSelect } = useItemGroup();
  const isActive = activeId === id;
  const onClick = () => onSelect(id);

  return (
    <div onClick={onClick}>
      <Chip isActive={isActive}>{value}</Chip>
    </div>
  );
};

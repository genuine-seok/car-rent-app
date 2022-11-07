import { useUI } from "../../contexts/uiContext";
import { CategoryType } from "../../types";
import { Chip } from "../common";

interface ICategoryItem {
  value: CategoryType;
}

export const CategoryItem = ({ value }: ICategoryItem) => {
  const { category, setCategory } = useUI();

  const isActive = value === category;
  const onClick = () => setCategory(value);

  return (
    <div onClick={onClick}>
      <Chip isActive={isActive}>{value}</Chip>
    </div>
  );
};

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
} from "react";

type ItemGroupProps = {
  children: ReactNode;
  activeId: number;
  onSelect: Dispatch<SetStateAction<number>> | (() => void);
};

type ItemGroupValueProps = {
  activeId: number;
  onSelect: Dispatch<SetStateAction<number>> | (() => void);
};

const ItemGroupContext = createContext<ItemGroupValueProps | null>(null);

export const ItemGroup = ({ children, activeId, onSelect }: ItemGroupProps) => {
  const value = useMemo(
    () => ({
      activeId,
      onSelect,
    }),
    [activeId, onSelect]
  );
  return (
    <ItemGroupContext.Provider value={value}>
      {children}
    </ItemGroupContext.Provider>
  );
};

export const useItemGroup = () => {
  const value = useContext(ItemGroupContext);
  if (!value) throw new Error("Item component should be used within ItemGroup");
  return value;
};

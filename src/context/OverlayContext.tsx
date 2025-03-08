import { createContext, ReactNode, useContext, useState } from "react";

interface OverlayContextType {
  isOpen: boolean;
  openOverlay: () => void;
  closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

interface OverlayProviderProp {
  children: ReactNode;
}

export const OverlayProvider = ({ children }: OverlayProviderProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <OverlayContext.Provider value={{ isOpen, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return context;
};

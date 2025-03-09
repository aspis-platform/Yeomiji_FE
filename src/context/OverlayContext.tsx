import { createContext, ReactNode, useContext, useState } from "react";
import { AiChatModal } from "../components/AiChat";

interface OverlayContextType {
  isOpen: boolean;
  openOverlay: () => void;
  closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType>({
  isOpen: false,
  openOverlay: () => {},
  closeOverlay: () => {},
});

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
      {isOpen && <AiChatModal onClose={closeOverlay} />}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};

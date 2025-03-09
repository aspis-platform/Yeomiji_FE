import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";

interface OverlayContextType {
  openModal: (modal: ReactElement) => void;
  closeModal: () => void;
}

const OverlayContext = createContext<OverlayContextType>({
  openModal: (_) => {},
  closeModal: () => {},
});

interface OverlayProviderProp {
  children: ReactNode;
}

export const OverlayProvider = ({ children }: OverlayProviderProp) => {
  const [modal, setModal] = useState<ReactElement | null>(null);

  const openModal = (modal: ReactElement) => setModal(modal);
  const closeModal = () => setModal(null);

  return (
    <OverlayContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal && modal}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};

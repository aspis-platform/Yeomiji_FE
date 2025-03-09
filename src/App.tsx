import { Outlet, Route, Routes } from "react-router-dom";
import {
  AdoptionInfo,
  DonateInfo,
  GroupIntro,
  HomepageMain,
  VolunteerIntro,
} from "./pages";
import { GlobalStyle } from "./style";
import { CafeButton, AiChatButton, NavBar, Footer } from "./components/base";
import styled from "styled-components";
import { AiChatModal } from "./components/AiChat";
import { OverlayProvider } from "./context/OverlayContext";
import { useOverlay } from "./context/OverlayContext";

function Layout() {
  const { closeOverlay } = useOverlay();

  return (
    <>
      <GlobalStyle />
      <FloatingButtons>
        <CafeButton />
        <AiChatButton />
      </FloatingButtons>

      <Wrapper>
        <NavBar />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
}

function App() {
  return (
    <OverlayProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomepageMain />} />
          <Route path="/introduction" element={<GroupIntro />} />
          <Route path="/volunteer" element={<VolunteerIntro />} />
          <Route path="/adoption" element={<AdoptionInfo />} />
          <Route path="/donation" element={<DonateInfo />} />
        </Route>
      </Routes>
    </OverlayProvider>
  );
}

const FloatingButtons = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  right: 4%;
  top: 180px;
  position: fixed;
  z-index: 10;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export default App;

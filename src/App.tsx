import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/base/NavBar";
import Footer from "./components/base/Footer";
import HomepageMain from "./pages/HomepageMain";
import styled from "styled-components";
import GroupIntro from "./pages/GroupIntro";
import AiChatButton from "./components/base/AiChatButton";
import CafeButton from "./components/base/CafeButton";
import VolunteerIntro from "./pages/VolunteerIntro";
import AdoptionInfo from "./pages/AdoptionInfo";
import DonateInfo from "./pages/DonateInfo";

function Layout() {
  return (
    <>
      <StyledSection>
        <CafeButton />
        <AiChatButton />
      </StyledSection>

      <StyledDiv>
        <NavBar />
        <Outlet />
        <Footer />
      </StyledDiv>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomepageMain />} />
        <Route path="/introduction" element={<GroupIntro />} />
        <Route path="/volunteer" element={<VolunteerIntro />} />
        <Route path="/adoption" element={<AdoptionInfo />} />
        <Route path="/donation" element={<DonateInfo />} />
      </Route>
    </Routes>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  right: 4%;
  top: 180px;
  position: fixed;
  z-index: 10;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export default App;

import styled from "styled-components";

const Topbar = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Sidebar = styled.div`
  width: 14rem;
  height: calc(100vh - 5rem);
  background-color: #005461;
`;
export { Sidebar, Topbar };

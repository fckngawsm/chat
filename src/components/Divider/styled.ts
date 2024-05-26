import styled from "styled-components";

export const StyledDivider = styled.div<{ fullWidth?: boolean }>`
  width: ${({ fullWidth = false }) => (fullWidth ? "100%" : "96.5%")};
  margin: 2px auto;
  height: 1px;
  background-color: #eaeaea;
`;

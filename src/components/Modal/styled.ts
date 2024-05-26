import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  visibility: visible;
  transition: visibility 0.3s, opacity 0.4s ease-in;
  z-index: 2;
`;

export const ModalContent = styled.div`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: relative;
  display: block;
  width: 100%;
  max-width: 340px;
  color: black;
  background-color: #fff;
  align-self: center;
  box-sizing: border-box;
  padding: 40px 30px;
`;

export const ModalTitle = styled.h2`
  font-size: 15px;
  line-height: 1.3;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

export const ModalButton = styled.button`
  width: 100%;
  background-color: #3369f3;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #ffffff;
  padding: 12px 0;
  border-radius: 8px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ModalHintText = styled.h3`
  font-size: 11px;
  color: #ff2f2f;
  line-height: 1.3;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin: 0;
  margin-top: 14px;
`;

export const ModalChildren = styled.div`
  margin: 67px 0 33px;
`;

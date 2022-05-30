import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(39, 158, 202, 0.2);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const ContentButton = styled.div`
  display: flex;
`;

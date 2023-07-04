import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Textarea = styled.textarea`
  width: 300px;
  height: 150px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Result = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;
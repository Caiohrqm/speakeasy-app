import styled from "styled-components";

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Content = styled.TouchableOpacity``;

export const Category = styled.Text`
  color: #07b5a1;
  font-size: 12px;
`;

export const Name = styled.Text`
  font-size: 16px;
`;

export const Email = styled.Text`
  font-size: 12px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const ButtonIcon = styled.TouchableOpacity``;

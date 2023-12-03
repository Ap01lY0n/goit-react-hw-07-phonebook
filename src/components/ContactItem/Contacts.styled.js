import { styled } from 'styled-components';

export const ItemEl = styled.li`
  width: 400px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContactData = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
  
`;

export const ContactName = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #000000;
`;

export const ContactNumber = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

export const ContactDelete = styled.button`
  margin-top: 15px;
  margin-bottom: 5px;
  border: 2px solid black;
  background-color: #ff3838;
  border-radius: 15px; 
  color: #2a2a2a;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  
`;
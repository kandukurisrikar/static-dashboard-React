import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 0; /* Ensure no margin at the bottom */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-start; /* Align items to the start */
  align-items: center;
  margin-bottom: 20px;
`;

const DashboardTitle = styled.div`
  font-size: 36px; /* Increase the font size for the Dashboard title */
  font-weight: bold;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping if needed */
  gap: 10px;
  margin-bottom: 0; /* Ensure no bottom margin */
`;

const StatsBlock = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 calc(25% - 10px); /* Adjust for a better fit */
  min-width: 200px; /* Ensures a minimum width */
  box-sizing: border-box;
`;

const StatsIcon = styled.div`
  font-size: 20px; /* Reduced icon size */
  color: ${(props) => props.color || '#fff'};
`;

const StatsValue = styled.div`
  font-size: 18px; /* Reduced text size */
`;

const StatsChange = styled.div`
  font-size: 12px; /* Reduced text size */
  color: ${(props) => (props.increase ? 'green' : 'red')};
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TopSection>
        <DashboardTitle>Dashboard</DashboardTitle>
      </TopSection>
      <StatsContainer>
        <StatsBlock>
          <StatsIcon color="#8A2BE2"><FaShoppingCart /></StatsIcon> {/* Purple color for Total Orders */}
          <StatsValue>Total Orders</StatsValue>
          <StatsChange increase={true}>3% ↑</StatsChange>
        </StatsBlock>
        <StatsBlock>
          <StatsIcon color="#28A745"><IoBagHandle /></StatsIcon> {/* Green color for Total Delivered */}
          <StatsValue>Total Delivered</StatsValue>
          <StatsChange increase={false}>3% ↓</StatsChange>
        </StatsBlock>
        <StatsBlock>
          <StatsIcon color="#e74c3c"><IoBagHandle /></StatsIcon> {/* Red color for Orders Cancelled */}
          <StatsValue>Orders Cancelled</StatsValue>
          <StatsChange increase={true}>3% ↑</StatsChange>
        </StatsBlock>
        <StatsBlock>
          <StatsIcon color="#FF69B4"><FaDollarSign /></StatsIcon> {/* Pink color for Total Revenue */}
          <StatsValue>Total Revenue</StatsValue>
          <StatsChange increase={false}>3% ↓</StatsChange>
        </StatsBlock>
      </StatsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

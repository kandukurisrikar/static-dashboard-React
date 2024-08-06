import React from 'react';
import Sidebar from './components/Sidebar'; // Ensure Sidebar is exported correctly
import Dashboard from './components/Dashboard'; // Ensure Dashboard is exported correctly
import ActivitySection from './components/ActivitySection'; // Ensure ActivitySection is exported correctly
import RecentOrders from './components/RecentOrders'; // Ensure RecentOrders is exported correctly
import RightSection from './components/RightSection'; // Ensure RightSection is exported correctly
import ErrorBoundary from './components/ErrorBoundary'; // Ensure ErrorBoundary is exported correctly
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 3; // Increased flex to make the middle section larger
  display: flex;
  flex-direction: column;
  align-items: center; // Center items horizontally
  padding: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px; // Optional: limit the maximum width of the content
`;

const DashboardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RightSectionContainer = styled.div`
  flex: 1.5; // Reduced flex to make the right section smaller
  display: flex;
  align-items: center; // Center vertically
  justify-content: center; // Center horizontally
`;

const App = () => {
  return (
    <ErrorBoundary>
      <AppContainer>
        <Sidebar />
        <MainContent>
          <ContentWrapper>
            <SearchBar /> {/* Search bar is now centered */}
            <DashboardContainer>
              <Dashboard /> {/* Dashboard with no margin */}
            </DashboardContainer>
            <ActivitySection />
            <RecentOrders />
          </ContentWrapper>
        </MainContent>
        <RightSectionContainer>
          <RightSection />
        </RightSectionContainer>
      </AppContainer>
    </ErrorBoundary>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSuitcase, faLock, faDollarSign, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 100px;
  height: 100vh;
  background-color: #1a1a2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const IconWrapper = styled.div`
  margin: 30px 0; /* Increased margin for more space between icons */
  color: #fff;
  font-size: 24px; /* Adjust icon size as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomIcon = styled.img`
  width: 24px; /* Adjust size as needed */
  height: 24px; /* Adjust size as needed */
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconWrapper>
        <CustomIcon src="https://imgs.search.brave.com/B5374P_c-UKTcOAg4xiBEF1M0Vc1HfjgwBpVFYKvFVE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM3LzU2LzA4/LzM2MF9GXzgzNzU2/MDg3MF9XQ2dJQTgz/a2U2WGN0aUU0bGdM/UTZBSjBTNUtHZ1Nl/UC5qcGc" alt="Custom Icon" /> {/* Replace URL_TO_YOUR_IMAGE with your image URL */}
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faHome} style={{ color: '#1E90FF' }} /> {/* Blue home icon */}
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faSuitcase} /> {/* Trade icon */}
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faLock} /> {/* Locked icon */}
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faDollarSign} /> {/* Revenue icon */}
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faUserCog} /> {/* Profile settings icon */}
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faSignOutAlt} /> {/* Logout icon */}
      </IconWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import { createGlobalStyle } from 'styled-components';

// Define global styles here
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// Define common theme styles if needed
export const theme = {
  colors: {
    primary: '#1a1a2e',
    secondary: '#121212',
    accent: '#42A5F5',
    background: '#f0f0f0',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};

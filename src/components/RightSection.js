import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaBullseye, FaBell, FaCog, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { IoMdRestaurant } from 'react-icons/io';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Styled components
const SectionContainer = styled.div`
  background: #1f1f2e;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeaderIcons = styled.div`
  position: absolute;
  top: 20px; /* Added space from top */
  right: 20px; /* Added space from right */
  display: flex;
  align-items: center;
  background: black;
  padding: 10px;
  border-radius: 50px; /* Rounded background for icons */
  z-index: 1;
`;

const Icon = styled.div`
  font-size: 24px; /* Increased icon size */
  color: #fff;
  margin-left: 20px; /* Space between icons */
  cursor: pointer;
`;

const ProfileIcon = styled.div`
  width: 50px; /* Increased size */
  height: 50px; /* Increased size */
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FinancialBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #2c2c3e;
  border-radius: 8px;
  padding: 20px;
  margin-top: 80px; /* Increased space between icons and content */
  margin-bottom: 50px; /* Increased margin to create space */
`;

const NetProfitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-right: 20px; /* Space between net profit and graph */
`;

const FinancialTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NetProfit = styled.div`
  font-size: 48px; /* Increased font size */
  margin-bottom: 10px;
`;

const ProfitDetails = styled.div`
  display: flex;
  align-items: center;
`;

const GreenArrow = styled.div`
  color: green;
  font-size: 24px;
  margin-left: 10px;
`;

const CircleContainer = styled.div`
  position: relative;
  width: 150px; /* Adjusted size */
  height: 150px; /* Adjusted size */
  flex: 1;
`;

const CircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
  text-align: center;
`;

const PercentageText = styled.div`
  font-size: 15px; /* Larger font size for percentage */
  font-weight: bold;
`;

const NoteText = styled.div`
  font-size: 10px; /* Smaller font size */
  color: #bbb;
  text-align: center;
  margin-top: 5px; /* Space between the percentage and note */
`;

const MetricsBlock = styled.div`
  background: #2c2c3e;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px; /* Space below the block */
`;

const MetricItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MetricContent = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color || '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const MetricText = styled.div`
  font-size: 16px;
  color: #fff; /* Text color inside the block */
`;

const ArrowIcon = styled(FaArrowRight)`
  color: #fff;
  font-size: 20px;
`;

const FeedbackBlock = styled.div`
  background: #2c2c3e;
  border-radius: 8px;
  padding: 20px;
`;

const FeedbackTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const FeedbackItem = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfilePic = styled.div`
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeedbackText = styled.div`
  flex: 1;
`;

const FeedbackRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: gold;
  margin-right: 2px;
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0;
`;

const ShowMoreText = styled.div`
  margin-left: 10px;
`;

// Component
const RightSection = () => {
  const [showMore, setShowMore] = useState({});

  const handleShowMoreToggle = (index) => {
    setShowMore(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#87CEEB', '#333'], // Sky blue color for the segment
      },
    ],
  };

  return (
    <SectionContainer>
      <HeaderIcons>
        <Icon><FaCog /></Icon>
        <Icon><AiOutlineMail /></Icon>
        <Icon><FaBell /></Icon>
        <ProfileIcon>
          <img src="https://imgs.search.brave.com/5OpbVvWf7_abM4u6uFeDSE7TwtZPkVoNfMAB1rh-0iY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw" alt="Profile" /> {/* Increased profile picture size */}
        </ProfileIcon>
      </HeaderIcons>
      <FinancialBlock>
        <NetProfitContainer>
          <FinancialTitle>Net Profit</FinancialTitle>
          <NetProfit>$6759.25</NetProfit>
          <ProfitDetails>
            <GreenArrow>▲</GreenArrow> 3% ↑
          </ProfitDetails>
        </NetProfitContainer>
        <CircleContainer>
          <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
          <CircleText>
            <PercentageText>70%</PercentageText>
            <NoteText>Goal Completed</NoteText>
          </CircleText>
        </CircleContainer>
      </FinancialBlock>

      <MetricsBlock>
        <MetricItem>
          <MetricContent>
            <IconWrapper color="#FFA500"><FaBullseye /></IconWrapper>
            <MetricText>Goals</MetricText>
          </MetricContent>
          <ArrowIcon />
        </MetricItem>
        <MetricItem>
          <MetricContent>
            <IconWrapper color="#87CEEB"><IoMdRestaurant /></IconWrapper>
            <MetricText>Popular Dishes</MetricText>
          </MetricContent>
          <ArrowIcon />
        </MetricItem>
        <MetricItem>
          <MetricContent>
            <IconWrapper color="#2E8B57"><AiOutlineMenu /></IconWrapper>
            <MetricText>Menus</MetricText>
          </MetricContent>
          <ArrowIcon />
        </MetricItem>
      </MetricsBlock>

      <FeedbackBlock>
        <FeedbackTitle>Customer Feedback</FeedbackTitle>
        {[
          {
            name: 'Jenny Wilson',
            image: 'https://imgs.search.brave.com/xEPFlHdj5ViJtz8mR0nXAgWEuY9mOLro1Alwuf-DkCM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93cml0/ZXN0eWxlc29ubGlu/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTEvVGhy/ZWUtU3RhdGlzdGlj/cy1UaGF0LVdpbGwt/TWFrZS1Zb3UtUmV0/aGluay1Zb3VyLVBy/b2Zlc3Npb25hbC1Q/cm9maWxlLVBpY3R1/cmUuanBn',
            rating: 4,
            comment: 'The food was excellent and so was the service...I had the musrrom risotto with scallops which was awsome.I had a burger over greens which was also very good'
          },
          {
            name: 'Dianne Russell',
            image: 'https://imgs.search.brave.com/KEid7JH5WRHstWeKDjlJXKMAaJbeI_3fdeUls5_XB2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9leHBl/cnRwaG90b2dyYXBo/eS5iLWNkbi5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTAvY29vbC1wcm9m/aWxlLXBpY3R1cmVz/LXJldG91Y2hpbmct/MS5qcGc',
            rating: 5,
            comment: 'We enjoyed the Eggs Benedict served on Homemade focaccia bread and hot coffee.Perfect service.'
          },
          {
            name: 'Devon Lane',
            image: 'https://imgs.search.brave.com/do6hhJdJ_3_MClquLxGa9wo_Dor7gcYy92qqBiDzzCM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/Mzc1MDYyNC9waG90/by9wcm9maWxlLXBv/cnRyYWl0LW9mLWEt/c2VuaW9yLW1hbi13/aXRoLXdoaXRlLWJl/YXJkLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz05WWVSdlhJ/VXJ1WmwtcTlBRElr/MjVZdm9ReGpNQzhC/OEwxTlBJUVFjNXBJ/PQ',
            rating: 4,
            comment: 'Normally wings are wings, but are lean meat and tender...and i had my eggs,with hotCoffee and brow bread too.the brown bread was soft enough that theb yeast was compltely into it and sugar coated outside'
          }
        ].map((feedback, index) => (
          <FeedbackItem key={index}>
            <ProfilePic>
              <img src={feedback.image} alt={feedback.name} />
            </ProfilePic>
            <FeedbackText>
              <div><strong>{feedback.name}</strong></div>
              <FeedbackRating>
                {[...Array(feedback.rating)].map((_, i) => <Star key={i}>★</Star>)}
                {[...Array(5 - feedback.rating)].map((_, i) => <Star key={i}>☆</Star>)}
                <span>{feedback.rating}/5</span>
              </FeedbackRating>
              <div>
                {showMore[index] ? feedback.comment : `${feedback.comment.slice(0, 100)}...`}
              </div>
              <ShowMoreButton onClick={() => handleShowMoreToggle(index)}>
                {showMore[index] ? <FaChevronUp /> : <FaChevronDown />}
                <ShowMoreText>{showMore[index] ? 'Show Less' : 'Show More'}</ShowMoreText>
              </ShowMoreButton>
            </FeedbackText>
          </FeedbackItem>
        ))}
      </FeedbackBlock>
    </SectionContainer>
  );
};

export default RightSection;

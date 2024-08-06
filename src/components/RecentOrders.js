import React from 'react';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  background-color: #1f1f2e;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
  overflow-y: auto;
  margin-top: 40px; /* Increased margin-top for more space above */
`;

const Title = styled.h3`
  margin-bottom: 20px; /* Space between title and order table */
`;

const OrderTable = styled.div`
  display: grid;
  grid-template-columns: 60px 2fr 1fr 1fr 1fr;
  gap: 10px;
  font-size: 14px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const OrderRow = styled.div`
  display: grid;
  grid-template-columns: 60px 2fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
  padding: 15px 0; /* Increased padding for space between rows */
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }
`;

const CustomerPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const OrderStatus = styled.div`
  color: ${(props) => (props.status === 'delivered' ? 'green' : props.status === 'cancelled' ? 'red' : 'orange')};
`;

const Divider = styled.div`
  border-top: 1px solid #333;
  margin: 5px 0;
`;

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'delivered', picture: 'https://imgs.search.brave.com/aPzzOrFrseVkMghXZNnZWBH2FnWWgD3Q9BEDdwJlysg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NjYwNGM3N2IxYjRi/ZDY1OGFfcHJvZmls/ZXBob3RvNS5qcGVn' },
    { customer: 'Jane Copper', orderNo: '48965786', amount: '$365.00', status: 'delivered', picture: 'https://imgs.search.brave.com/SLR9F3wnLBOLOgQv2b5zVZXCW6owOyCT8hrBGHAP5U8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaG90/a2l0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYmItcGx1Z2lu/L2NhY2hlL2Nvb2wt/cHJvZmlsZS1waWMt/bWF0aGV1cy1mZXJy/ZXJvLWxhbmRzY2Fw/ZS02Y2JlZWEwN2Nl/ODcwZmM1M2JlZGQ5/NDkwOTk0MWE0Yi16/eWJyYXZneDJxNDcu/anBlZw' },
    { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.00', status: 'cancelled', picture: 'https://imgs.search.brave.com/fioKVNVObswh-1TT5TlVQssH2XKFGt9R-ix48agTR1s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvUmVhbGlzdGlj/LU1hbGUtUHJvZmls/ZS1QaWN0dXJlLmpw/Zw' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'pending', picture: 'https://imgs.search.brave.com/Kpvkgf_aR4wvVewIczcx-kvi6otx5anBUrAbpKyapck/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NzQxZTFjZDBiM2Y0/YTc3MTJfcHJvZmls/ZXBob3RvX2dvb2Rj/cm9wLmpwZWc' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'delivered', picture: 'https://imgs.search.brave.com/EcbeGlqXlo-1UsUTCdkF0yVSwJa2x_xL3p66MTvzPns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NmY5NzhlNzUzNzJk/YzMzMmVfcHJvZmls/ZXBob3RvMS5qcGVn' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'delivered', picture: 'https://imgs.search.brave.com/fzyuGqCnjHkPWJ79j3sXJsjcnfMJK4ZPNqi9PAbHVdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZWJha2Vy/eS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDUvUHJv/ZmlsZS1QaWN0dXJl/LmpwZWc' },
  ];

  return (
    <OrdersContainer>
      <Title>Recent Orders</Title> {/* Added title */}
      <OrderTable>
        <div><strong>Picture</strong></div>
        <div><strong>Customer</strong></div>
        <div><strong>Order No</strong></div>
        <div><strong>Amount</strong></div>
        <div><strong>Status</strong></div>
      </OrderTable>
      {orders.map((order, index) => (
        <React.Fragment key={index}>
          <OrderRow>
            <CustomerPicture src={order.picture} alt={order.customer} />
            <div>{order.customer}</div>
            <div>{order.orderNo}</div>
            <div>{order.amount}</div>
            <OrderStatus status={order.status}>{order.status}</OrderStatus>
          </OrderRow>
          <Divider />
        </React.Fragment>
      ))}
    </OrdersContainer>
  );
};

export default RecentOrders;

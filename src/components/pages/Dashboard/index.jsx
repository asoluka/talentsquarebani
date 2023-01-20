import React, { useState } from "react";
import { DashboardTemplate } from "../../templates";
import { Navbar, SideNav } from "../../molecules";
import styled from "styled-components";
import { screen } from "../../../theme";
import { DashboardActivityFeed, VirtualAccounts } from "../../organisms";
import { DashboardSecondaryNav } from "../../molecules/DashboardSecondaryNav";
import { virtualAccounts } from "../../../utils/db";

const BodySection = styled.section`
  display: flex;
  height: 90%;
  padding: 0 24px 16px 24px;
  background: transparent;
  justify-content: space-between;

  @media only screen and (${screen.sm}) {
    display: block;
    padding: 8px;
  }
`;

export const Dashboard = () => {
  const [activityFieldData, setActivityFieldData] = useState(
    virtualAccounts[1]
  );

  const setActivityData = (id) => {
    setActivityFieldData(virtualAccounts[id]);
  };

  return (
    <DashboardTemplate header={<Navbar />} sidebar={<SideNav />}>
      <DashboardSecondaryNav />

      <BodySection>
        <VirtualAccounts
          virtualAccounts={virtualAccounts}
          setActivityFieldData={setActivityData}
        />
        <DashboardActivityFeed activityField={activityFieldData} />
      </BodySection>
    </DashboardTemplate>
  );
};

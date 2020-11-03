import React, { useState } from 'react';
import { RenderGroomerDashboard } from './RenderGroomerDashboard';

const GroomerDashboardContainer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [home, setHome] = useState(true);
  const [appointments, setAppointments] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const viewHome = () => {
    setAppointments(false);
    setHome(true);
  };

  const viewGroomers = () => {
    setHome(false);
    setAppointments(true);
  };

  return (
    <RenderGroomerDashboard
      collapsed={collapsed}
      onCollapse={onCollapse}
      home={home}
      viewHome={viewHome}
      appointments={appointments}
      viewGroomers={viewGroomers}
    />
  );
};

export default GroomerDashboardContainer;

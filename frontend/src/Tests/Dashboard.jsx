import React from 'react';
import Sidebar from './Sidebar';

import { FaHome, FaCalendar, FaTasks, FaSignOutAlt, FaChalkboardTeacher, FaClipboardList } from 'react-icons/fa';

const Testubg = () => {
  const sidebarItems = [
    {
      type: 'dropdown',
      title: 'Classes',
      icon: <FaChalkboardTeacher />,
      options: [
        { label: 'Class 1', icon: <FaClipboardList />, onClick: () => alert('Class 1 selected') },
        { label: 'Class 2', icon: <FaClipboardList />, onClick: () => alert('Class 2 selected') },
        { label: 'Class 3', icon: <FaClipboardList />, onClick: () => alert('Class 3 selected') },
      ],
    },
    {
      type: 'button',
      title: 'Chats',
      icon: <FaHome />,
      onClick: () => alert('Chats clicked'),
    },
    {
      type: 'button',
      title: 'Calendar',
      icon: <FaCalendar />,
      onClick: () => alert('Calendar clicked'),
    },
    {
      type: 'button',
      title: 'Assignments',
      icon: <FaTasks />,
      onClick: () => alert('Assignments clicked'),
    },
    {
      type: 'button',
      title: 'To Do List',
      icon: <FaTasks />,
      onClick: () => alert('To Do List clicked'),
    },
    {
      type: 'dropdown',
      title: 'Activity',
      icon: <FaClipboardList />,
      options: [
        { label: 'Activity 1', icon: <FaClipboardList />, onClick: () => alert('Activity 1 selected') },
        { label: 'Activity 2', icon: <FaClipboardList />, onClick: () => alert('Activity 2 selected') },
      ],
    },
    {
      type: 'button',
      title: 'Logout',
      icon: <FaSignOutAlt />,
      onClick: () => alert('Logout clicked'),
    },
  ];

  return (
    <div className="flex">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 p-4">Main Content</div>
    </div>
  );
};

export default Dashboard;

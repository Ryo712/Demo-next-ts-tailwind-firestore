import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, 
  faBox, 
  faChartBar, 
  faEnvelope, 
  faCalendar, 
  faTable, 
  faTh, 
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Dashboard', icon: faTachometerAlt },
  { name: 'Products', icon: faBox },
  { name: 'Reports', icon: faChartBar },
  { name: 'Messages', icon: faEnvelope },
  { name: 'Calendar', icon: faCalendar },
  { name: 'Table', icon: faTable },
  { name: 'UI Components', icon: faTh },
  { name: 'Users', icon: faUserFriends },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-100 flex flex-col">
      <div className="px-4 py-6">
        <div className="text-xl font-semibold text-white text-center">Dashwind.</div>
        <div className="flex flex-col items-center mt-6 mb-12">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="/path-to-your-profile-image.jpg" // 実際の画像パスに置き換えてください
            alt="ユーザープロフィール"
          />
          <div className="text-center">
            <p className="text-sm font-semibold text-white mt-4">Michael Jackson</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
        <nav className="flex flex-col mt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-300 rounded hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg mr-3" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-auto px-4 py-2">
        <p className="text-xs text-gray-400">
          This is a Dashboard Sidebar Navigation by pantazisoftware.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-[#40210d] mb-6">
      <Link to="/" className="hover:text-[#260801] transition-colors duration-200 flex items-center">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-[#40210d]" />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#260801] transition-colors duration-200">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#260801] font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;

import { Link } from 'react-router-dom';
import React from 'react';

const ProjectLink = props => {
  const { to, year, title } = props;

  return (
    <Link to={to}>
      <div className="flex hover:underline mb-10">
        <div className="ml-12 xl:ml-64 mr-8 font-bold text-right">
          <p>{year}</p>
        </div>
        <div className="text-left font-normal">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectLink;

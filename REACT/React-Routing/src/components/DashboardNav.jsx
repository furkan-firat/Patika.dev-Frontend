import React from 'react'
import { Link } from "react-router-dom"

function DashboardNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard/income">Income</Link>
        </li>
        <li>
          <Link to="/dashboard/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/dashboard/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNav
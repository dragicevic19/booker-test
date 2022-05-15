import "./sidebar.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">the booker</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">LISTS</p>

          <li>
            <CottageOutlinedIcon className="icon" />
            <span>My Offers</span>
          </li>
          <li>
            <ViewListOutlinedIcon className="icon" />
            <span>Reservations History</span>
          </li>
          <li>
            <ViewListOutlinedIcon className="icon" />
            <span>Future Reservations</span>
          </li>

          <p className="title">REPORTS</p>
          <li>
            <AssessmentOutlinedIcon className="icon" />
            <span>Reports</span>
          </li>

          <p className="title">USER</p>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <PersonOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
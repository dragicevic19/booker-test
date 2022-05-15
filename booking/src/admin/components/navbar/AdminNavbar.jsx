import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const AdminNavbar = () => {
  return (
    <div className="adminNavbar">
      <div className="adminWrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <AccountCircleOutlinedIcon className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
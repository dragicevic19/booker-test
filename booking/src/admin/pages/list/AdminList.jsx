import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/AdminNavbar"
import Datatable from "../../components/datatable/Datatable"


const AdminList = () => {
  return (
    <div className='adminList'>
      <Sidebar />
      <div className="adminListContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default AdminList
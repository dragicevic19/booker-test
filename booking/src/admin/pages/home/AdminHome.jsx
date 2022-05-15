import AdminNavbar from "../../components/navbar/AdminNavbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
import "./home.scss"

const AdminHome = () => {
  return (
    <div className="adminHome">
      <Sidebar />
      <div className="adminHomeContainer">
        <AdminNavbar />
        <div className="adminListContainer">
          <div className="listTitle">
            Latest Transactions
          </div>
          <Table />
        </div>
        
      </div>
    </div>
  )
}

export default AdminHome
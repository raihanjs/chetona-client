import { Outlet } from "react-router-dom";
import SideNavigation from "../pages/Admin/Shared/SideNavigation";

export default function AdminLayout() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <SideNavigation />
          </div>
          <div className="col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

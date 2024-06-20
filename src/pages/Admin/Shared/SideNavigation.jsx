import { Link } from "react-router-dom";

export default function SideNavigation() {
  return (
    <>
      {/*  <!-- Side Navigation --> */}
      <aside className="fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0">
        <Link className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none">
          Chetona
        </Link>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                  to=""
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                >
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to="/admin/books"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                >
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Books
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to="/admin/writers"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                >
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Writers
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to="/admin/categories"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                >
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Caregories
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to="/admin/promotions"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                >
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Promotions
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}

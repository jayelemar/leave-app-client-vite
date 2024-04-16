import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import NavLinks from './SidebarLinks';
import { PowerIcon } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary p-4 md:h-40">
        <Link className="w-32 text-white md:w-40" to="/">
          <Logo
            containerStyles="relative top-1 "
            textStyles="text-sm md:text-xl flex justify-start items-start flex-col text-start"
            spanStyles=""
          />
        </Link>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
        <form>
          <button className="flex h-10 w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative">
      <div className="item-center mx-auto flex w-screen flex-col justify-center">
        <div className="flex flex-col text-center ">
          <div className="flex flex-col md:flex-row ">
            <div className=" h-screen flex-none md:w-64">
              <Sidebar />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;

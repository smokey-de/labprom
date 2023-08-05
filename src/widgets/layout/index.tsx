import React, { FC } from 'react';
import Navbar from "src/widgets/layout/navbar";
import Footer from '@/widgets/layout/footer';

interface IProps {
  children: React.ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
      <>
        <Navbar/>
        {children}
        <Footer/>
      </>
  );
};

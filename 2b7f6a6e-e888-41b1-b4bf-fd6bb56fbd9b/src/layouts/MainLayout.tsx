import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
interface MainLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children, onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLogout={onLogout} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>);

};
export default MainLayout;
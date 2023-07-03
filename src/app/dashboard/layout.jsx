import {Content} from '@/components';
import { Sidebar } from '../components/sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Content>
        {children}
      </Content>
    </>
  );
}

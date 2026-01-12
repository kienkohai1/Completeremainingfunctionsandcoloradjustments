import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Ticket, 
  MessageSquarePlus, 
  ShoppingBag 
} from 'lucide-react';
import imgImage1 from "figma:asset/bddc0bf93d570d4a40eda0e7cccb0f35d375c456.png";

interface MenuItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    path: '/courts',
    label: 'Quản lý sân',
    icon: <CalendarDays size={20} />,
  },
  {
    path: '/staff',
    label: 'Quản lý nhân sự',
    icon: <Users size={20} />,
  },
  {
    path: '/tickets',
    label: 'Đăng ký vé',
    icon: <Ticket size={20} />,
  },
  {
    path: '/requests',
    label: 'Yêu cầu thêm',
    icon: <MessageSquarePlus size={20} />,
  },
  {
    path: '/shopping',
    label: 'Kho hàng',
    icon: <ShoppingBag size={20} />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[380px] h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={imgImage1} 
            alt="The Hunter Logo" 
            className="w-24 h-auto"
          />
        </div>
        <h2 className="text-2xl font-medium text-black mb-1">
          Quản lý Sân Tập
        </h2>
        <p className="text-2xl text-[#2962ff] font-normal">
          The Hunter
        </p>
      </div>

      {/* Menu Section */}
      <div className="flex-1 px-4 py-6">
        <p className="text-sm text-gray-500 px-6 mb-4">Menu quản lý</p>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-lg transition-all
                  ${isActive 
                    ? 'bg-blue-100 text-[#2962ff] font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.icon}
                <span className="text-base">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

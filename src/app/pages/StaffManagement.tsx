import { Plus, Edit2, Trash2, Phone, Mail } from 'lucide-react';

interface Staff {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive';
  shift: string;
}

const staffList: Staff[] = [
  { id: 1, name: 'Nguyễn Văn An', position: 'Quản lý', phone: '0901234567', email: 'an.nguyen@example.com', status: 'active', shift: 'Ca sáng' },
  { id: 2, name: 'Trần Thị Bình', position: 'Lễ tân', phone: '0902345678', email: 'binh.tran@example.com', status: 'active', shift: 'Ca sáng' },
  { id: 3, name: 'Lê Văn Cường', position: 'Bảo vệ', phone: '0903456789', email: 'cuong.le@example.com', status: 'active', shift: 'Ca đêm' },
  { id: 4, name: 'Phạm Thị Dung', position: 'Huấn luyện viên', phone: '0904567890', email: 'dung.pham@example.com', status: 'active', shift: 'Ca chiều' },
  { id: 5, name: 'Hoàng Văn Em', position: 'Lễ tân', phone: '0905678901', email: 'em.hoang@example.com', status: 'inactive', shift: 'Ca sáng' },
];

export default function StaffManagement() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Quản lý nhân sự</h1>
        <p className="text-gray-600">Quản lý thông tin và lịch làm việc của nhân viên</p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Thêm nhân viên
        </button>

        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            Đang làm: {staffList.filter(s => s.status === 'active').length}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            Nghỉ: {staffList.filter(s => s.status === 'inactive').length}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Họ tên</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Chức vụ</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Ca làm việc</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Liên hệ</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Trạng thái</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {staffList.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium">{staff.name}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {staff.position}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-700">{staff.shift}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={14} />
                      {staff.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail size={14} />
                      {staff.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      staff.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {staff.status === 'active' ? 'Đang làm' : 'Nghỉ'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

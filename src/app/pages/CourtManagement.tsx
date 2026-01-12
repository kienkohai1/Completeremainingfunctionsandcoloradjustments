import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Court {
  id: number;
  name: string;
  status: 'available' | 'occupied' | 'maintenance';
  currentUser?: string;
  timeSlot?: string;
}

const courts: Court[] = [
  { id: 1, name: 'Sân 1', status: 'occupied', currentUser: 'Nguyễn Văn A', timeSlot: '10:00 - 12:00' },
  { id: 2, name: 'Sân 2', status: 'occupied', currentUser: 'Trần Thị B', timeSlot: '09:00 - 11:00' },
  { id: 3, name: 'Sân 3', status: 'available' },
  { id: 4, name: 'Sân 4', status: 'occupied', currentUser: 'Lê Văn C', timeSlot: '11:00 - 13:00' },
  { id: 5, name: 'Sân 5', status: 'available' },
  { id: 6, name: 'Sân 6', status: 'occupied', currentUser: 'Phạm Thị D', timeSlot: '10:30 - 12:30' },
  { id: 7, name: 'Sân 7', status: 'maintenance' },
  { id: 8, name: 'Sân 8', status: 'available' },
];

export default function CourtManagement() {
  const statusColors = {
    available: 'bg-green-100 text-green-800',
    occupied: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
  };

  const statusLabels = {
    available: 'Còn trống',
    occupied: 'Đang sử dụng',
    maintenance: 'Bảo trì',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Quản lý sân</h1>
        <p className="text-gray-600">Quản lý trạng thái và thông tin các sân tập</p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus size={20} />
            Thêm sân mới
          </button>
        </div>
        
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            Trống: {courts.filter(c => c.status === 'available').length}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            Đang dùng: {courts.filter(c => c.status === 'occupied').length}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            Bảo trì: {courts.filter(c => c.status === 'maintenance').length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courts.map((court) => (
          <div
            key={court.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-medium">{court.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${statusColors[court.status]}`}>
                {statusLabels[court.status]}
              </span>
            </div>

            {court.status === 'occupied' && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Khách hàng:</p>
                <p className="font-medium">{court.currentUser}</p>
                <p className="text-sm text-gray-600 mt-1">Thời gian:</p>
                <p className="font-medium">{court.timeSlot}</p>
              </div>
            )}

            {court.status === 'available' && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600 font-medium">Sẵn sàng sử dụng</p>
              </div>
            )}

            {court.status === 'maintenance' && (
              <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-600 font-medium">Đang bảo trì</p>
              </div>
            )}

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-1">
                <Edit2 size={16} />
                Sửa
              </button>
              <button className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-1">
                <Trash2 size={16} />
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

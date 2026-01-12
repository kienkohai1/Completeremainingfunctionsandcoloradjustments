import { Plus, Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react';

interface Booking {
  id: number;
  customerName: string;
  phone: string;
  court: string;
  date: string;
  timeSlot: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  price: number;
}

const bookings: Booking[] = [
  { id: 1, customerName: 'Nguyễn Văn A', phone: '0901234567', court: 'Sân 1', date: '12/01/2026', timeSlot: '10:00 - 12:00', status: 'confirmed', price: 200000 },
  { id: 2, customerName: 'Trần Thị B', phone: '0902345678', court: 'Sân 2', date: '12/01/2026', timeSlot: '09:00 - 11:00', status: 'confirmed', price: 200000 },
  { id: 3, customerName: 'Lê Văn C', phone: '0903456789', court: 'Sân 4', date: '12/01/2026', timeSlot: '11:00 - 13:00', status: 'pending', price: 200000 },
  { id: 4, customerName: 'Phạm Thị D', phone: '0904567890', court: 'Sân 6', date: '12/01/2026', timeSlot: '10:30 - 12:30', status: 'confirmed', price: 200000 },
  { id: 5, customerName: 'Hoàng Văn E', phone: '0905678901', court: 'Sân 3', date: '13/01/2026', timeSlot: '14:00 - 16:00', status: 'pending', price: 200000 },
  { id: 6, customerName: 'Vũ Thị F', phone: '0906789012', court: 'Sân 5', date: '13/01/2026', timeSlot: '15:00 - 17:00', status: 'cancelled', price: 200000 },
];

export default function TicketBooking() {
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    confirmed: 'Đã xác nhận',
    pending: 'Chờ xác nhận',
    cancelled: 'Đã hủy',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Đăng ký vé</h1>
        <p className="text-gray-600">Quản lý đặt sân và vé tập luyện</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Đã bán hôm nay</h3>
            <CheckCircle className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">36 vé</p>
          <p className="text-sm text-gray-500 mt-2">+12% so với hôm qua</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Chờ xác nhận</h3>
            <Clock className="text-yellow-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">
            {bookings.filter(b => b.status === 'pending').length} vé
          </p>
          <p className="text-sm text-gray-500 mt-2">Cần xử lý</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Doanh thu hôm nay</h3>
            <div className="text-blue-600 text-2xl">₫</div>
          </div>
          <p className="text-3xl font-semibold">7.2 Triệu</p>
          <p className="text-sm text-gray-500 mt-2">36 giao dịch</p>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Đăng ký vé mới
        </button>

        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Tất cả trạng thái</option>
            <option>Đã xác nhận</option>
            <option>Chờ xác nhận</option>
            <option>Đã hủy</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Hôm nay</option>
            <option>Tuần này</option>
            <option>Tháng này</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Mã vé</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Khách hàng</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Sân</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Ngày</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Giờ</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Giá</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Trạng thái</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-mono text-sm text-gray-600">#{booking.id.toString().padStart(4, '0')}</p>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      {booking.customerName}
                    </p>
                    <p className="text-sm text-gray-600">{booking.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {booking.court}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-700 flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />
                    {booking.date}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-700 flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    {booking.timeSlot}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium">{booking.price.toLocaleString('vi-VN')} đ</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[booking.status]}`}>
                    {statusLabels[booking.status]}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {booking.status === 'pending' && (
                      <>
                        <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors" title="Xác nhận">
                          <CheckCircle size={16} />
                        </button>
                        <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors" title="Hủy">
                          <XCircle size={16} />
                        </button>
                      </>
                    )}
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

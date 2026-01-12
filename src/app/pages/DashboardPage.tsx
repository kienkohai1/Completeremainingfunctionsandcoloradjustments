import { TrendingUp, Users, DollarSign, AlertCircle } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Sân tập',
      inUse: 8,
      available: 7,
      utilization: '67%',
      icon: <div className="text-3xl">🏸</div>,
    },
    {
      title: 'Vé đã bán',
      sold: 36,
      pending: 18,
      icon: <div className="text-3xl">🎫</div>,
    },
    {
      title: 'Doanh thu tháng',
      amount: '36.9 Triệu VNĐ',
      growth: '+3.6% so với tháng trước',
      icon: <DollarSign size={32} className="text-green-600" />,
    },
    {
      title: 'Yêu cầu thêm',
      processed: 36,
      pending: 18,
      icon: <AlertCircle size={32} className="text-orange-600" />,
    },
  ];

  const recentActivities = [
    { time: '10:30', event: 'Khách hàng Nguyễn Văn A đặt Sân 1', type: 'booking' },
    { time: '10:15', event: 'Hoàn thành yêu cầu bổ sung cho Sân 2', type: 'request' },
    { time: '09:45', event: 'Thanh toán 200,000đ cho vé #0123', type: 'payment' },
    { time: '09:30', event: 'Nhân viên Trần Thị B bắt đầu ca làm việc', type: 'staff' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-600 text-lg">Hệ thống quản lý sân tập</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-700">{stat.title}</h3>
              {stat.icon}
            </div>
            
            <div className="space-y-2">
              {stat.inUse !== undefined && (
                <>
                  <p className="text-gray-600">Đang dùng: <span className="font-semibold text-black">{stat.inUse}</span></p>
                  <p className="text-gray-600">Còn trống: <span className="font-semibold text-black">{stat.available}</span></p>
                  {stat.utilization && (
                    <p className="text-[#2370ff] text-sm mt-3">
                      Tỉ lệ lấp đầy trong ngày: {stat.utilization}
                    </p>
                  )}
                </>
              )}
              
              {stat.sold !== undefined && (
                <>
                  <p className="text-gray-600">Đã bán: <span className="font-semibold text-black">{stat.sold}</span></p>
                  <p className="text-gray-600">Chưa Checkin: <span className="font-semibold text-black">{stat.pending}</span></p>
                </>
              )}
              
              {stat.amount && (
                <>
                  <p className="text-2xl font-semibold text-black mb-2">{stat.amount}</p>
                  {stat.growth && (
                    <p className="text-[#2370ff] text-sm">{stat.growth}</p>
                  )}
                </>
              )}
              
              {stat.processed !== undefined && (
                <>
                  <p className="text-gray-600">Đã xử lý: <span className="font-semibold text-black">{stat.processed}</span></p>
                  <p className="text-gray-600">Chưa xử lý: <span className="font-semibold text-black">{stat.pending}</span></p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Hoạt động gần đây</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Xem tất cả
          </button>
        </div>
        
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 w-16 text-sm text-gray-500 font-medium">
                {activity.time}
              </div>
              <div className="flex-1">
                <p className="text-gray-700">{activity.event}</p>
              </div>
              <div>
                <span className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${activity.type === 'booking' ? 'bg-blue-100 text-blue-700' : ''}
                  ${activity.type === 'request' ? 'bg-green-100 text-green-700' : ''}
                  ${activity.type === 'payment' ? 'bg-purple-100 text-purple-700' : ''}
                  ${activity.type === 'staff' ? 'bg-orange-100 text-orange-700' : ''}
                `}>
                  {activity.type === 'booking' && 'Đặt sân'}
                  {activity.type === 'request' && 'Yêu cầu'}
                  {activity.type === 'payment' && 'Thanh toán'}
                  {activity.type === 'staff' && 'Nhân sự'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

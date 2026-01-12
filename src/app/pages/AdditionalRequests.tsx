import { Plus, MessageSquare, CheckCircle, Clock, XCircle } from 'lucide-react';

interface Request {
  id: number;
  customerName: string;
  court: string;
  requestType: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

const requests: Request[] = [
  { 
    id: 1, 
    customerName: 'Nguyễn Văn A', 
    court: 'Sân 1', 
    requestType: 'Dụng cụ tập', 
    description: 'Cần thêm 2 quả cầu lông', 
    status: 'pending', 
    createdAt: '10:30 - 12/01/2026',
    priority: 'high'
  },
  { 
    id: 2, 
    customerName: 'Trần Thị B', 
    court: 'Sân 2', 
    requestType: 'Nước uống', 
    description: 'Yêu cầu thêm 3 chai nước', 
    status: 'processing', 
    createdAt: '09:15 - 12/01/2026',
    priority: 'medium'
  },
  { 
    id: 3, 
    customerName: 'Lê Văn C', 
    court: 'Sân 4', 
    requestType: 'Sửa chữa', 
    description: 'Đèn sân bị hỏng', 
    status: 'completed', 
    createdAt: '08:45 - 12/01/2026',
    priority: 'high'
  },
  { 
    id: 4, 
    customerName: 'Phạm Thị D', 
    court: 'Sân 6', 
    requestType: 'Dụng cụ tập', 
    description: 'Cần thay vợt', 
    status: 'pending', 
    createdAt: '11:20 - 12/01/2026',
    priority: 'low'
  },
];

export default function AdditionalRequests() {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    pending: 'Chờ xử lý',
    processing: 'Đang xử lý',
    completed: 'Đã hoàn thành',
    rejected: 'Từ chối',
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };

  const priorityLabels = {
    low: 'Thấp',
    medium: 'Trung bình',
    high: 'Cao',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Yêu cầu thêm</h1>
        <p className="text-gray-600">Quản lý các yêu cầu bổ sung từ khách hàng</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Chờ xử lý</h3>
            <Clock className="text-yellow-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">
            {requests.filter(r => r.status === 'pending').length}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Đang xử lý</h3>
            <MessageSquare className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">
            {requests.filter(r => r.status === 'processing').length}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Đã xử lý</h3>
            <CheckCircle className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">36</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Tổng yêu cầu</h3>
            <MessageSquare className="text-gray-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">{36 + requests.length}</p>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Thêm yêu cầu mới
        </button>

        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Tất cả trạng thái</option>
            <option>Chờ xử lý</option>
            <option>Đang xử lý</option>
            <option>Đã hoàn thành</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Tất cả mức độ</option>
            <option>Cao</option>
            <option>Trung bình</option>
            <option>Thấp</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium">{request.requestType}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[request.status]}`}>
                    {statusLabels[request.status]}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${priorityColors[request.priority]}`}>
                    {priorityLabels[request.priority]}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{request.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>Khách hàng: <span className="font-medium text-gray-700">{request.customerName}</span></span>
                  <span>Sân: <span className="font-medium text-gray-700">{request.court}</span></span>
                  <span>Thời gian: <span className="font-medium text-gray-700">{request.createdAt}</span></span>
                </div>
              </div>
              
              {request.status === 'pending' && (
                <div className="flex gap-2 ml-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <MessageSquare size={16} />
                    Xử lý
                  </button>
                  <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-2">
                    <XCircle size={16} />
                    Từ chối
                  </button>
                </div>
              )}
              
              {request.status === 'processing' && (
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 ml-4">
                  <CheckCircle size={16} />
                  Hoàn thành
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Plus, ShoppingCart, Edit2, Trash2, Package } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Vợt cầu lông Yonex', category: 'Dụng cụ', price: 1200000, stock: 15, sold: 28, image: '🏸' },
  { id: 2, name: 'Giày cầu lông Victor', category: 'Giày dép', price: 850000, stock: 20, sold: 15, image: '👟' },
  { id: 3, name: 'Nước uống Aquafina', category: 'Nước uống', price: 10000, stock: 100, sold: 250, image: '💧' },
  { id: 4, name: 'Quả cầu lông', category: 'Dụng cụ', price: 120000, stock: 50, sold: 180, image: '🏸' },
  { id: 5, name: 'Khăn thể thao', category: 'Phụ kiện', price: 50000, stock: 30, sold: 45, image: '🧴' },
  { id: 6, name: 'Băng cổ tay', category: 'Phụ kiện', price: 30000, stock: 40, sold: 60, image: '🎽' },
];

export default function Shopping() {
  const totalRevenue = products.reduce((sum, p) => sum + (p.price * p.sold), 0);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalSold = products.reduce((sum, p) => sum + p.sold, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Mua sắm</h1>
        <p className="text-gray-600">Quản lý sản phẩm và dịch vụ bán tại sân</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Doanh thu bán hàng</h3>
            <ShoppingCart className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">{(totalRevenue / 1000000).toFixed(1)} Triệu</p>
          <p className="text-sm text-gray-500 mt-2">Tháng này</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Tồn kho</h3>
            <Package className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">{totalStock}</p>
          <p className="text-sm text-gray-500 mt-2">{products.length} sản phẩm</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Đã bán</h3>
            <ShoppingCart className="text-purple-600" size={24} />
          </div>
          <p className="text-3xl font-semibold">{totalSold}</p>
          <p className="text-sm text-gray-500 mt-2">Sản phẩm tháng này</p>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Thêm sản phẩm mới
        </button>

        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Tất cả danh mục</option>
            <option>Dụng cụ</option>
            <option>Giày dép</option>
            <option>Nước uống</option>
            <option>Phụ kiện</option>
          </select>
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Sản phẩm</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Danh mục</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Giá</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Tồn kho</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Đã bán</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Doanh thu</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {product.image}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">ID: #{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium">{product.price.toLocaleString('vi-VN')} đ</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.stock > 20 ? 'bg-green-500' : product.stock > 10 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    <p className={product.stock < 10 ? 'text-red-600 font-medium' : ''}>{product.stock}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-700">{product.sold}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-green-600">
                    {(product.price * product.sold / 1000).toLocaleString('vi-VN')}K
                  </p>
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

import React, { useState, useMemo } from 'react';
import { Plus, ShoppingCart, Edit2, Trash2, Package, Search, Target } from 'lucide-react';

// Định nghĩa kiểu dữ liệu cho sản phẩm bắn cung
interface ArcheryProduct {
  id: number;
  name: string;
  category: 'Cung' | 'Tên' | 'Phụ kiện' | 'Bảo hộ' | 'Nước uống';
  importPrice: number; // Giá nhập
  sellingPrice: number; // Giá bán
  stock: number;
  sold: number;
  unit: string;
}

const initialProducts: ArcheryProduct[] = [
  { id: 1, name: 'Cung trợ lực (Compound)', category: 'Cung', importPrice: 5000000, sellingPrice: 7500000, stock: 5, sold: 2, unit: 'Bộ' },
  { id: 2, name: 'Mũi tên Carbon 7mm', category: 'Tên', importPrice: 80000, sellingPrice: 150000, stock: 120, sold: 450, unit: 'Cây' },
  { id: 3, name: 'Bao tay bảo hộ', category: 'Bảo hộ', importPrice: 150000, sellingPrice: 250000, stock: 15, sold: 30, unit: 'Cái' },
  { id: 4, name: 'Tấm bia rơm 120cm', category: 'Phụ kiện', importPrice: 300000, sellingPrice: 500000, stock: 10, sold: 12, unit: 'Tấm' },
  { id: 5, name: 'Nước bù khoáng', category: 'Nước uống', importPrice: 8000, sellingPrice: 15000, stock: 100, sold: 320, unit: 'Chai' },
  { id: 6, name: 'Ống đựng tên', category: 'Phụ kiện', importPrice: 200000, sellingPrice: 350000, stock: 8, sold: 15, unit: 'Cái' },
];

export default function ArcheryManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Tất cả');

  // Tính toán các chỉ số
  const totalInvestment = initialProducts.reduce((sum, p) => sum + (p.importPrice * p.stock), 0);
  const totalRevenue = initialProducts.reduce((sum, p) => sum + (p.sellingPrice * p.sold), 0);
  const inventoryCount = initialProducts.reduce((sum, p) => sum + p.stock, 0);

  // Lọc sản phẩm theo tìm kiếm và danh mục
  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = categoryFilter === 'Tất cả' || p.category === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, categoryFilter]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Tiêu đề trang */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Target className="text-white" size={28} />
            </div>
            Quản Lý Kho Bắn Cung
          </h1>
          <p className="text-slate-500 mt-1">Hệ thống quản lý nhập hàng và thiết bị sân tập</p>
        </div>
        <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 font-medium">
          <Plus size={20} />
          Nhập hàng mới
        </button>
      </div>

      {/* Thẻ thống kê (Stats) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">Vốn tồn kho</h3>
            <Package className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{(totalInvestment / 1000000).toFixed(2)} Tr</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">Giá trị nhập</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">Doanh thu bán lẻ</h3>
            <ShoppingCart className="text-cyan-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{(totalRevenue / 1000000).toFixed(2)} Tr</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium px-2 py-0.5 bg-cyan-50 text-cyan-600 rounded-full">Tổng tiền thu</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">Tổng thiết bị</h3>
            <Target className="text-indigo-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{inventoryCount}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-medium px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">Sản phẩm trong kho</span>
          </div>
        </div>
      </div>

      {/* Bộ lọc & Tìm kiếm */}
      <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Tìm tên thiết bị, mã cung..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-slate-600 font-medium"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="Tất cả">Tất cả danh mục</option>
          <option value="Cung">Cung</option>
          <option value="Tên">Tên</option>
          <option value="Bảo hộ">Bảo hộ</option>
          <option value="Phụ kiện">Phụ kiện</option>
          <option value="Nước uống">Nước uống</option>
        </select>
      </div>

      {/* Bảng danh sách */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Thiết bị</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Phân loại</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Giá nhập</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Giá bán</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tồn kho</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Lợi nhuận</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-blue-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{product.name}</p>
                    <p className="text-xs text-slate-400 font-medium">ĐVT: {product.unit}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {product.importPrice.toLocaleString('vi-VN')}đ
                </td>
                <td className="px-6 py-4 text-sm font-bold text-blue-600">
                  {product.sellingPrice.toLocaleString('vi-VN')}đ
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                    <span className={`font-semibold ${product.stock <= 10 ? 'text-amber-600' : 'text-slate-700'}`}>
                      {product.stock}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-emerald-600">
                  +{((product.sellingPrice - product.importPrice) * product.sold / 1000).toLocaleString('vi-VN')}K
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredProducts.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-slate-400 font-medium">Không tìm thấy thiết bị nào phù hợp</p>
          </div>
        )}
      </div>
    </div>
  );
}
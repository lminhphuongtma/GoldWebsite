import React from 'react';

function PricingTable({ onRegisterClick }) {
  return (
    <section className="py-12 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#1A4FA3] mb-8">Bảng phí dịch vụ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'GOLD',
              subtitle: 'Phù hợp cho cửa hàng vàng nhỏ',
              price: '270.000',
              extra: 'Thêm 1 tài khoản: 10.000đ/tháng',
              features: [
                'Bảng giá Tivi',
                'In tem trang sức chuẩn thông tư 22',
                'Cầm vàng theo nghị định 144/2021/NĐ-CP lưu trữ thông tin khách cầm, hợp đồng',
                'Phân quyền nhân viên, tra cứu khoản vay, mất giấy, đóng lãi ',
                'Đồng bộ giá vàng các thiết bị',
                'Gợi ý giá cầm theo trọng lượng và loại vàng'
              ],
            },
            {
                title: 'PLATINUM',
              subtitle: 'Phù hợp cho cửa hàng vàng phát triển',
              price: '570.000',
              extra: 'Thêm 1 tài khoản: 20.000đ/tháng',
              features: [
                'Gồm các chức năng GOLD',
                'Mua/bán/đổi vàng, bạch kim',
                'Xuất hóa đơn điện tử của Viettel',
                'Tổng kết thu/chi theo từng nhân viên',
                'Đổi hàng linh động theo giá bù vàng',

              ],
            },
            {
              title: 'DIAMOND',
              subtitle: 'Phù hợp cho cửa hàng vàng cao cấp',
              price: '870.000',
              extra: 'Thêm 1 tài khoản: 30.000đ/tháng',
              features: [
                'Gồm các chức năng PLATINUM',
                'Mua/bán/đổi trực tuyến vàng, bạch kim, Kim Cương',
                'Hình ảnh sản phẩm bán ra rõ ràng',
                'Mở rộng thiết bị in từ xa',
                'Hỗ trợ 24/7'
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-[#E0ECF9] hover:border-[#1A4FA3] transition-colors duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-[#1A4FA3]">{plan.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{plan.subtitle}</p>
                <p className="text-4xl font-bold text-[#1A4FA3] mt-4">
                  {plan.price} <span className="text-base">đ</span>
                </p>
                <p className="text-sm text-gray-500">3 tài khoản/cửa hàng/tháng</p>
                <p className="text-sm text-gray-500 mt-1">{plan.extra}</p>
                <ul className="text-left text-gray-600 mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1A4FA3] text-lg mt-[2px]">✔</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  if (onRegisterClick) onRegisterClick(plan.title);
                }}
                className="mt-6 bg-[#1A4FA3] text-white px-4 py-2 rounded-lg hover:bg-[#163D83] transition-all"
              >
                Đăng ký ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
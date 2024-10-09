import { http, HttpResponse } from 'msw'
import config from 'src/constants/config'
import { access_token_1s } from './auth.msw'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '636f935e5fdc5f037e6f68d3',
    roles: ['User'],
    email: 'd3@gmail.com',
    createdAt: '2022-11-12T12:36:46.282Z',
    updatedAt: '2022-12-02T07:57:45.069Z',
    avatar: 'a59b50bf-511c-4603-ae90-3ccc63d373a9.png',
    name: 'Dư Thanh Được'
  }
}

const meRequest = http.get(`${config.baseUrl}me`, (info) => {
  const access_token = info.request.headers.get('authorization')
  if (access_token === access_token_1s) {
    return HttpResponse.json(
      {
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      },
      { status: HttpStatusCode.Unauthorized }
    )
  }

  return HttpResponse.json(meRes, { status: HttpStatusCode.Ok })
})

const purchasesRes = [
  {
    _id: '66c5526bd0ce7d04d57b9fa0',
    buy_count: 1,
    price: 37000,
    price_before_discount: 70000,
    status: -1,
    user: '66079a43a71a6c029dec2f21',
    product: {
      _id: '60ad04e32fb52902585972ad',
      images: [
        'https://api-ecom.duthanhduoc.com/images/a1c873c9-a1e3-477e-8a09-e9bd6e43b1cf.jpg',
        'https://api-ecom.duthanhduoc.com/images/a55c3d25-d976-4a13-9cb8-853d86ab5973.jpg',
        'https://api-ecom.duthanhduoc.com/images/f45a3ea7-96f8-46f4-852d-2b649e0e9683.jpg',
        'https://api-ecom.duthanhduoc.com/images/1ade3e4a-521d-479a-839b-9f376367a2e9.jpg',
        'https://api-ecom.duthanhduoc.com/images/40ac6bc7-c9dd-46f2-9abe-67ea984f1bf6.jpg',
        'https://api-ecom.duthanhduoc.com/images/f6bdd55e-954e-411e-b084-5addcb3bda16.jpg',
        'https://api-ecom.duthanhduoc.com/images/242b0379-269e-4f4f-a2da-3b1a3b6d52b8.jpg',
        'https://api-ecom.duthanhduoc.com/images/f56a0dfa-81de-49e5-b997-92c35627358d.jpg'
      ],
      price: 37000,
      rating: 4.95,
      price_before_discount: 70000,
      quantity: 724,
      sold: 75,
      view: 1818,
      name: 'Áo Cotton Nam Đông Xuân Cộc Tay Và Ba Lỗ ( Video+ Ảnh Thật )',
      description:
        "<p>Thương hiệu &aacute;o l&oacute;t nam nano cực k&igrave; nổi tiếng l&agrave;m h&agrave;i l&ograve;ng cả kh&aacute;ch kh&oacute; t&iacute;nh Nhất<br />&Aacute;o l&oacute;t đ&ocirc;ng xu&acirc;n chất liệu mỏng mềm, nhẹ, thấm h&uacute;t mồ h&ocirc;i. Đặc biệt sx theo c&ocirc;ng nghệ ti&ecirc;u chuẩn Nhật Bản n&ecirc;n ko bị chảy v&agrave; bai.như c&aacute;c loại &aacute;o đ&ocirc;ng xu&acirc;n kh&aacute;c <br />C&aacute;c bạn h&atilde;y sắm ngay cho anh x&atilde;', cho người y&ecirc;u hay cho bố th&acirc;n y&ecirc;u đi ạ. Một m&oacute;n qu&agrave; &yacute; nghĩa cho ng&agrave;y h&egrave; đỡ oi bức<br />Nh&agrave; e cam kết b&aacute;n h&agrave;ng chuẩn ạ<br />Sỉ ib gi&aacute; tốt <br />+ Size M: 45-55kg<br />+ Size L: 55-65kg<br />+ Size XL : 65-75kg<br />+ Size XXL : 75-85 kg<br />#&aacute;onam #&aacute;olot #nam #đ&ocirc;ngxu&acirc;n #gunze #balỗ #cổtr&ograve;n</p>",
      category: {
        _id: '60aba4e24efcc70f8892e1c6',
        name: 'Áo thun',
        __v: 0
      },
      image: 'https://api-ecom.duthanhduoc.com/images/a1c873c9-a1e3-477e-8a09-e9bd6e43b1cf.jpg',
      createdAt: '2021-05-25T14:08:35.273Z',
      updatedAt: '2024-10-09T15:36:38.110Z',
      __v: 0
    },
    createdAt: '2024-08-21T02:35:23.339Z',
    updatedAt: '2024-08-21T02:35:23.339Z',
    __v: 0
  },
  {
    _id: '66c5525fd0ce7d04d57b9f9f',
    buy_count: 1,
    price: 2130000,
    price_before_discount: 2690000,
    status: -1,
    user: '66079a43a71a6c029dec2f21',
    product: {
      _id: '60afb14d6ef5b902180aacb7',
      images: [
        'https://api-ecom.duthanhduoc.com/images/51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
        'https://api-ecom.duthanhduoc.com/images/32d2b004-6a6c-4605-af12-8f8f2e4f6aff.jpg',
        'https://api-ecom.duthanhduoc.com/images/00f74b87-0750-4cc9-9b91-24907a2b1721.jpg',
        'https://api-ecom.duthanhduoc.com/images/f08f305b-e237-444d-9f1e-430ce15acd96.jpg',
        'https://api-ecom.duthanhduoc.com/images/2442b133-7801-47a5-ae7d-5fc5196a1a51.jpg',
        'https://api-ecom.duthanhduoc.com/images/19a98c2f-3ab4-4d72-bbc9-3525fd89859c.jpg',
        'https://api-ecom.duthanhduoc.com/images/9123a99f-e71c-49e7-a87b-974541fcb607.jpg'
      ],
      price: 2130000,
      rating: 5,
      price_before_discount: 2690000,
      quantity: 269,
      sold: 5600,
      view: 11545,
      name: 'Điện Thoại Realme C11 (2GB/32GB) - Hàng Chính Hãng',
      description:
        '<p>Th&ocirc;ng số kĩ thuật<br />X&aacute;m Hạt Ti&ecirc;u - Xanh Bạc H&agrave;<br />M&agrave;n h&igrave;nh rộng<br />K&iacute;ch thước m&agrave;n h&igrave;nh 6.5<br />C&ocirc;ng nghệ m&agrave;n h&igrave;nh: Tấm nền m&agrave;n h&igrave;nh LCD<br />Độ ph&acirc;n giải: Độ ph&acirc;n giải m&agrave;n h&igrave;nh 1600*720, HD+, tỷ lệ hiển thị m&agrave;n h&igrave;nh l&ecirc;n đến 88%<br />M&agrave;u sắc của m&agrave;n h&igrave;nh 16.7 triệu m&agrave;u<br />Mặt k&iacute;nh cảm ứng: Loại k&iacute;nh cảm ứng Corning Gorilla Glass 3<br />Chụp ảnh<br />Camera sau: Camera ch&iacute;nh: 13MP f/2.2 Camera ch&acirc;n dung: 2MP f/2.4<br />Quay phim<br />Độ ph&acirc;n giải video quay phim Quay video 1080@30fps 720@30fps<br />Chụp ảnh n&acirc;ng cao<br />C&aacute;c t&iacute;nh năng chụp: Panorama, beauty AI 2.0, ch&acirc;n dung, chụp đ&ecirc;m, chuy&ecirc;n gia<br />Camera trước 5 MP, f/2.4<br />Đ&egrave;n Flash<br />T&iacute;nh năng chụp ảnh camera trước: <br />C&aacute;c t&iacute;nh năng chụp: L&agrave;m đẹp, Bộ lọc m&agrave;u, HDR, Selfie to&agrave;n cảnh, Ch&acirc;n dung, Timelapse, chụp h&igrave;nh bằng cử chỉ<br />Hệ điều h&agrave;nh: Realme UI 1.0<br />Loại CPU (Chipset) Helio G35 Cortex A53 8 nh&acirc;n 64 bit, xung nhịp l&ecirc;n đến 2.3 GHz<br />Tốc độ CPU: 8 nh&acirc;n, 2.3 GHz<br />Chip đồ hoạ: (GPU) GE8320<br />RAM: 2GB<br />Bộ nhớ trong: 32GB<br />Thẻ nhớ ngo&agrave;i Micro SD<br />Hỗ trợ thẻ tối đa 256GB</p><p>Loại SIM Dual-SIM (Nano SIM)<br />Hỗ trợ 4G <br />Chuẩn Wifi: 2.4GHz, 802.1.1b/g/n<br />Jack tai nghe 3.5mm<br />C&ocirc;̉ng k&ecirc;́t n&ocirc;́i/sạc: Kết nối với m&aacute;y t&iacute;nh qua cổng USB hoặc sạc cho m&aacute;y: Micro USB<br />Hỗ trợ kết nối kh&aacute;c: OTG<br />Thực thiện cuộc gọi: Quay số thủ c&ocirc;ng, Trợ l&yacute; Google<br />Thiết kế &amp; Trọng lượng <br />Thiết kế<br />Thiết kế m&aacute;y: Nguy&ecirc;n khối, Pin rời, Pin liền,... Nguy&ecirc;n khối<br />Chất liệu<br />Chất liệu được sử dụng để sản xuất vỏ m&aacute;y (nhựa, nh&ocirc;m....) Nhựa 3D cao cấp<br />K&iacute;ch thước<br />Đ&Uacute;NG CHUẨN (Đơn vị, dấu chấm, dấu c&aacute;ch): D&agrave;i 151.5 mm - Ngang 74.9 mm - D&agrave;y 8.1 mm164.4 x 75.9 x 9.1mm<br />Trọng lượng Khoảng 196g bao gồm Pin<br />Pin &amp; Dung lượng <br />Loại pin<br />T&ecirc;n h&atilde;ng v&agrave; t&ecirc;n pin: Li-po<br />Dung lượng pin 5000mAh<br />C&ocirc;ng nghệ pin<br />C&ocirc;ng nghệ pin đi k&egrave;m: Sạc nhanh, QuickCharge, VOOC, Tiết kiệm pin, Si&ecirc;u tiết kiệm pin,...5V2A, 10W, hỗ trợ sạc ngược với c&aacute;p OTG<br />Tiện &iacute;ch <br />Bảo mật n&acirc;ng cao<br />Bảo mật mở kho&aacute; m&aacute;y: Khu&ocirc;n mặt, Face ID, Mống mắt<br />Mở kho&aacute; nhận diện gương mặt trong 0,91s<br />T&iacute;nh năng đặc biệt<br />C&aacute;c chức năng kh&aacute;c của điện thoại: AOD, Sạc pin nhanh, Nh&acirc;n bản ứng dụng, Chặn cuộc gọi, Đ&egrave;n pin, kh&aacute;ng nước kh&aacute;ng bụi, chạm 2 lần mở kh&oacute;a...4G - LTE <br />Bluetooth 5.0 <br />C&ocirc;ng nghệ sạc ngược<br />Ghi &acirc;m m&ocirc;i trường: C&oacute; ứng dụng ghi &acirc;m mặc định tr&ecirc;n m&aacute;y v&agrave; c&oacute; mic chống ồn kh&ocirc;ng? C&oacute;<br />Ghi &acirc;m cuộc gọi C&oacute;<br />Xem phim: Định dạng phim hỗ trợ xem được: mp4, .3gp, .3g2, .3gpp, .3gpp2, .m4v , .mkv<br />Xem phim: L&ecirc;n đến 9 giờ li&ecirc;n tục<br />Nghe nhạc: Định dạng &acirc;m thanh hỗ trợ nghe được: MP3, Lossless, WAV,... AAC,HE-AAC v1, HE-AAC v2,AMR,AWB,MIDI,MP3,OGG VORBIS<br />Nghe nhạc: L&ecirc;n đến 40 giờ li&ecirc;n tục<br />Danh bạ: Bộ nhớ m&aacute;y chứa được tối đa bao nhi&ecirc;u số danh bạKh&ocirc;ng c&oacute; dữ liệu<br />Radio: C&oacute; ứng dụng radio FM mặc định tr&ecirc;n m&aacute;y kh&ocirc;ng? C&oacute; cần tai nghe để sử dụng Radio kh&ocirc;ng?: Kh&ocirc;ng<br />Bộ sản phẩm gồm: Sạc ,S&aacute;ch hướng dẫn ,Hộp, C&aacute;p sạc.</p><p>Th&ocirc;ng tin bảo h&agrave;nh<br />Sản phẩm được bảo h&agrave;nh 12 th&aacute;ng tại c&aacute;c trung t&acirc;m bảo h&agrave;nh Realme<br />1 đổi 1 trong 30 ng&agrave;y đầu sử dụng (Lỗi sản xuất).<br />Giao h&agrave;ng miễn ph&iacute; tr&ecirc;n to&agrave;n quốc.<br />Hotline: 1800 6067 (miễn ph&iacute;)</p>',
      category: {
        _id: '60afafe76ef5b902180aacb5',
        name: 'Điện thoại',
        __v: 0
      },
      image: 'https://api-ecom.duthanhduoc.com/images/51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
      createdAt: '2021-05-27T14:48:45.577Z',
      updatedAt: '2024-10-09T15:52:14.278Z',
      __v: 0
    },
    createdAt: '2024-08-21T02:35:11.368Z',
    updatedAt: '2024-08-21T02:35:11.368Z',
    __v: 0
  },
  {
    _id: '66c5523fd0ce7d04d57b9f9e',
    buy_count: 1,
    price: 3190000,
    price_before_discount: 3990000,
    status: -1,
    user: '66079a43a71a6c029dec2f21',
    product: {
      _id: '60afb2c76ef5b902180aacba',
      images: [
        'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
        'https://api-ecom.duthanhduoc.com/images/6c4f6bde-6242-40fd-be52-d06033636e04.jpg',
        'https://api-ecom.duthanhduoc.com/images/1385ed69-6843-4edb-a1fb-e5fc795a99e5.jpg',
        'https://api-ecom.duthanhduoc.com/images/7f4f7a5b-b003-462a-a6b9-c0e69175def3.jpg',
        'https://api-ecom.duthanhduoc.com/images/1c323bdd-c0ef-4538-b09d-34c1a4478baa.jpg',
        'https://api-ecom.duthanhduoc.com/images/5054f46f-d317-40f6-a804-6b22dc92e946.jpg',
        'https://api-ecom.duthanhduoc.com/images/eed30991-df2d-41b5-afb2-697a06ba3299.jpg',
        'https://api-ecom.duthanhduoc.com/images/2922fee1-448c-4302-bcc2-804e0fe44f84.jpg',
        'https://api-ecom.duthanhduoc.com/images/84f7bf91-685c-4be9-bd8c-1f0a4e2e21c3.jpg'
      ],
      price: 3190000,
      rating: 4.6,
      price_before_discount: 3990000,
      quantity: 138,
      sold: 1200,
      view: 125227,
      name: 'Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng',
      description:
        '<p>Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />Bộ sản phẩm bao gồm: Th&acirc;n m&aacute;y, sạc, c&aacute;p USB, tai nghe, ốp lưng, dụng cụ lấy sim, s&aacute;ch hướng dẫn sử dụng.</p><p>Chất sang chảnh, chuẩn m&agrave;n h&igrave;nh<br />M&agrave;n h&igrave;nh sống động 6.39 AMOLED tr&agrave;n viền<br />Camera Selfie trượt 16MP ấn tượng, đầy m&ecirc; hoặc<br />Bộ 3 Camera AI 48MP si&ecirc;u chụp b&oacute;ng đ&ecirc;m<br />Thiết kế mặt lưng tr&agrave;n &aacute;nh s&aacute;ng<br />Nổi bật trong đ&ecirc;m sắc m&agrave;u. Lấy cảm hứng từ sắc đ&ecirc;m huyền ảo, được chế t&aacute;c tinh xảo tạo n&ecirc;n mặt lưng 3D chuyển m&agrave;u khi tương t&aacute;c với &aacute;nh s&aacute;ng. Với 4 m&agrave;u sắc Xanh Sapphire, Xanh Lục Bảo, T&iacute;m Ngọc v&agrave; Đen Thạch Anh, sẽ khiến bạn trở bạn trở th&agrave;nh t&acirc;m điểm của sự ch&uacute; &yacute;<br />Thật ấn tượng với camera selfie sẽ tự động bật l&ecirc;n v&agrave; thu lại theo thao t&aacute;c chụp ảnh selfie c&ugrave;ng thuật to&aacute;n l&agrave;m đẹp AI Beauty, ảnh selfie cực k&igrave; th&uacute; vị<br />K&iacute;ch thước 66.25 x 75.62 x 8.83 (mm)<br />Trọng lượng 183 g<br />Camera trước 16MP f/2.2 Popup <br />Camera sau 48MP f/1.7 - Camera chụp đ&ecirc;m<br /> 8MP f/2.2 - Camera g&oacute;c rộng<br /> 2MP f/2.4 - Camera x&oacute;a ph&ocirc;ng <br />Độ ph&acirc;n giải FHD+ ( 1080 x 2340 )<br />Cổng USB USB Type-C<br />Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng</p><p>Cảm ơn qu&yacute; kh&aacute;ch đ&atilde; quan t&acirc;m đến sản phẩm b&ecirc;n shop, qu&yacute; kh&aacute;ch vui l&ograve;ng d&agrave;nh &iacute;t thời gian đọc kĩ ch&iacute;nh s&aacute;ch bảo h&agrave;nh đổi trả:<br />- Sản phẩm được bao test 7 ng&agrave;y kể từ ng&agrave;y nhận được sản phẩm v&agrave; sẽ được đổi m&aacute;y mới c&ugrave;ng model hoặc gi&aacute; trị tương đương sau khi được thẩm định lỗi kĩ thuật.<br />- Sản phẩm lỗi kĩ thuật được x&aacute;c nhận bởi trung t&acirc;m bảo h&agrave;nh ủy quyền ch&iacute;nh h&atilde;ng (bằng văn bản); kh&aacute;ch h&agrave;ng c&oacute; thể gửi lại shop để x&aacute;c nhận lỗi hoặc tới trạm bảo h&agrave;nh gần nhất để thẩm định lỗi.<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hiện trạng m&aacute;y kh&ocirc;ng trầy xước, kh&ocirc;ng bể vỡ, v&ocirc; nước, g&atilde;y ch&acirc;n sim, khung thẻ nhớ&hellip; (tất cả c&aacute;c t&aacute;c động ngoại lực từ ph&iacute;a kh&aacute;ch h&agrave;ng đều TỪ CHỐI BẢO H&Agrave;NH)<br />- Sản phẩm đổi trả phải c&ograve;n nguy&ecirc;n hộp tr&ugrave;ng imei, phụ kiện k&egrave;m theo m&aacute;y kh&ocirc;ng trầy xước, ch&aacute;y nổ, đứt d&acirc;y (nếu trầy xước shop kh&ocirc;ng đổi phụ kiện mới)<br />- Sau 7 ng&agrave;y bao test, sản phẩm vẫn nhận ch&iacute;nh s&aacute;ch bảo h&agrave;nh 18 th&aacute;ng kể từ ng&agrave;y k&iacute;ch hoạt bảo h&agrave;nh (kh&aacute;ch chịu ph&iacute; vận chuyển tới shop bảo h&agrave;nh hộ hoặc tự đến trung t&acirc;m bảo h&agrave;nh gần nhất để được hỗ trợ)<br />- Trong một số trường hợp sản phẩm đ&atilde; được k&iacute;ch hoạt bảo h&agrave;nh điện tử để tham gia chương tr&igrave;nh khuyến m&atilde;i c&oacute; gi&aacute; tốt cho kh&aacute;ch h&agrave;ng. Vui l&ograve;ng chat với nh&acirc;n vi&ecirc;n tư vấn để được hỗ trợ th&ecirc;m th&ocirc;ng tin.<br />- Sản phẩm bị TỪ CHỐI BẢO H&Agrave;NH khi ch&aacute;y nổ, bể vỡ, t&aacute;c động ngoại lực v&agrave;o th&acirc;n v&agrave; b&ecirc;n trong m&aacute;y, c&oacute; thay đổi sửa chữa b&ecirc;n ngo&agrave;i.<br />- C&aacute;c sản phẩm bị kh&oacute;a t&agrave;i khoản như Gmail, Samsung account&hellip; Kh&aacute;ch tự chịu ph&iacute; mở kh&oacute;a nếu kh&ocirc;ng nhớ mật khẩu.<br />Điện Thoại Vsmart Active 3 6GB/64GB - H&agrave;ng Ch&iacute;nh H&atilde;ng<br />#điện_thoại #dienthoai #di_động #didong #điện_thoại_di_động #dien_thoai_di_dong #điện_thoại_ch&iacute;nh_h&atilde;ng #h&agrave;ng_ch&iacute;nh_h&atilde;ng #điện_thoại_gi&aacute;_rẻ #dien_thoai_gia_re #gi&aacute; rẻ #khuyen_mai #freeship #mobile #smartphone #điện_thoại_vsmart #vsmart #vsmart_ active_3</p>',
      category: {
        _id: '60afafe76ef5b902180aacb5',
        name: 'Điện thoại',
        __v: 0
      },
      image: 'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
      createdAt: '2021-05-27T14:55:03.113Z',
      updatedAt: '2024-10-09T16:22:39.915Z',
      __v: 0
    },
    createdAt: '2024-08-21T02:34:39.810Z',
    updatedAt: '2024-08-21T02:34:49.721Z',
    __v: 0
  }
]

const purchasesRequest = http.get(`${config.baseUrl}purchases?status=-1`, () =>
  HttpResponse.json(purchasesRes, { status: HttpStatusCode.Ok })
)

const userRequests = [meRequest, purchasesRequest]

export default userRequests

# 1. Folder Structure:
- public: chứa HTML file của website và là nơi chỉ ra id root để render App vào đây 
- src:
  + apis: chứa các thông tin và các phương thức để lấy dữ liệu từ API
  + assets: chứa các static file
    + css: style dùng chung cho cả chương trình
    + images: hình ảnh dùng cho cho cả chương trình
    + fonts: phông dùng chung cho cả chương trình  
  + components: chứa các component được dùng lại nhiều lần
  + constants: chứa các biến constants
  + hooks: chứa các custom hook
  + redux:
    + reducers: các slice của root reducer chia theo từng page 
    + selectors: các selector cho các reducer trên
    + store.js: kho chung
  + routes: chứa các endpoint của client
  + screens: UI và logic của các trang trong website
  + styles: chứa các config chung của scss
  + theme: chủ đề của giao diện
  + utils: chưa các tính năng thêm
  + App.js: component này là nơi tổng hợp các trang chia theo route tương ứng
  + index.js: render component App và element có id là root
      


# 2. Host: 
-   Client: https://splendid-client-xi.vercel.app/

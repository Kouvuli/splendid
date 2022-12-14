# Đồ án cá nhân: Splendid

## 1. Mô tả
Diễn đàn trực tuyến xem thông tin phim hoạt hình, truyện tranh Nhật Bản


## 2. Thành viên

| Name             | ID       |
| ---------------- | -------- |
| Lê Đức Tâm       | 19120644 |


## 3. Hướng dẫn chạy chương trình

### Chạy website client (port: 3000):

-   Ở thư mục gốc, chạy lệnh:
    `cd client && npm i && npm start`
-   Tài khoản đăng nhập:
    -   Username: godofwar
    -   Password: 1234

### Database (PostgreSQL):
-   Vào trong thư mục server
-   Đổi theo thông tin sau trong thư mục /server/src/main/resources/application.properties tương ứng(Nếu vẫn chưa cập nhật thông tin credential).

| Name     | Database Credential                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host     | containers-us-west-169.railway.app                                                                                                                       |
| Database | railway                                                                                                                                                  | 
| User     | postgres                                                                                                                                                 |
| Port     | 7332                                                                                                                                                     | 
| Password | wzI3EA4GGwCSiYJsdBE8

## 4. Deploy endpoints:
-   Client: https://splendid-client-xi.vercel.app
-   Server: https://splendid-production.up.railway.app

## 5. API Documentations:
-   Sử dụng 2 API: Jikan API, Splendid API.
-   Jinkan API dùng để lấy dữ liệu thông tin các Anime, Manga từ myanimelist.net.
-   Splendid API dùng để quản lý người dùng và các thông tin blog, comment,...
-   Xem thêm ở file README.md trong ./server.


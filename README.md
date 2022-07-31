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
-   Đổi theo thông tin sau trong thư mục /resource/.application.json tương ứng(Nếu vẫn chưa cập nhật thông tin credential).

| Name     | Database Credential                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host     | ec2-52-22-136-117.compute-1.amazonaws.com                                                                                                                |
| Database | d79eaot5g8kepb                                                                                                                                           | 
| User     | uhktxkcnjqsfcy                                                                                                                                           |
| Port     | 5432                                                                                                                                                     | 
| Password | afbd21c5aac9f19ed81b814466bebea1f6f06a26213a85397156d231439e4a18

## 4. Deploy endpoints:
-   Client: https://splendid-client-xi.vercel.app
-   Server: https://splendid-app-server.herokuapp.com/api/v1

## 5. API Documentations:
-   Anime info API (Jikan API v4): [Watch here](https://docs.api.jikan.moe/)
-   Splendid API : [Watch here](https://documenter.getpostman.com/view/17594467/UzR1K2eW) 


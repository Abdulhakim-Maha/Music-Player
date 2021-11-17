# Music-Player

Data Structure Project with React.js and FastAPI

## การติดตั้ง

ดาวน์โหลด Node.js ลงเครื่องก่อน โดยไปที่ https://nodejs.org/en/ ดาวน์โหลดแล้วติดตั้ง
จากนั้นดาวน์โหลดโปรเจ็คลงเครื่องหรือ clone ให้เรียบร้อย

### React Installation

เปิดโปรเจ็คแล้วเปิด terminal เข้าไปโฟลเดอร์ client 

```
cd client
```
หลังจากที่เข้าไปที่โฟลเดอร์ client แล้วให้พิมพ์คำสั่งด้านล่างนี้
```
npm install
```

### FastAPI Installation
เปิด terminal อีกอันนึงแล้วเข้าไปที่โฟลเดอร์ server

```
cd server
```

หลังจากที่เข้าไปที่โฟลเคอร์ server แล้วให้พิมพ์คำสั่งด้านล่างนี้
#### ติดตั้ง fastAPI
```
pip install fastAPI
```
#### ติดตั้งตัวจำลอง server
``` 
pip install uvicorn
```

เสร็จขั้นตอนการติดตั้ง

## วิธีการรัน

### terminal ที่อยู่โฟลเดอร์ server

ให้พิมพ์คำสั่ง

```
uvicorn main:app --reload
```

### terminal ที่อยู่โฟลเดอร์ client

ให้พิมพ์คำสั่ง

```
npm start
```

เป็นอันเสร็จเรียบร้อบแล้ว





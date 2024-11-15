# **fashionHub**

## **Proje Açıklaması**

Bu proje, kullanıcıların farklı rollerle etkileşimde bulunabildiği, kullanıcı arayüzü (frontend), yönetim paneli (admin), ve API servisi (backend) olmak üzere üç ana bileşene sahip bir web eccommerce uygulamasıdır.

## **Önizleme**

<img src="./images.gif" alt="" >

## **Proje Yapısı**

Proje üç ana klasöre ayrılmıştır:

- **admin/**: Yönetici panelini içerir.
- **frontend/**: Kullanıcı arayüzünü içerir.
- **backend/**: API servisi ve veritabanı işlemlerini içerir.

## **Özellikler**

### **Admin Paneli**

- Kullanıcı yönetimi (CRUD işlemleri)
- Ürün ve sipariş yönetimi
- Raporlama ve analiz

### **Frontend**

- Kullanıcı girişi/kayıt işlemleri
- Ürün listeleme ve arama
- Sepet ve ödeme işlemleri

### **Backend**

- RESTful API
- Veritabanı yönetimi
- Ödeme sistemleri entegrasyonu

## **Kurulum**

### **1. Depoyu Klonlama**

```bash
git clone https://github.com/username/project-name.git
cd project-name
```

### 2. Gerekli Bağımlılıkların Kurulumu

Admin:  
`cd admin`  
`npm install`

Frontend:  
`cd ../frontend`  
`npm install`

Backend:  
`cd ../backend`  
`npm install`

### 3. Ortam Dosyalarının Ayarlanması

Her klasör için `.env` dosyası oluşturmanız gerekmektedir. Örnek `.env.example` dosyasına bakarak ayarları yapabilirsiniz.

Admin:  
`cp admin/.env.example admin/.env`

Frontend:  
`cp frontend/.env.example frontend/.env`

Backend:  
`cp backend/.env.example backend/.env`

`.env` dosyalarını doldururken aşağıdaki bilgileri eklemeyi unutmayın:

- API bağlantıları
- Veritabanı bilgileri
- Ödeme entegrasyonu anahtarları

## **Çalıştırma**

Admin:  
`cd admin`  
`npm start`  
Admin paneline şu adresten ulaşabilirsiniz:  
http://localhost:3000

Frontend:  
`cd frontend`  
`npm start`  
Kullanıcı arayüzüne şu adresten ulaşabilirsiniz:  
http://localhost:3001

Backend:  
`cd backend`  
`npm start`  
API servisi şu adreste çalışır:  
http://localhost:5000

## **Komutlar**

### Test Çalıştırma

Admin, frontend ve backend için testleri çalıştırabilirsiniz:  
`npm test`

### Üretim Ortamı İçin Derleme

Admin ve frontend için:  
`npm run build`

## **Teknolojiler**

- Admin & Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- Ödeme Entegrasyonu: Stripe, Razorpay

## **Proje Geliştiricileri**

- Frontend Developer: [Adınız]
- Backend Developer: [Adınız]
- Admin Panel Developer: [Adınız]

## **Katkıda Bulunma**

1. Projeyi forklayın.
2. Yeni bir branch oluşturun:  
   `git checkout -b feature/ozellik-adi`
3. Değişikliklerinizi yapın ve commit atın:  
   `git commit -m "Yeni özellik eklendi."`
4. Branch'i push edin:  
   `git push origin feature/ozellik-adi`
5. Bir Pull Request oluşturun.

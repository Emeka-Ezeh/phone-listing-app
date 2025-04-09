
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



let phoneListings = [
    {id:1, brand: 'Google', model: 'Google pixel', imageurl:'https://miro.medium.com/v2/resize:fit:1200/1*MqtpaibUKnFCh0HpA3t7tQ.jpeg',number: '123-456-7890', category: 'elettronics'},
    {id:2, brand: 'Apple', model: 'iPhone 12', imageurl:'https://d1eh9yux7w8iql.cloudfront.net/product_images/None_649974ba-7b04-48b3-8fd8-9fa54597ae68.jpg', number: '987-654-3210', category: 'elettronics'},
    {id:3, brand: 'Samsung', model: 'Galaxy S21', imageurl:'https://cdn.mos.cms.futurecdn.net/RJ5nuSLthP386djPzyvqwX.jpg', number: '098-765-4321', category: 'elettronics'},
    {id:4, brand: 'Huawei', model: 'P40 Pro', imageurl:'https://cdn.wccftech.com/wp-content/uploads/2020/01/P40-Pro.jpg', number: '555-666-7778', category: 'elettronics'},
    {id:5, brand: 'Xiaomi', model: 'Mi 11', imageurl:'https://th.bing.com/th/id/R.27e9d9dceeee2cf22d61f5c26cab1eca?rik=pjCz5R1wqXujbg&pid=ImgRaw&r=0', number: '222-333-4444', category: 'elettronics'},
    {id:6, brand: 'OnePlus', model: '8T Pro', imageurl:'https://www.techyloud.com/wp-content/uploads/2020/08/OnePlus-8T.png', number: '333-444-5555', category: 'elettronics'},
    {id:7, brand: 'Oppo', model: 'A53', imageurl:'https://www.movilzona.es/app/uploads/2020/12/OPPO-A53-2-1.jpg', number: '444-555-6666', category: 'elettronics'},
    {id:8, brand: 'Asus', model: 'Zenfone 6', imageurl:'https://www.deepspecs.com/wp-content/uploads/2019/05/5-asus-zenfone-6-zs630-kl-deepspecs-com.jpg', number: '555-666-7777', category: 'elettronics'},
    {id:9, brand: 'Google', model: 'Pixel 4', imageurl:'https://img.tuttoandroid.net/wp-content/uploads/2020/09/Eir8KvGX0AA8ntx.png', number: '666-777-8888', category: 'elettronics'},
    {id:10, brand: 'Samsung', model: 'S20', imageurl:'https://th.bing.com/th/id/R.b79867a1dc38cb9a64aff3bcb8b184ac?rik=Z5XrXpwQ6EBsKw&pid=ImgRaw&r=0', number: '777-888-9999', category: 'elettronics'},
    {id:11, brand: 'Huawei', model: 'P40', imageurl:'https://th.bing.com/th/id/OIP.-WRXzyAajFv_NIghPf0brwHaFh?rs=1&pid=ImgDetMain', number: '888-999-0000', category: 'elettronics'},
    {id:12, brand: 'Xiaomi', model: 'Mi 10', imageurl:'https://images.frandroid.com/wp-content/uploads/2020/02/xiaomimi-10-pro.jpg', number: '999-000-1111', category: 'elettronics'},
    {id:13, brand: 'OnePlus', model: '8', imageurl:'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-1.jpg', number: '000-111-2222', cathegory: 'elettronics'},
    {id:14, brand: 'Oppo', model: 'A5', imageurl:'https://images-na.ssl-images-amazon.com/images/I/71bmeKzb9HL._AC_SL1500_.jpg', number: '111-222-3333', category: 'elettronics'},
    {id:15, brand: 'Asus', model: 'Zenfone 5', imageurl:'https://fdn2.gsmarena.com/vv/pics/asus/asus-zenfone-5-ze620kl-5z-zs620kl-1.jpg', number: '222-333-4444', category: 'elettronics'},
    {id:16, brand: 'nokia', model: 'nokia lumia', imageurl:'https://th.bing.com/th/id/OIP.F5aCI_Ldlt8PCTQJCVGE4QHaE8?rs=1&pid=ImgDetMain', number:'555-666-8888', category: 'elettronics'},
    {id:17, brand: 'Samsung', model: 'Galaxy S22 Ultra', imageurl:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/S22_Ultra_Greeen_Untitled.png', number:'555-666-8888', cathegory: 'elettronics'},
    {id:18, brand: 'OnePlus', model: '8 Pro', imageurl:'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-pro-1.jpg', number:'666-888-9999', category: 'elettronics'},
    {id:19, brand: 'Google', model: 'Pixel 5', imageurl:'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/styles/xxlarge/public/2021-12/PBI%20Google%20Pixel%205A.png', number:'777-888-9999', category: 'elettronics'},
    {id:20, brand: 'Samsung', model: 'Galaxy S22', imageurl:'https://fscl01.fonpit.de/devices/23/2223.png', number:'777-888-9999', category: 'elettronics'},
    
      {
        id: 22,
        brand: "Apple",
        model: "iPhone 15 Pro",
        imageurl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096",
        number: "111-222-3333",
        category: "electronics",
        price: 999,
        releaseYear: 2023,
        operatingSystem: "iOS 17",
        storageCapacity: ["128GB", "256GB", "512GB", "1TB"],
        ram: "8GB",
        screenSize: 6.1,
        batteryCapacity: 3274,
        processor: "A17 Pro",
        colorOptions: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        rating: 4.8,
        connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
        weight: 187
      },
      {
        id: 23,
        brand: "Google",
      model: "Pixel 8 Pro",
        imageurl: "https://onecms-res.cloudinary.com/image/upload/v1696589279/mediacorp/8days/image/2023/10/06/03_google_pixel_8_pro_porcelain_bay_obsidian.jpg",
        number: "222-333-4444",
        category: "electronics",
        price: 999,
        releaseYear: 2023,
        operatingSystem: "Android 14",
        storageCapacity: ["128GB", "256GB", "512GB"],
        ram: "12GB",
        screenSize: 6.7,
        batteryCapacity: 5050,
        processor: "Google Tensor G3",
        colorOptions: ["Obsidian", "Porcelain", "Bay"],
        rating: 4.6,
        connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
        weight: 213
      },
      {
        id: 24,
        brand: "Xiaomi",
        model: "13 Ultra",
        imageurl: "https://fdn.gsmarena.com/imgroot/reviews/23/xiaomi-13-ultra/inline/-1200/gsmarena_001.jpg",
        number: "333-444-5555",
        category: "electronics",
        price: 1299,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["256GB", "512GB", "1TB"],
        ram: "12GB/16GB",
        screenSize: 6.73,
        batteryCapacity: 5000,
        processor: "Snapdragon 8 Gen 2",
        colorOptions: ["Black", "Green", "White"],
        rating: 4.7,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC", "Infrared"],
        weight: 227
      },
      {
        id: 25,
        brand: "Samsung",
        model: "Galaxy S23 Ultra",
        imageurl: "https://images.samsung.com/is/image/samsung/assets/th/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
        number: "444-555-6666",
        category: "electronics",
        price: 1199,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["256GB", "512GB", "1TB"],
        ram: "12GB",
        screenSize: 6.8,
        batteryCapacity: 5000,
        processor: "Snapdragon 8 Gen 2",
        colorOptions: ["Phantom Black", "Green", "Lavender", "Cream"],
        rating: 4.8,
        connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
        weight: 234
      },
      {
        id: 26,
        brand: "Apple",
        model: "iPhone 14",
        imageurl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027208726",
        number: "555-666-7777",
        category: "electronics",
        price: 799,
        releaseYear: 2022,
        operatingSystem: "iOS 16",
        storageCapacity: ["128GB", "256GB", "512GB"],
        ram: "6GB",
        screenSize: 6.1,
        batteryCapacity: 3279,
        processor: "A15 Bionic",
        colorOptions: ["Midnight", "Purple", "Starlight", "Blue", "Red"],
        rating: 4.6,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"],
        weight: 172
      },
      {
        id: 27,
        brand: "Google",
        model: "Pixel 7a",
        imageurl: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2023/04/google-pixel-7a-leaked-press-image-in-grey.jpg",
        number: "666-777-8888",
        category: "electronics",
        price: 499,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["128GB"],
        ram: "8GB",
        screenSize: 6.1,
        batteryCapacity: 4385,
        processor: "Google Tensor G2",
        colorOptions: ["Charcoal", "Snow", "Sea", "Coral"],
        rating: 4.4,
        connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"],
        weight: 193
      },
      {
        id: 28,
        brand: "Xiaomi",
        model: "12T Pro",
        imageurl: "https://imgs.hipertextual.com/wp-content/uploads/2022/10/xiaomi-12-t-pro-001.jpg",
        number: "777-888-9999",
        category: "electronics",
        price: 749,
        releaseYear: 2022,
        operatingSystem: "Android 12",
        storageCapacity: ["128GB", "256GB"],
        ram: "8GB/12GB",
        screenSize: 6.67,
        batteryCapacity: 5000,
        processor: "Snapdragon 8+ Gen 1",
        colorOptions: ["Black", "Blue", "Silver"],
        rating: 4.5,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC", "Infrared"],
        weight: 205
      },
      {
        id: 29,
        brand: "Samsung",
        model: "Galaxy Z Flip5",
        imageurl: "https://citynomads.com/wp-content/uploads/2023/10/Samsung-Galaxy-Z-Flip5-Header.png",
      number: "888-999-0000",
        category: "electronics",
        price: 999,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["256GB", "512GB"],
        ram: "8GB",
        screenSize: 6.7,
        batteryCapacity: 3700,
        processor: "Snapdragon 8 Gen 2",
        colorOptions: ["Mint", "Graphite", "Cream", "Lavender", "Gray"],
        rating: 4.3,
        connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"],
        weight: 187
      },
      {
        id: 30,
        brand: "Apple",
        model: "iPhone SE (2022)",
        imageurl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656648332708",
        number: "999-000-1111",
        category: "electronics",
        price: 429,
        releaseYear: 2022,
        operatingSystem: "iOS 15",
        storageCapacity: ["64GB", "128GB", "256GB"],
        ram: "4GB",
        screenSize: 4.7,
        batteryCapacity: 2018,
        processor: "A15 Bionic",
        colorOptions: ["Midnight", "Starlight", "Red"],
        rating: 4.2,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
        weight: 144
      },
      {
        id: 31,
        brand: "Google",
        model: "Pixel Fold",
        imageurl: "https://cdn.mos.cms.futurecdn.net/YsiuahP9uxqcTwzJubBS3A.jpg",
        number: "000-111-2222",
        category: "electronics",
        price: 1799,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["256GB", "512GB"],
        ram: "12GB",
        screenSize: 7.6,
        batteryCapacity: 4821,
        processor: "Google Tensor G2",
        colorOptions: ["Obsidian", "Porcelain"],
        rating: 4.3,
        connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.2", "NFC"],
        weight: 283
      },
      {
        id: 32,
        brand: "Xiaomi",
        model: "Redmi Note 12 Pro",
        imageurl: "https://cdnx.jumpseller.com/ponto24business/image/30676622/resize/1200/1200?1672857207",
        number: "123-456-7890",
        category: "electronics",
        price: 299,
        releaseYear: 2022,
        operatingSystem: "Android 12",
        storageCapacity: ["128GB", "256GB"],
        ram: "6GB/8GB",
        screenSize: 6.67,
        batteryCapacity: 5000,
        processor: "MediaTek Dimensity 1080",
        colorOptions: ["Onyx Gray", "Ice Blue", "Forest Green"],
        rating: 4.4,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
        weight: 187
      },
      {
        id: 33,
        brand: "Samsung",
        model: "Galaxy A54",
        imageurl: "https://img.global.news.samsung.com/in/wp-content/uploads/2023/03/A54-A34-creative.jpg",
        number: "234-567-8901",
        category: "electronics",
        price: 449,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["128GB", "256GB"],
        ram: "6GB/8GB",
        screenSize: 6.4,
        batteryCapacity: 5000,
        processor: "Exynos 1380",
        colorOptions: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Lime"],
        rating: 4.5,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"],
        weight: 202
      },
      {
        id: 34,
        brand: "Apple",
        model: "iPhone 13 mini",
        imageurl: "https://mediashop2.com/wp-content/uploads/2022/10/iphone-13-mini-family-select-2.webp",
        number: "345-678-9012",
        category: "electronics",
        price: 599,
        releaseYear: 2021,
        operatingSystem: "iOS 15",
        storageCapacity: ["128GB", "256GB", "512GB"],
        ram: "4GB",
        screenSize: 5.4,
        batteryCapacity: 2406,
        processor: "A15 Bionic",
        colorOptions: ["Pink", "Blue", "Midnight", "Starlight", "Green", "Red"],
        rating: 4.7,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
        weight: 140
      },
      {
        id: 35,
        brand: "Google",
        model: "Pixel 6a",
        imageurl: "https://futurewithtech.com/wp-content/uploads/2022/07/Google-Pixel-6a.jpg",
        number: "456-789-0123",
        category: "electronics",
        price: 349,
        releaseYear: 2022,
        operatingSystem: "Android 12",
        storageCapacity: ["128GB"],
        ram: "6GB",
        screenSize: 6.1,
        batteryCapacity: 4410,
        processor: "Google Tensor",
        colorOptions: ["Chalk", "Charcoal", "Sage"],
        rating: 4.5,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
        weight: 178
      },
      {
        id :36,
        brand: "Xiaomi",
        model: "POCO F5",
        imageurl: "https://th.bing.com/th/id/R.16b543c81f35572bca79b82418a73160?rik=agV9Tc83mvvFXg&pid=ImgRaw&r=0",
        number: "567-890-1234",
        category: "electronics",
        price: 379,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["128GB", "256GB"],
        ram: "8GB/12GB",
        screenSize: 6.67,
        batteryCapacity: 5000,
        processor: "Snapdragon 7+ Gen 2",
        colorOptions: ["Black", "Blue", "White"],
        rating: 4.6,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"],
        weight: 181
      },
      {
        id: 37,
        brand: "Samsung",
        model: "Galaxy Z Fold5",
        imageurl: "https://images.samsung.com/in/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-kv-a.jpg?imbypass=true",
        number: "678-901-2345",
        category: "electronics",
        price: 1799,
        releaseYear: 2023,
        operatingSystem: "Android 13",
        storageCapacity: ["256GB", "512GB", "1TB"],
        ram: "12GB",
        screenSize: 7.6,
        batteryCapacity: 4400,
        processor: "Snapdragon 8 Gen 2",
        colorOptions: ["Icy Blue", "Phantom Black", "Cream", "Gray", "Blue"],
        rating: 4.4,
        connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
        weight: 253
      },
      {
        id: 38,
        brand: "Apple",
        model: "iPhone 12",
        imageurl: "https://assets-prd.ignimgs.com/2020/10/13/screen-shot-2020-10-13-at-2-03-33-pm-1602612536531.JPG",
        number: "789-012-3456",
        category: "electronics",
        price: 699,
        releaseYear: 2020,
        operatingSystem: "iOS 14",
        storageCapacity: ["64GB", "128GB", "256GB"],
        ram: "4GB",
        screenSize: 6.1,
        batteryCapacity: 2815,
        processor: "A14 Bionic",
        colorOptions: ["Black", "White", "Red", "Green", "Blue", "Purple"],
        rating: 4.6,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
        weight: 164
      },
      {
        id: 39,
        brand: "Google",
        model: "Pixel 5a",
        imageurl: "https://p.turbosquid.com/ts-thumb/jA/ydz2cn/7e/1200/jpg/1682931905/600x600/fit_q87/94d3944bb27c5f828acca21d491cf998286d39dc/1200.jpg",
        number: "890-123-4567",
        category: "electronics",
        price: 449,
        releaseYear: 2021,
        operatingSystem: "Android 11",
        storageCapacity: ["128GB"],
        ram: "6GB",
        screenSize: 6.34,
        batteryCapacity: 4680,
        processor: "Snapdragon 765G",
        colorOptions: ["Mostly Black"],
        rating: 4.3,
        connectivity: ["5G", "Wi-Fi 5", "Bluetooth 5.0", "NFC"],
        weight: 183
      },
      {
        id: 40,
        brand: "Xiaomi",
        model: "Black Shark 5 Pro",
        imageurl: "https://www.notebookcheck.nl/fileadmin/_processed_/5/a/csm_BS5_Two_colors_6ce410d6b2.jpg",
        number: "901-234-5678",
        category: "electronics",
        price: 799,
        releaseYear: 2022,
        operatingSystem: "Android 12",
        storageCapacity: ["256GB", "512GB"],
        ram: "8GB/12GB/16GB",
        screenSize: 6.67,
        batteryCapacity: 4650,
        processor: "Snapdragon 8 Gen 1",
        colorOptions: ["Black", "White"],
      rating: 4.7,
        connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
        weight: 220
      }
    
    

];


// Search endpoint
app.get('/search', (req, res) => {
  const query = req.query.q ? req.query.q.toString().toLowerCase() : '';
  console.log('Searching for: ', query);

  if(!query) {
    return res.json(phoneListings);
  }

  const results = phoneListings.filter(phone => 
    phone.brand.toLowerCase().includes(query) || 
    phone.model.toLowerCase().includes(query)
  );
  console.log('Found results: ', results.length);
  res.json(results);
});

// Get all phones
app.get('/phoneListings', (req, res) => {
  res.json(phoneListings);
});

// Get single phone
app.get('/phoneListings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phoneListings.find(p => p.id === id);
  if (!phone) return res.status(404).json({ error: 'Phone not found' });
  res.json(phone);
});

// Create new phone
app.post('/phoneListings', (req, res) => {
  const { brand, model, imageurl, number, category } = req.body;
  if (!brand || !model || !imageurl || !number || !category) {
    return res.status(400).json({ error: 'Invalid phone data' });
  }
  
  const newPhone = {
    id: phoneListings.length + 1,
    brand,
    model,
    imageurl,
    number,
    category,
    price,
    releaseYear,
    operatingSystem,
    storageCapacity,
    ram
  };

  phoneListings.push(newPhone);
  res.status(201).json(newPhone);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
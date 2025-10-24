import React from 'react';
import OnlineStore from './assets/component/OnlineStore';
import './assets/component/OnlineStore.css';


function App() {
  return (
    <div>
      <div className="Navbar">
        <h1 style={{ textAlign: "center" }}>Online Store</h1>
      </div>

      <div className="Store">
        <OnlineStore
          image="https://img.drz.lazcdn.com/g/kf/S19902502a1ef4c08be193a650e9d07d4C.jpg_400x400q80.jpg_.avif"
          title="Half Sleeve DTF printed For Unisex"
          price="Rs. 499 (Rs. 1,200 - 58%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/713049e0dfee464f1ce4453cfbcf0469.jpg_400x400q80.jpg_.avif"
          title="School Bag for Boys & Girls Best Quality Backpack for College, University, Business, Travel, and Laptop"
          price="Rs. 843 (Rs. 2,500 - 66%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/fbd03319531804d10f1bbd15e9cea349.jpg_400x400q80.jpg_.avif"
          title="Manual Water Pump | For 19 Liter Cans Large - Bottle Water Pump Dispenser"
          price="Rs. 499 (Rs. 1,200 - 58%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/ad7f24a2bf79b0e7064a2b85fea1ce7b.jpg_400x400q80.jpg_.avif"
          title="Mini Wireless Bluetooth Earbuds In-Ear Stereo Headphones with Noise Cancellation"
          price="Rs. 270 (Rs. 1,000 - 73%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/e60742082c441e51db0990684d323ebd.jpg_400x400q80.jpg_.avif"
          title="Dachi Washing Machine Cover For All Automatic & Manual Washing Machines 6kg to15kg"
          price="Rs. 458 (Rs. 699 - 34%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/g/kf/Sabd1ff14aa6544ce9d35661f1576bba8Z.jpg_720x720q80.jpg_.webp"
          title="New Collection Pack of 3 Trousers for Men & Women - Stretchable China Jersey Fabric"
          price="Rs. 1,099 (Rs. 2,199 - 50%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/af227045adfdf0a7f4f7e184b26c81d1.png_400x400q80.png_.avif"
          title="Tresemme Shampoo Keratin Smooth & Straight - 170ML"
          price="Rs. 414 (Rs. 550 - 25%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/e338592c1ea45f30451028b06fc8461f.png_400x400q80.png_.avif"
          title="Tea Whitener - NESTLE EVERYDAY Powder 850g Pouch - Original"
          price="Rs. 1,609 (Rs. 1,770 - 9%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/1e97f5bb82c865acbf974d65571bd89d.jpg_400x400q80.jpg_.avif"
          title="Bona Papa Super Diapers - Super Economy Pack - Large Size 4 - 50 Pcs"
          price="Rs. 1,106 (Rs. 1,624 - 32%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/6aaf7dfec24dd38e276b6afac08d5326.jpg_720x720q80.jpg_.webp"
          title="Baby Food - NESTLE CERELAC - Rice 175g"
          price="Rs. 399 (Rs. 450 - 11%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/5cab275c886fedd4a204d36b0eaeaeb9.jpg_400x400q80.jpg_.avif"
          title="Manual Water Pump | For 19 Liter Cans Large - Bottle Water Pump Dispenser"
          price="Rs. 755 (Rs. 1,499 - 50%)"
        />

        <OnlineStore
          image="https://img.drz.lazcdn.com/static/pk/p/4744e231fb4fef71b4e4a3c069a93da1.jpg_720x720q80.jpg_.webp"
          title="AirPods Pro 6 Hi-Fi Wireless Airbuds 5.0 Bluetooth Earphone with Charging Case (White)"
          price="Rs. 448 (Rs. 2,999 - 85%)"
        />
      </div>
    </div>
  );
}

export default App;

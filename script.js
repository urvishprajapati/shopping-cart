// Sample product data
const productsData = {
    
    bottle: [
        { name: "Bottle A", price: 10, image: "https://media.istockphoto.com/photos/blue-and-green-water-bottle-leaning-on-each-other-isolated-on-a-white-picture-id1255064221?b=1&k=20&m=1255064221&s=170667a&w=0&h=SAkBlLH3JZcKQWIY5udbwnpJh4JlPb6UfBpf8NMv8Kw=" },
        { name: "Bottle B", price: 12, image: "https://i5.walmartimages.com/asr/9bba1b9f-1989-4ec4-b992-fa5201c576ec_1.b8d97d9a587440e101eda1b07a09a7f3.jpeg" },
        { name: "Bottle C", price: 15, image: "https://nwscdn.com/media/catalog/product/m/u/multi_1_14.jpg" },
        { name: "Bottle D", price: 18, image: "https://www.tripsavvy.com/thmb/VKEjJESVZRmEQZQc2AJV6o3Vyt8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/716x4kLJthL._SL1500_-f37609b92d734d50b59d5e010ce87c7e.jpg" },
        { name: "Bottle E", price: 20, image: "https://static.vecteezy.com/system/resources/previews/027/291/807/original/a-plastic-bottle-of-water-on-a-transparent-background-free-png.png" },
    ],
    bag: [
        { name: "Bag A", price: 25, image: "https://cdn.shopclues.com/images/detailed/74476/118602000_C1Copy3_1497767082.jpg" },
        { name: "Bag B", price: 30, image: "https://tse3.mm.bing.net/th?id=OIP.d9ArLemWXBF8OqRz91KufwHaHa&pid=Api&P=0&h=180" },
        { name: "Bag C", price: 35, image: "https://images-na.ssl-images-amazon.com/images/I/61ovQTveh7L.jpg" },
        { name: "Bag D", price: 40, image: "https://tse2.mm.bing.net/th?id=OIP.MSXQtiDpB5sVdCh79w0FXwHaHa&pid=Api&P=0&h=180" },
        { name: "Bag E", price: 45, image: "https://5.imimg.com/data5/SELLER/Default/2023/4/304169265/YG/JF/MJ/188654298/girls-college-bag-1000x1000.jpg" },
    ],
    cricketBat: [
        { name: "Kookaburra", price: 50, image: "https://www.prodirectcricket.com/productimages/Main/193888_Main_Thumb_0380895.jpg" },
        { name: "SG", price: 55, image: "https://cricketpro.b-cdn.net/wp-content/uploads/2020/09/SG-Players-Xteme-English-Willow-Bat-2020-main.jpg" },
        { name: "MRF", price: 60, image: "https://tse4.mm.bing.net/th?id=OIP.uVaIBD0hnquxdtH34BNE3AHaKl&pid=Api&P=0&h=180" },
        { name: "DSC", price: 65, image: "https://tse3.mm.bing.net/th?id=OIP.7eFjJez4OoM6E1od_REZPQHaHa&pid=Api&P=0&h=180" },
        { name: "Gray-Nicolls", price: 70, image: "https://tse3.mm.bing.net/th?id=OIP.kFSwjLM_Q04brl-aD5I7DQHaHa&pid=Api&P=0&h=180" },
    ],
    tshirt: [
        { name: "T-Shirt A", price: 15, image: "https://tse1.mm.bing.net/th?id=OIP.6w5SA3F4dXdSAiImxe2q7wHaHa&pid=Api&P=0&h=180" },
        { name: "T-Shirt B", price: 20, image: "https://purepng.com/public/uploads/large/purepng.com-t-shirtclothingt-shirtfashion-dress-shirt-cloth-tshirt-631522326894filwv.png" },
        { name: "T-Shirt C", price: 25, image: "http://4.bp.blogspot.com/-qgY6248K0Kg/Ui3TnnwhuuI/AAAAAAAAACA/_Z4Iwj1ukTM/s1600/T-Shirt+-+Final.jpg" },
        { name: "T-Shirt D", price: 30, image: "https://tse4.mm.bing.net/th?id=OIP.5-zT3TpjRF_KlMHNdRhhhQHaHa&pid=Api&P=0&h=180" },
        { name: "T-Shirt E", price: 35, image: "https://tse1.mm.bing.net/th?id=OIP.6CMEzdktlJn5iM6zrijswwHaH2&pid=Api&P=0&h=180" },
    ],
    pant: [
        { name: "Pant A", price: 30, image: "https://tse4.mm.bing.net/th?id=OIP.S8fxhnnD8r5I9E2u_lIxdQHaHa&pid=Api&P=0&h=180" },
        { name: "Pant B", price: 35, image: "https://i5.walmartimages.com/asr/c94a4c81-bb55-497c-b853-3f8427c6ef31.8910f1d1f06d83f7aebb607cadb4feea.jpeg" },
        { name: "Pant C", price: 40, image: "http://www.pngall.com/wp-content/uploads/5/Cotton-Pant-PNG-File-Download-Free.png" },
        { name: "Pant D", price: 45, image: "http://media.istockphoto.com/photos/mens-trousers-picture-id510615049?k=6&m=510615049&s=612x612&w=0&h=wNq7K4R8XbcIRYN1CtES6yi5w2no1ansSEflefcnbgw=" },
        { name: "Pant E", price: 50, image: "https://www.skylinewears.com/wp-content/uploads/2019/01/4.jpg" },
    ],
};

// Update product list when the main product is selected
document.getElementById('mainProduct').addEventListener('change', function() {
    const selectedProduct = this.value;
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear previous products

    if (productsData[selectedProduct]) {
        productsData[selectedProduct].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <select class="quantity" data-price="${product.price}">
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                </select>
            `;
            productList.appendChild(productDiv);
        });
    }
});

// Add to cart button functionality
document.getElementById('addToCart').addEventListener('click', function() {
    const products = document.querySelectorAll('.product');
    let totalPrice = 0;

    products.forEach(product => {
        const quantitySelect = product.querySelector('.quantity');
        const quantity = parseInt(quantitySelect.value);
        const price = parseFloat(quantitySelect.getAttribute('data-price'));

        totalPrice += price * quantity;
    });

    const totalBill = document.getElementById('totalBill');
    totalBill.innerText = `$${totalPrice.toFixed(2)}`;
});
document.getElementById('proceedToPayment').addEventListener('click', function() {
    const totalBill = document.getElementById('totalBill').innerText;
    if (totalBill === "$0.00") {
        alert('Please add items to your cart before proceeding to payment.');
    } else {
        alert(`Proceeding to payment of ${totalBill}. Payment Method: ${document.getElementById('paymentMethod').value}`);
    }
});

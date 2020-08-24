class UsersDomain {
    
    getGrocery(params, response) {
        response.json([
            { "productId": "1", "type" : "Grocery", "isActive": true, "src": "aashirvaad.jpg", "price": "321.00","originalPrice": "331.00", "discount" : "-2%", "totalDiscount" : "10","ProductName": "Aashirvaad" }, 
            { "productId": "2","type" : "Grocery","isActive": true, "src": "sugar.jpg", "price": "325.00","originalPrice": "335.00","discount" : "-2%", "totalDiscount" : "10", "ProductName": "Madhur sugar" },
            { "productId": "3","type" : "Grocery","isActive": true, "src": "goodDay.jpg", "price": "35.00","originalPrice": "45.00","discount" : "-2%", "totalDiscount" : "10", "ProductName": "Good Day" },
            { "productId": "4","type" : "Grocery","isActive": true, "src": "jimJam.jpg", "price": "25.00","originalPrice": "35.00","discount" : "-2%", "totalDiscount" : "10", "ProductName": "Jim JAM" },

            { "productId": "5","type" : "Mobiles","isActive": true, "src": "oppoF11.jpg", "price": "19,083.00","originalPrice": "19,093.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Oppo F11" }, 
            { "productId": "6","type" : "Mobiles","isActive": true, "src": "iphone11.jpg", "price": "1,40,300.00","originalPrice": "1,40,310.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Apple iphone11 Pro" },
            { "productId": "7","type" : "Mobiles","isActive": true, "src": "realmeXT.jpg", "price": "16,989.00","originalPrice": "16,999.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Realme XT" },
            { "productId": "8","type" : "Mobiles","isActive": true, "src": "realme-x50-pro.jpg", "price": "48,900.00","originalPrice": "48,910.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Realme X50 Pro" },

            { "productId": "9","type" : "Electronics","isActive": true, "src": "keyboad.jpg", "price": "616.00","originalPrice": "626.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "HP 100 wired USB Keyboard" }, 
            { "productId": "10","type" : "Electronics","isActive": true, "src": "mouse.jpg", "price": "625.00","originalPrice": "635.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Dell WM126 Wireless Optical Mouse (Black)" },
            { "productId": "11","type" : "Electronics","isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
            { "productId": "12","type" : "Electronics","isActive": true, "src": "JBLTune.jpg", "price": "5,999.00","originalPrice": "6,009.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "JBL TUNE 750BTNC" },

            { "productId": "13","type" : "Boat","isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },

            { "productId": "14","type" : "Laptop","isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
        ]);

        // var data = [
        //     { "isActive": true, "src": "aashirvaad.jpg", "price": "799,99 �", "ProductName": "Aashirvaad" }, 
        //     { "isActive": true, "src": "sugar.jpg", "price": "799,99 �", "ProductName": "Madhur sugar" },
        //     { "isActive": true, "src": "test.jpg", "price": "799,99 �", "ProductName": "Bodytone Ex3" }]
        // response.json({ Items: [data[parseInt(params.pageNumber) - 1]] });
    }

    // getMobile(params, response) {
    //     response.json([
    //         { "isActive": true, "src": "oppoF11.jpg", "price": "19,083.00","originalPrice": "19,093.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Oppo F11" }, 
    //         { "isActive": true, "src": "iphone11.jpg", "price": "1,40,300.00","originalPrice": "1,40,310.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Apple iphone11 Pro" },
    //         { "isActive": true, "src": "realmeXT.jpg", "price": "16,989.00","originalPrice": "16,999.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Realme XT" },
    //         { "isActive": true, "src": "realme-x50-pro.jpg", "price": "48,900.00","originalPrice": "48,910.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Realme X50 Pro" }
    //     ]);
    // }

    // getElectronic(params, response) {
    //     response.json([
    //         { "isActive": true, "src": "keyboad.jpg", "price": "616.00","originalPrice": "626.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "HP 100 wired USB Keyboard" }, 
    //         { "isActive": true, "src": "mouse.jpg", "price": "625.00","originalPrice": "635.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Dell WM126 Wireless Optical Mouse (Black)" },
    //         { "isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
    //         { "isActive": true, "src": "JBLTune.jpg", "price": "5,999.00","originalPrice": "6,009.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "JBL TUNE 750BTNC" }
    //     ]);
    // }

    // getBoatProducts(params, response) {
    //     response.json([
    //         { "isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
    //     ]);
    // }

    // getLaptopProducts(params, response) {
    //     response.json([
    //         { "isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
    //     ]);
    // }

    getNumberOfItems(params, response) {
        response.json([
            { "CategoryType": "Grocery", "rediredtToPage" : "/user-tabs/grocery", "src":"aashirvaad.jpg"},
            { "CategoryType": "Electronics", "rediredtToPage" : "/user-tabs/grocery", "src":"JBLTune.jpg"},
            { "CategoryType": "Mobiles", "rediredtToPage" : "/user-tabs/grocery", "src":"oppoF11.jpg"}
        ]);
    }
}
module.exports = UsersDomain;
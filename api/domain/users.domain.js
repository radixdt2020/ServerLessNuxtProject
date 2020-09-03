const aws = require("aws-sdk");


class UsersDomain {
    
    getGrocery(params, response) {
        const dynamoDb = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });

        var expression = {
           "TableName": "Paytm",
            "Limit": params.totalCount,
            // KeyConditionExpression: "ProductId = :ProductId",
            // ExpressionAttributeValues: {
            //     ":ProductId": "1",
            // }
        };
        dynamoDb.scan(expression, (error, data) => {
           if (error) {
               console.error("Unable to read item. Error JSON:", JSON.stringify(error, null, 2));
               response.json({ failed: true });
           } else {
               response.json(data);
           }
        });


        // response.json([
        //     { "productId": "1", "type" : "Grocery", "isActive": true, "src": "aashirvaad.jpg", "price": "321.00","originalPrice": "331.00", "discount" : "-2%", "totalDiscount" : "10","ProductName": "Aashirvaad" }, 
        //     { "productId": "2","type" : "Grocery","isActive": true, "src": "sugar.jpg", "price": "325.00","originalPrice": "335.00","discount" : "-2%", "totalDiscount" : "10", "ProductName": "Madhur sugar" },
        //     { "productId": "3","type" : "Grocery","isActive": true, "src": "goodDay.jpg", "price": "35.00","originalPrice": "45.00","discount" : "-2%", "totalDiscount" : "10", "ProductName": "Good Day" },
        //     { "productId": "4","type" : "Grocery","isActive": true, "src": "jimJam.jpg", "price": "25.00","originalPrice": "35.00","discount" : "-2%", "totalDiscount" : "10", "ProductName": "Jim JAM" },

        //     { "productId": "5","type" : "Mobiles","isActive": true, "src": "oppoF11.jpg", "price": "19,083.00","originalPrice": "19,093.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Oppo F11" }, 
        //     { "productId": "6","type" : "Mobiles","isActive": true, "src": "iphone11.jpg", "price": "1,40,300.00","originalPrice": "1,40,310.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Apple iphone11 Pro" },
        //     { "productId": "7","type" : "Mobiles","isActive": true, "src": "realmeXT.jpg", "price": "16,989.00","originalPrice": "16,999.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Realme XT" },
        //     { "productId": "8","type" : "Mobiles","isActive": true, "src": "realme-x50-pro.jpg", "price": "48,900.00","originalPrice": "48,910.00", "discount" : "-2%", "totalDiscount" : "10", "ProductName": "Realme X50 Pro" },

        //     { "productId": "9","type" : "Electronics","isActive": true, "src": "keyboad.jpg", "price": "616.00","originalPrice": "626.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "HP 100 wired USB Keyboard" }, 
        //     { "productId": "10","type" : "Electronics","isActive": true, "src": "mouse.jpg", "price": "625.00","originalPrice": "635.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Dell WM126 Wireless Optical Mouse (Black)" },
        //     { "productId": "11","type" : "Electronics","isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
        //     { "productId": "12","type" : "Electronics","isActive": true, "src": "JBLTune.jpg", "price": "5,999.00","originalPrice": "6,009.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "JBL TUNE 750BTNC" },

        //     { "productId": "13","type" : "Boat","isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },

        //     { "productId": "14","type" : "Laptop","isActive": true, "src": "boat.jpg", "price": "399.00","originalPrice": "409.00", "discount" : "-2%", "totalDiscount" : "10" , "ProductName": "Boat BassHeads 235 Bass Earphones" },
        // ]);

        // var data = [
        //     { "isActive": true, "src": "aashirvaad.jpg", "price": "799,99 �", "ProductName": "Aashirvaad" }, 
        //     { "isActive": true, "src": "sugar.jpg", "price": "799,99 �", "ProductName": "Madhur sugar" },
        //     { "isActive": true, "src": "test.jpg", "price": "799,99 �", "ProductName": "Bodytone Ex3" }]
        // response.json({ Items: [data[parseInt(params.pageNumber) - 1]] });
    }

    addItem(params, response) {
        // const productItem = {
        //     ProductId: params[0].ProductId,
        //     type: params[0].type,
        //     ProductName: params[0].ProductName,
        // };
        var expression = {
            "TableName": "Paytm",
            "Item" : params[0]
        };
       
        const dynamoDb = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });
       
        dynamoDb.put(expression, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                // console.log("Added item:", JSON.stringify(data, null, 2));
                response.json(data);
            }
        })
    }

    getItemById(params, response) {
        var productItem = params;

        var expression = {
            "TableName": "Paytm",
            KeyConditionExpression: "ProductId = :ProductId",
            ExpressionAttributeValues: {
                ":ProductId": productItem,
            }
        };
        
        const dynamoDb = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });
       
        dynamoDb.query(expression, function(err, data) {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                response.json(data);
            }
        });
        
    }

    editItem(params, response) {
        var pk = params.body[0].ProductId;
        var sk = params.body[0].type;
        
        var expression = {
            "TableName": "Paytm",
            "Key": {
                "ProductId": pk,
                "type": sk
            },
            UpdateExpression: "set ProductName=:s, discount=:d, isActive=:a, originalPrice=:o, price=:p, totalDiscount=:t, src=:sr",

            ExpressionAttributeValues: {
                ":s": params.body[0].ProductName,
                ":d": params.body[0].discount,
                ":a": params.body[0].isActive,
                ":o": params.body[0].originalPrice,
                ":p": params.body[0].price,
                ":t": params.body[0].totalDiscount,
                ":sr": params.body[0].src,
            },
            ReturnValues: "UPDATED_NEW"
        };

        const dynamoDb = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });
       
        dynamoDb.update(expression, function(err, data) {
            if (err) {
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                // console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
                response.json(data);
            }
        });
    }

    deleteItem(params, response) {
        var pk = params.id;
        var sk = params.sk;

        var expression = {
            "TableName": "Paytm",
            Key:{
                "ProductId": pk,
                "type" : sk 
            },
        };
        
        const dynamoDb = new aws.DynamoDB.DocumentClient({ region: "us-east-1" });
       
        dynamoDb.delete(expression, function(err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            }
        });
    }

    getNumberOfItems(params, response) {
        response.json([
            { "CategoryType": "Grocery", "redirectToPage" : "/user-tabs/grocery", "src":"aashirvaad.jpg"},
            { "CategoryType": "Electronics", "redirectToPage" : "/user-tabs/grocery", "src":"JBLTune.jpg"},
            { "CategoryType": "Mobiles", "redirectToPage" : "/user-tabs/grocery", "src":"oppoF11.jpg"}
        ]);
    }
}
module.exports = UsersDomain;
<template>
    <div>
        <h1 style="font-size: 20px; color: #222; font-weight: 400;">Essential Products For You</h1>
        <ShoppingCart :cartData="AddToCartData" style="display:none;" />
        <v-row>
            <v-col v-for="n in 1" :key="n"
                   cols="sm">
                <v-card class="pa-2"
                        outlined
                        tile>
                    <v-row>
                        <template>
                            <v-col v-for="grocery in item"
                                   :key="grocery.productId">
                                <v-card class="pa-2"
                                        outlined
                                        tile>
                                    <div class="product-card-container col-6 col-sm-4 col-md-8">
                                        <div class="products">
                                            <div class="product__left">
                                                <img :src="require(`../assets/img/${grocery.src}`)" class="product__image" width="80px" height="80px" />
                                            </div>
                                            <div class="product__right">
                                                <div class="product__data">
                                                    <!-- <a href="#" class="product__name"> -->
                                                    <span>{{grocery.ProductName}}</span>
                                                    <!-- </a> -->
                                                    <div class="product__info">
                                                        <div class="product__price notranslate">
                                                            <div>
                                                                <img :src="require(`../assets/img/rupee.png`)" class="product__price-actual" />
                                                                <span class="product__price-actual">{{grocery.price}}</span>
                                                                <del>
                                                                    <img :src="require(`../assets/img/rupee.png`)" class="product__price-actual" />
                                                                    <span class="product__price-actual">{{grocery.originalPrice}}</span>
                                                                </del>
                                                                <span class="product__price-actual" style="color:green;">{{grocery.discount}}</span>
                                                            </div>
                                                            <div>
                                                                <span class="product__price-actual" style="color:green;">
                                                                    Offers worth <img :src="require(`../assets/img/rupee.png`)" class="product__price-actual" />{{grocery.totalDiscount}}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-more-info">
                                            <div>
                                                <!-- <span class="btn btn-black">Only</span> -->
                                                <button class="btn btn-success" @click="addToCart(grocery)">Add to cart</button>
                                                <div>
                                                    <span>Free shipping to store</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                            <v-responsive v-if="n === 2"
                                          :key="`width-${n}`"
                                          width="100%"></v-responsive>
                        </template>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import ShoppingCart from "~/components/shopping-cart-item";
    export default {
        layout: "grocery-item",
        components: { ShoppingCart },
        middleware: ["auth"],
        props: {
            item: {
                type: Array,
                default: () => [],
            }
        },
        data() {
            return {
                AddToCartData: []
            };
        },
        methods: {
            // mouseOver: function () {
            //     this.showDetail = true;
            // }

            addToCart(item) {
                var selectedItem = {
                    "productId": item.productId
                    , "src": item.src
                    , "price": item.price
                    , "originalPrice": item.originalPrice
                    , "discount": item.discount
                    , "totalDiscount": item.totalDiscount
                    , "ProductName": item.ProductName
                }

                const data = selectedItem;

                this.AddToCartData.push({
                    productId: data.productId
                    , src: data.src
                    , price: data.price
                    , originalPrice: data.originalPrice
                    , discount: data.discount
                    , totalDiscount: data.totalDiscount
                    , ProductName: data.ProductName
                })
            }
        }
    }
</script>

<style>
    .btn-black {
        background-color: black;
        color: white;
    }
</style>

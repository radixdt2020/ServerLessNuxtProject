<template>
    <div>
        <h1 style="font-size: 20px; color: #222; font-weight: 400;">Essential Products For You</h1>
        <v-row>
            <v-col v-for="laptop in item"
                   :key="laptop.ProductName"
                   cols="sm">
                <v-card class="pa-2"
                        outlined
                        tile>
                    <div class="product-card-container col-6 col-sm-4 col-md-8">
                        <div class="products" @mouseover="showDetail = true" @mouseleave="showDetail = false">
                            <div class="product__left">
                                <img :src="require(`../assets/img/${laptop.src}`)" class="product__image" width="80px" height="80px" />
                            </div>
                            <div class="product__right">
                                <div class="product__data">
                                    <a href="#" class="product__name">
                                        <span>{{laptop.ProductName}}</span>
                                    </a>
                                    <div class="product__info">
                                        <div class="product__price notranslate">
                                            <img :src="require(`../assets/img/rupee.png`)" class="product__price-actual" />
                                            <span class="product__price-actual">{{laptop.price}}</span>
                                            <del>
                                                <img :src="require(`../assets/img/rupee.png`)" class="product__price-actual" />
                                                <span class="product__price-actual">{{laptop.originalPrice}}</span>
                                            </del>
                                            <span class="product__price-actual" style="color:green;">{{laptop.discount}}</span>
                                        </div>
                                        <div>
                                            <span class="product__price-actual" style="color:green;">
                                                Offers worth <img :src="require(`../assets/img/rupee.png`)" class="product__price-actual" />{{laptop.totalDiscount}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-more-info" v-if="showDetail">
                            <div class>
                                <span class="btn btn-black">Only</span>
                                <button class="btn btn-success">Add to cart</button>
                                <div>
                                    <span>Free shipping to store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        layout: "laptop-item",
        middleware: ["auth"],
        props: {
            item: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                showDetail: false
            };
        },
        methods: {
            mouseOver: function () {
                this.showDetail = true;
            }


        }
    };
</script>

<style>
    .btn-black {
        background-color: black;
        color: white;
    }
</style>

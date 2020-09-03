<template>
    <div>
      <div>
        <nuxt-link to="/user-tabs/grocery?name=Grocery">
                <v-btn color="white" style="color: black; margin-left: 1500px;">
                    Back
                </v-btn>
            </nuxt-link>
      </div>
      <div>
        <v-container class="grey lighten-5">
          <v-row>
              <v-col v-for="n in 1" :key="n"
                      cols="sm">
                  <v-card class="pa-2"
                          outlined
                          tile>
                      <v-row>
                          <template>
                              <v-col v-for="grocery in items"
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
        </v-container>
      </div>
    </div>
</template>

<script>
    export default {
        layout: "shopping-cart-item",
        components: { 
        },
        middleware: ["auth"],
        props: {
            items: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
            };
        },
        methods: {
            
        }
    };
</script>

<style>
    .btn-black {
        background-color: black;
        color: white;
    }
</style>

<template>
    <div>
        <div>
            <!-- <nuxt-link to="/user-tabs/shopping-cart"> -->
                <v-btn color="white" style="color: black; margin-left: 1500px;" @click="redirectCart">
                    <img :src="require(`assets/img/cart.png`)" class="product__image" width="21px" height="21px" />
                    Cart ( {{cart.length}} )
                    <!-- <ShoppingCart style="display:none;"  :cartItems="cart" /> -->
                </v-btn>
            <!-- </nuxt-link> -->
        </div>
        <div style="padding-top:10px;">
            <v-sheet class="mx-auto"
                     elevation="8">
                <v-slide-group class="pa-4"
                               :prev-icon="prevIcon ? 'mdi-minus' : undefined"
                               :next-icon="nextIcon ? 'mdi-plus' : undefined"
                               :show-arrows="showArrows">
                    <v-slide-item v-for="totalCategory in totalItems"
                                  :key="totalCategory.CategoryType">
                        <b-navbar toggleable="md" variant="white">
                            <b-navbar-toggle target="nav_collapse" />
                            <b-navbar-brand to="/">
                            </b-navbar-brand>

                            <b-collapse id="nav_collapse" is-nav>
                                <b-navbar-nav>
                                    <b-nav-item :to="totalCategory.rediredtToPage" @click="categoryTypeClickEvent(totalCategory.CategoryType)">
                                        <div style="border-radius: 50%;">
                                            <img :src="require(`assets/img/${totalCategory.src}`)" class="product__image" width="40px" height="40px" />
                                        </div>
                                        <div>
                                            {{totalCategory.CategoryType}}
                                        </div>
                                    </b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>
        <div class="col-lg-12">
            <GroceryItem  @update-cart="updateCart" :item="items" />
            <!-- <v-pagination v-model="page"
                          :length="length"
                          @input="next" ></v-pagination> -->
        </div>
    </div>
</template>



<script>
    import GroceryItem from "~/components/grocery-item";
    
    export default {
        name: "Grocery",
        components: {
            GroceryItem
        },
        middleware: ["auth"],
        computed: {
            length() {
                return this.rowsPerPage ? Math.ceil(3 / this.rowsPerPage) : 0
            }
        },
        data() {
            return {
                page: 1,
                rowsPerPage: 1,
                items: [],
                categoryType: String,
                model: null,
                showArrows: true,
                prevIcon: false,
                nextIcon: false,
                totalItems: [],
                urlLoc: String,
                selectedCategoryType: String,
                cart: [],
            };
        },
        mounted: function () {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                this.categoryType = this.$router.currentRoute.query['name'];
                this.items = this.items.filter(z => z.type == this.categoryType)
                setTimeout(() => this.$nuxt.$loading.finish(), 1000)
            })
        },
        methods: {
            async next(page) {
                let result = (await this.$axios.get(`api/user/users/${page}/${this.rowsPerPage}`)).data
                this.items = result.Items;
            },
            categoryTypeClickEvent(item) {
                this.selectedCategoryType = item;
                this.urlLoc = '/user-tabs/grocery?name=' + this.selectedCategoryType;
                window.location.href = this.urlLoc;
            },
            updateCart(item)
            {
                this.cart.push(item)
                localStorage.setItem("cartItems",JSON.stringify(this.cart));
            },
            redirectCart(){
                this.$emit('cart-items', this.cart);
                this.$router.push('/user-tabs/shopping-cart')
                // this.urlLoc = '/user-tabs/shopping-cart';
                // window.location.href = this.urlLoc;
            }
        },
        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get(`api/user/users`)).data
            let totalCategoryItems = (await $axios.get("api/user/items")).data
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({ items: result.Items, totalItems: totalCategoryItems })
                }, 1000)
            })
            // this.$nuxt.$loading.start()
            // let result = (await $axios.get(`api/user/users`)).data
            //  return { items: result }
            // this.$nuxt.$loading.finish()

        },
    };
</script>
<template>
    <div>
        <div style="width:100%;">

            <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->

            <div>

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
                                        <!-- <b-nav-item to="/" exact>
                                            Home
                                        </b-nav-item> -->
                                        <b-nav-item :to="totalCategory.rediredtToPage" :title="totalCategory.CategoryType" v-on:click="$emit('updateCarts')" >
                                            <!-- @click="categoryTypeClickEvent(totalCategory.CategoryType)" v-on:click="$emit('updateCarts', totalCategory.CategoryType)"-->
                                            <div style="border-radius: 50%;">
                                                <img :src="require(`../assets/img/${totalCategory.src}`)" class="product__image" width="40px" height="40px" />
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

            <div style="width:100%; display:flex; padding-left: 12px; cursor: pointer;">
                <div style="width:50%; padding-top: 10px; ">
                    <nuxt-link to="/user-tabs/mobiles">
                        <img :src="require(`../assets/img/smart-phone.png`)" class="product__image" width="130%" />
                    </nuxt-link>
                </div>
                <div style="width:50%; padding-top: 10px;">
                    <div style="width:25%; padding-left: 305px;">
                        <nuxt-link to="/user-tabs/boat">
                            <img :src="require(`../assets/img/boat-offer.png`)" class="product__image" height="322px" width="546px" />
                        </nuxt-link>
                    </div>
                    <div style="width:25%; padding-left: 305px; padding-top: 23px;">
                        <nuxt-link to="/user-tabs/laptop">
                            <img :src="require(`../assets/img/laptops.png`)" class="product__image" height="333px" width="546px" />
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <div style="width:100%; display:flex; padding-top: 10px; padding-left: 12px;">
                <div style="width:33.33%; ">
                    <img :src="require(`../assets/img/dry-fruits.png`)" class="product__image" width="560px" height="150px" />
                </div>
                <div style="width:33.33%; ">
                    <img :src="require(`../assets/img/immunity-products.png`)" class="product__image" width="560px" height="150px" />
                </div>
                <div style="width:33.33%; ">
                    <img :src="require(`../assets/img/snacks.png`)" class="product__image" width="560px" height="150px" />
                </div>
            </div>

        </div>

        <div>
            <v-app-bar app color="white" dark style="align:center;">
                <v-toolbar-title>
                    <v-app-bar-nav-icon color="#fcb69f" @click="drawer = true"></v-app-bar-nav-icon>
                    <img :src="require(`../assets/img/paytmmall-logo.jpg`)" class="product__image" width="80px" height="40px" />
                    <nuxt-link to="/user-tabs/shopping-cart ">
                        <v-btn color="white" style="color: black; margin-left: 1500px;">
                            <img :src="require(`../assets/img/cart.png`)" class="product__image" width="21px" height="21px" />
                            Add To cart
                        </v-btn>
                    </nuxt-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav dense>
                    <v-list-item-group active-class="deep-orange--text text--accent-4">
                        <v-list-item v-for="category in totalItems" :key="category.CategoryType">
                            <b-navbar toggleable="md" variant="white">
                                <b-navbar-toggle target="nav_collapse" />
                                <b-navbar-brand to="/">
                                </b-navbar-brand>
                                <b-collapse id="nav_collapse" is-nav>
                                    <b-navbar-nav>
                                        <b-nav-item :to="category.rediredtToPage">
                                            <v-list-item-title>{{category.CategoryType}}</v-list-item-title>
                                        </b-nav-item>
                                    </b-navbar-nav>
                                </b-collapse>
                            </b-navbar>
                        </v-list-item>

                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </div>
        <!-- <GroceryItem :categories="totalItems.CategoryType"  style="display:none;"></GroceryItem> -->
    </div>
</template>

<script>
    import GroceryItem from "~/components/grocery-item";
    import ShoppingCart from './user-tabs/shopping-cart ';

    export default {
        components: {
            GroceryItem,
            ShoppingCart
        },
        middleware: ['auth'],
        data() {
            return {
                fields: ['first_name', 'last_name', 'age'],
                drawer: false,
                model: null,
                showArrows: true,
                prevIcon: false,
                nextIcon: false,
                totalItems: [],
                selectedCategoryType: String,
            }
        },
        methods: {

            categoryTypeClickEvent(item) {
                this.selectedCategoryType = item;
                this.$emit('update-cart', this.selectedCategoryType);
            }
        },        // async asyncData({ $auth, $axios, params }) {
        //     let result = (await $axios.get("api/administration/users")).data
        //     return { items: result}
        // }

        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get("api/user/items")).data
            return { totalItems: result }
        }
    }
</script>
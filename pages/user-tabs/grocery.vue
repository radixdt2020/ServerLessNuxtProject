<template>
    <div>
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
            <GroceryItem :item="items" />
            <!-- <v-pagination v-model="page"
                          :length="length"
                          @input="next" ></v-pagination> -->
        </div>
    </div>
</template>



<script>
    import GroceryItem from "~/components/grocery-item";

    export default {
        // name: "Grocery",
        components: {
            GroceryItem,
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
            }
        },
        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get(`api/user/users`)).data
            let totalCategoryItems = (await $axios.get("api/user/items")).data
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({ items: result, totalItems: totalCategoryItems })
                }, 1000)
            })
            // this.$nuxt.$loading.start()
            // let result = (await $axios.get(`api/user/users`)).data
            //  return { items: result }
            // this.$nuxt.$loading.finish()

        },
    };
//    var app=new Vue({
//     el:"#app",
//     data:{premium:true,
//     //cart:0
//     cart:[]
// },
//     methods:
//     {
//         updateCart(id)
//         {
//            // this.cart+=1;
//            this.cart.push(id)
//         },
//         removeCart(id)
//         {
//             debugger;

//         index=  this.cart.indexOf(id);
//        this.cart= this.cart.slice(0, index)
//           console.log(this.cart);
//         }
//     }
// }
// )
</script>
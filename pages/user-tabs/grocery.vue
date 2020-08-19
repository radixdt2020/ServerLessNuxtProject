<template>
    <div>
        <div class="col-lg-12" >
            
            <Users v-on:updateCarts = "updateCart"  style="display:none;"/>
            <!-- <template v-for="item in items"> -->
                <GroceryItem :item="items" />
            <!-- </template> -->
            <!-- <v-pagination v-model="page"
                          :length="length"
                          @input="next" ></v-pagination> -->
        </div>
    </div>
</template>



<script>
    import GroceryItem from "~/components/grocery-item";
    import Users from "../users";

    
    export default {
        // name: "Grocery",
        components: { GroceryItem , Users},
        middleware: ["auth"],
        computed: {
            length() {
                return this.rowsPerPage ? Math.ceil(3 / this.rowsPerPage) : 0
            }
        },
        props: {
            
        },
        data() {
            return {
                page: 1,
                rowsPerPage: 1,
                items: [],
                        cart: []
            };
        },
        mounted: function () {
            console.log('hii');
                 this.updateCart();
            },
        methods: {
            async next(page) {
                let result = (await this.$axios.get(`api/user/users/${page}/${this.rowsPerPage}`)).data
                this.items = result.Items;
            },
               updateCart() {
                   console.log('hii123');
                    //  this.check = params;
    }
 
           
 
        },
        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get(`api/user/users`)).data
            return { items: result }
        },
        // addToCart:function()
        // {
        //    this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId);
        // },
    };

//     var app=new Vue({
//     el:"#app",
//     data:{premium:true,
//     //cart:0
//     // cart:[]
// },
//     methods:
//     {
        // updateCart(id)
        // {
        //    // this.cart+=1;
        //    this.cart.push(id)
        // },
//     }
// })

</script>
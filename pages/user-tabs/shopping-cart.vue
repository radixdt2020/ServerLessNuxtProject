<template>
  <div>
      <div>
        <!-- <Grocery  @cart-items="totalCartItems" style="display:none;" /> -->
      </div>
      <div>
        <ShoppingCartItem :items="totalCartItem"/>
      </div>
  </div>
</template>

<script>
    import ShoppingCartItem from "~/components/shopping-cart-item";
    import Grocery from "./grocery";

    export default {
      name: 'shoppingCart',
      components: { ShoppingCartItem, Grocery},
      props: {
          cartItems: {
                    type: Array,
                    default: () => [],
                }      
      },
      data() {
            return {
                totalCartItem: [],
            };
      },
      mounted: function () {
           this.totalCartItem = JSON.parse(localStorage.getItem('cartItems'));
           console.log(this.totalCartItem);
      },
      methods: {
        totalCartItems(item)
            {
                debugger;
            },
      },
    };
</script>
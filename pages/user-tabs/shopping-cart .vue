<template>
                  <ShoppingCartItem/>
  <!-- <button class="btn btn-primary"> Cart ({{ inCart }})</button> -->
  
</template>

<script>
 import ShoppingCartItem from "~/components/shopping-cart-item";
export default {
  name: 'shoppingCart',
  components: { ShoppingCartItem},
  props: {
      cartData: {
                type: Array,
                default: () => [],
            }      
  },
  computed: {
    // inCart() { return this.$store.getters.inCart; },
  },
  
};
</script>
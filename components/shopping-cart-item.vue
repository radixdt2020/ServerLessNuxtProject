<template>
    <v-container class="grey lighten-5">
      <!-- <GroceryItems @add-to-cart="updateCart" style="display:none;"/> -->
      
      {{cartData}}
    <v-row no-gutters>
      <template v-for="n in 4">
        <v-col :key="n">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Column
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>

<script>
    // import GroceryItems from "~/components/grocery-item";

    export default {
        layout: "shopping-cart-item",
        components: { 
            // GroceryItems
          },
        middleware: ["auth"],
        props: {
            cartData: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
            };
        },
        methods: {
             cart(e) {
                   console.log('hii456');
                    //  this.check = params;
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

<template>
    <v-container class="grey lighten-5">
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
    export default {
        layout: "shopping-cart-item",
        middleware: ["auth"],
        props: {
            cartData: {
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

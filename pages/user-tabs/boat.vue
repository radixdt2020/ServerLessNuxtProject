<template>
    <div>
        <div class="col-lg-12">
                <BoatItem :item="items" />
        </div>
    </div>
</template>



<script>
    import BoatItem from "~/components/boat-item";

    export default {
        components: { BoatItem },
        computed: {
            length() {
                return this.rowsPerPage ? Math.ceil(3 / this.rowsPerPage) : 0
            }
        },
        data() {
            return {
                page: 1,
                rowsPerPage: 1,
                products: [],
                limit: 1,
                items: []
            };
        },
        methods: {
            async next(page) {
                let result = (await this.$axios.get(`api/user/boatItems/${page}/${this.rowsPerPage}`)).data
                this.items = result.Items;
            },
        },
        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get(`api/user/boatItems`)).data
            return { items: result }
        }
    };
</script>
<template>
    <div>
        <div class="col-lg-12">
                <ElectronicItem :item="items" />
            <v-pagination v-model="page"
                          :length="length"
                          @input="next"></v-pagination>
        </div>

    </div>
</template>



<script>
    import ElectronicItem from "~/components/electronic-item";

    export default {
        components: { ElectronicItem },
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
                let result = (await this.$axios.get(`api/user/electronic/${page}/${this.rowsPerPage}`)).data
                this.items = result.Items;
            },
        },
        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get(`api/user/electronic`)).data
            return { items: result }
        }
    };
</script>
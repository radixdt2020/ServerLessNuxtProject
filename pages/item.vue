<template>
    <div>
        <div>
            <n-link to="/user-tabs/addItem">
                <v-btn color="white" style="color: black; margin-left: 1500px;">
                    <img :src="require(`../assets/img/cart.png`)" class="product__image" width="21px" height="21px" />
                    Add To Item
                </v-btn>
            </n-link>
        </div>
        <div>
            <v-simple-table fixed-header height="600px">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left" style="color:#fcb69f;">Product Id</th>
                            <th class="text-left" style="color:#fcb69f;">Product Type</th>
                            <th class="text-left" style="color:#fcb69f;">Product Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in totalItems" :key="item.ProductId">
                            <td>{{ item.ProductId }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.ProductName }}</td>
                            <td>
                                <n-link :to="'/user-tabs/editItem?productId=' + item.ProductId">
                                 <a>Edit</a>
                                </n-link> 
                            </td>
                            <td>
                                 <a v-on:click="deleteItem(item.ProductId,item.type)" onClick="return confirm('Are you sure?');">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                totalItems: [],
            };
        },
        methods: {
            async deleteItem(item,type) {
                const id = item
                const sk = type
                console.log(sk);
                const url = `api/user/users/${id}/${sk}`
                
                await this.$axios.delete(url)
                // this.asyncData();
            }
        },
        async asyncData({ $auth, $axios, params }) {
            let result = (await $axios.get(`api/user/users`)).data
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({ totalItems: result.Items})
                }, 1000)
            })
        },
    };
</script>
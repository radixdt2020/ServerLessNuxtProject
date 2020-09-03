<template>
    <v-form v-model="valid">
    <v-container v-for="item in totalItems" :key="item.ProductId">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="item.ProductId"
            :counter="10"
            label="Product Id"
            required readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="item.type"
            :rules="nameRules"
            :counter="10"
            label="Product Type"
            required readonly
          ></v-text-field>
        </v-col>
      </v-row>


      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="item.ProductName"
            :rules="nameRules"
            :counter="10"
            label="Product Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="item.discount"
            :counter="10"
            label="Discount"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
         <v-col cols="12" md="4" >
           <v-select
            v-model="item.isActive"
            :items="isActives"
            label="Product is Active"
            required
            ></v-select>
        </v-col>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="item.originalPrice"
            :counter="10"
            label="Original Price"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="item.price"
            :counter="10"
            label="Price"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="item.totalDiscount"
            :counter="10"
            label="Total Discount"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
         <v-col cols="12" md="4">
         <!-- <v-file-input
          v-model="item.src"
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Product Image"
          prepend-icon="mdi-camera"
          label="Product Image"
        ></v-file-input> -->
         <input  type="file" accept="image/*" @change="photoChange" ref="fileInput">
         <!-- <button @click="$refs.fileInput.click()">Upload Product Image</button> -->
         <div v-if="item.src && imgUrl == null">
            <img :src="item.src"  style="width:200px; height:200px;"/> 
        </div>
        <div v-else>
            <img v-if="imgUrl" :src="`data:image/png;base64,${imgUrl}`"  style="width:200px; height:200px;"/> 
        </div>
        </v-col>
      </v-row>

      <v-btn color="white" style="color: black;"  @click="editItem(item)">
            <img :src="require(`assets/img/cart.png`)" class="product__image" width="21px" height="21px" />
            Edit Item
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    middleware: ['auth'],
    data: () => ({
      valid: false,
      type: '',
      ProductName: '',
      ProductId: '',
      ProductId: '',
      discount: '',
      isActives: ['True', 'False'],
      originalPrice: '',
      price: '',
      totalDiscount:'',
      src:'',
      isActive:[],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      saveProduct:[],
      productId: String,
      totalItems: [],
      imgUrl: null,
    }),
    methods: {
            async editItem(item) {
                this.saveProduct.push({
                   ProductId: item.ProductId
                   ,type: item.type
                  ,ProductName: item.ProductName
                  ,discount: item.discount
                  ,isActive: item.isActive
                  ,originalPrice: item.originalPrice
                  ,price: item.price
                  ,totalDiscount:item.totalDiscount
                  ,src:"data:image/png;base64," + this.imgUrl
                })

                const url = `api/user/users`
                const data = this.saveProduct;
                console.log(data);
                (await this.$axios.put(url,data));
                this.$router.push('/item')
            },
            photoChange(event){
                  //          const file = event.target.files[0];
                  // this.url = URL.createObjectURL(file);
                    debugger;
                    var file = null;
                    try {
                        file = event.srcElement.files[0]
                    } catch (event) {
                        file = event.target.files[0]
                    }
                    let reader = new FileReader();

                    if (FileReader.prototype.readAsBinaryString === undefined) {
                        FileReader.prototype.readAsBinaryString = function (fileData) {
                            var binary = "";
                            var pt = this;
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                var bytes = new Uint8Array(reader.result); //new Uint8Array(reader.result);
                                var length = bytes.byteLength;
                                for (var i = 0; i < length; i++) {
                                    binary += String.fromCharCode(bytes[i]);
                                }
                                pt.content = binary;
                                pt.onload();
                            }
                            reader.readAsArrayBuffer(fileData);
                        }
                    }

                    let fileData = null;
                    let filename = file.name;
                   
                    reader.onload = (readerEvt) => {
                        if (!readerEvt) {
                            fileData = btoa(reader['content']);
                        }
                        else {
                            fileData = btoa(readerEvt.target.result);
                        }
                        this.imgUrl = fileData;
                        console.log(this.imgUrl);
                    };
                    reader.readAsBinaryString(file);
            }
    }, 
    async asyncData({ $auth, $axios, params, route  }) {
            const id = route.query.productId
            const url = `api/user/users/${id}`
            let result = (await $axios.get(url)).data
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({ totalItems: result.Items})
                }, 1000)
            })
        },
  }
</script>
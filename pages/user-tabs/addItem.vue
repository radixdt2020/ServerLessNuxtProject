<template>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="ProductId"
            :counter="10"
            label="Product Id"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
           <v-text-field
            v-model="type"
            :rules="nameRules"
            :counter="10"
            label="Product Type"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="ProductName"
            :rules="nameRules"
            :counter="10"
            label="Product Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="discount"
            :counter="10"
            label="Discount"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
         <v-col cols="12" md="4" >
           <v-select
            v-model="selectedActive"
            :items="isActive"
            label="Product is Active"
            required
            ></v-select>
        </v-col>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="originalPrice"
            :counter="10"
            label="Original Price"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="price"
            :counter="10"
            label="Price"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" >
          <v-text-field
            v-model="totalDiscount"
            :counter="10"
            label="Total Discount"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
         <v-col cols="12" md="4">
         <!-- <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Product Image"
          prepend-icon="mdi-camera"
          label="Product Image"
        ></v-file-input> -->
         <input  type="file" accept="image/*" @change="photoChange" ref="fileInput">
         <img v-if="imgUrl" :src="`data:image/png;base64,${imgUrl}`"  style="width:200px; height:200px;" /> 
        </v-col>
          
      </v-row>
      <v-btn color="white" style="color: black;"  @click="saveItem()">
            <img :src="require(`assets/img/cart.png`)" class="product__image" width="21px" height="21px" />
            Add Item
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
      discount: '',
      isActive: ['True', 'False'],
      originalPrice: '',
      price: '',
      totalDiscount:'',
      selectedActive:[],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      rules: [
        value => !value || value.size < 10000000 || 'Product image size should be less than 2 MB!',
      ],
      saveProduct:[],
      imgUrl: null,
    }),
    methods: {
            async saveItem() {
                this.saveProduct.push({
                   ProductId: this.ProductId
                   ,type: this.type
                  ,ProductName: this.ProductName
                  ,discount: this.discount
                  ,isActive: this.selectedActive
                  ,originalPrice: this.originalPrice
                  ,price: this.price
                  ,totalDiscount:this.totalDiscount
                  ,src:"data:image/png;base64," + this.imgUrl
                })
                const url = "api/user/users"
                const data = this.saveProduct;
                console.log(data);
                await this.$axios.post(url, data);
                // this.$router.push({ path: '/item' })
                this.$router.push('/item')
            },
            photoChange(event){
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
                    };
                    reader.readAsBinaryString(file);
            }
    }, 
  }
</script>
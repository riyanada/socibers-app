<template>
  <div>
    <v-container grid-list-md>
      <v-img src="https://images.soco.id/6bb44c5c-e66c-48fe-a1c1-7494d7ccfab4-.jpg">
      </v-img>
      <v-subheader>
        Random Brand
        <v-spacer></v-spacer>
        <router-link to="/categories">See All</router-link>
      </v-subheader>
      <v-layout row wrap>
        <v-flex v-for="category in categories" xs6 :key="category.id">
          <v-card :to="'/category/' + category.slug">
            <v-img :src="getImage(category.image)" height="auto">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="title white--text text-block caption pink lighten-1" v-text="category.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md>
      <v-subheader>
        Top Products
        <v-spacer></v-spacer>
        <router-link to="/products">See All</router-link>
      </v-subheader>
      <v-layout row wrap>
        <v-flex v-for="(product, index) in products" xs6 :key="index">
          <v-card :to="'/product/' + product.slug">
            <v-img :src="getImage(product.cover)" height="150px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height="">
                  <v-flex xs12 align-end flexbox>
                    <span class="title white--text text-block subtitle-2 pink lighten-1" style="background-color: #4f4f4f;"
                      v-text="product.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.text-block {
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: black;
  padding-left: 5px;
  padding-right: 5px;
  opacity: 0.7;
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    categories: [],
    products: []
  }),
  methods: {
  },
  created() {
    let count = 4
    this.axios.get('/categories/random/' + count)
      .then((response) => {
        let categories = response.data.data
        this.categories = categories
      })
      .catch((error) => {
        let responses = error.response
        console.log(responses)
      })

    count = 8
    this.axios.get('/products/top/' + count)
      .then((response) => {
        let products = response.data.data
        this.products = products
      })
      .catch((error) => {
        let responses = error.response
        console.log(responses)
      })
  }
}
</script>
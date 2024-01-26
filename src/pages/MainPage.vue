<template>
    <v-container>
        <v-select
            v-model="selectedCategory"
            :items="['All'].concat(getCategories)"
            label="Select Category"
        ></v-select>

        <v-select
            v-model="selectedBrand"
            :items="['All'].concat(getBrands)"
            label="Select Brand"
        ></v-select>

        <v-row>
            <v-spacer/>
            Found {{ $store.getters.getFilteredProducts.length }} product(s)
            <v-btn class="ml-10 mb-10" @click="f5">
                <router-link to='/'>Clear all filters</router-link>
            </v-btn>
            <v-spacer/>
        </v-row>

        <v-row>
            <Product 
                v-for="product in $store.getters.getFilteredProducts" 
                :product="product" 
                :key="product.id"
            />
        </v-row>
    </v-container>
</template>

<script >
import Product from "@/pages/Product.vue"

import { mapGetters, mapActions } from "vuex"

export default {
    components: {
        Product,
    },
    computed: {
        ...mapGetters(['filteredProducts', 'getCategories', 'getBrands']),
        products() {
            return this.$store.getters.filteredProducts
        },
        filters() {
            return this.$store.state.filters
        },
        selectedCategory: {
            get() {
                return this.$store.state.selectedCategory;
            },
            set(value) {
                this.$store.commit('setSelectedCategory', value);
                this.$router.push({ query: { ...this.$route.query, category: value } });
            },
        },
        selectedBrand: {
            get() {
                return this.$store.state.selectedBrand;
            },
            set(value) {
                this.$store.commit('setSelectedBrand', value);
                this.$router.push({ query: { ...this.$route.query, brand: value } });
            },
        },
    },
    mounted() {
        this.fetchProducts()
    },
    methods: {
        ...mapActions(['fetchProducts']),
        f5() {
            location.reload();
            return false;
        }
    },
    watch: {
        '$route.query': {
            immediate: true,
            handler(query) {
                if (query.category) {
                    this.$store.commit('setSelectedCategory', query.category);
                }
                if (query.brand) {
                    this.$store.commit('setSelectedBrand', query.brand);
                }
            }
        }
    }
}
</script>

<style scoped>
</style>
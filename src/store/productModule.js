import Vue from 'vue';
import axios from "axios"

export default {
    state: {
        products: [],
        currentProduct: {},
    },
    mutations: {
        setProducts(state, value) {
            Vue.set(state, 'products', value);
        },
        setCurrentProduct(state, value) {
            Vue.set(state, 'currentProduct', value);
        },
        setSelectedCategory(state, value) {
            if (value === 'All') {
                Vue.set(state, 'selectedCategory', '')
                return;
            }
            Vue.set(state, 'selectedCategory', value);
        },
        setSelectedBrand(state, value) {
            if (value === 'All') {
                Vue.set(state, 'selectedBrand', '')
                return;
            }
            Vue.set(state, 'selectedBrand', value);
        }
    },
    getters: {
        getAllProducts(state) {
            return state.products
        },
        getCurrentProduct(state) {
            return state.currentProduct
        },
        getFilteredProducts(state) {
            let result = state.products;
            if (state.selectedCategory) {
                result = state.products.filter(product => product.category === state.selectedCategory);
            }
            if (state.selectedBrand) {
                result = state.products.filter(product => product.brand === state.selectedBrand);
            }
            if (state.selectedCategory && state.selectedBrand) {
                result = state.products
                    .filter(product =>
                        product.category === state.selectedCategory
                        && product.brand === state.selectedBrand);
            }

            return result;
        },
        getCategories(state) {
            return state.selectedBrand
                ? state.products
                    .filter(product => product.brand === state.selectedBrand)
                    .map(product => product.category)
                : state.products.map(product => product.category)
                
        },
        getBrands(state) {
            return state.selectedCategory
                ? state.products
                    .filter(product => product.category === state.selectedCategory)
                    .map(product => product.brand)
                : state.products.map(product => product.brand)

        },
        // getCategories: state => state.products.map(product => product.category), // As second version
        // getBrands: state => state.products.map(product => product.brand),
    },
    actions: {
        fetchProducts(context) {
            axios.get('https://dummyjson.com/products?limit=100')
                .then(response => context.commit('setProducts', response.data.products))
        }
    }
}
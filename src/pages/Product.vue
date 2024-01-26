<template>
    <v-col cols="4">
        <v-card width="300" @click="openProduct(product.id)">
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-text>
                <v-img width="200" height="200" :src="product.thumbnail" />
                <v-container><b>Category:</b> {{ product.category }}</v-container>
                <v-container><b>Price:</b> ${{ product.price }}</v-container>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script >
import { mapMutations } from "vuex"

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations(['setCurrentProduct']),
        openProduct(id) {
            this.setCurrentProduct(this.product)
            this.$router.push({ name: 'ProductPageView', params: { id } });
        }
    }
}
</script>

<style scoped>
.v-card__title {
    font-size: 16px
}
</style>
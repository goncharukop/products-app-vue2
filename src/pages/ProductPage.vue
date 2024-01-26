<template>
    <v-card>
        <v-card-title>Title: {{ $store.getters.getCurrentProduct.title }}</v-card-title>
        <v-card-text>
            <v-img maxWidth="600" :src="$store.getters.getCurrentProduct.thumbnail" />
            <v-container><b>Brand:</b> {{ $store.getters.getCurrentProduct.brand }}</v-container>
            <v-container><b>Category:</b> {{ $store.getters.getCurrentProduct.category }}</v-container>
            <v-container><b>Description:</b> {{ $store.getters.getCurrentProduct.description }}</v-container>
            <v-container><b>Price:</b> ${{ $store.getters.getCurrentProduct.price }}</v-container>
        </v-card-text>
    </v-card>
</template>

<script >
export default {
}
</script>

<style scoped>
.container {
    max-width: 650px;
    margin: 0;
}
</style>


<template>
    <div>
        <product-site v-for = 'items in checkForUpdate' 
        :key="items.id"
        :id = 'items.id'
        :category = 'items.category'
        :image = 'items.image'
        :amount = 'items.price'
        >
        </product-site>
    </div>    
</template>


<script>

import productSite from './ProductSite.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        productSite,
    },

    computed: {
    ...mapGetters(['checkForUpdate'])
  },
    
}
</script>
<template>
    <div>
        <div class="counter-container">
            <!-- this button shows how many items are in the cart -->
            <general-button class="counter">{{countItems}}</general-button> 
        </div>
        
        <ul>
            <cart v-for = 'items in deliverGeneratedList' 
            :key="items.id"
            :id = 'items.id'
            :category = 'items.category'
            :image = 'items.image'
            :amount = 'items.price'
            >
            </cart>
        </ul>
    </div>    
</template>

<script>
    import cart from './Cart.vue'
    import { mapGetters } from 'vuex';
    import generalButton from '../GeneralDesigns/GeneralButton.vue';

    export default {
        components: {
            cart,
                generalButton,
        },

        computed: {
        ...mapGetters(['deliverGeneratedList']),

        countItems() {
                if(this.$store.state.Count == 0) {
                    return `Oops! You Have not added any items to cart yet`
                }
                return `You have ${this.$store.state.Count} items`
            }
        },

        
    }
</script>

<style scoped>

.counter-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.counter {
    margin-top: 90px;
}

ul{
  padding: 0;
}

</style>
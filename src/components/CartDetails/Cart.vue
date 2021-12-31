<template>
    <li>

        <div class="product-container">
            <div class="about-product">
                <div class="product-img">
                    <!-- <img :src=image></img> -->
                </div>
                <div class="more-info">
                    <div class="description">{{category}}</div>
                    <button class="amount">${{amount}}</button>
                </div>
            </div>
            <div class="add-to-cart">
                <general-button @click="reduceItemsInCart">Remove from cart</general-button>
            </div>

        </div>
  
    </li>
</template>


<script>
import generalButton from '../GeneralDesigns/GeneralButton.vue';
export default {
    components: {
        generalButton,
    },

    data() {
        return {
            importedItems: null,
        }
    },

    props: {
        id: Number,
        category: String,
        image: String,
        amount: Number
    },

    methods: {
        reduceItemsInCart() {
            this.$store.commit('updateSumOfItems', -1)
            this.importedItems = this.$store.getters.deliverGeneratedList
            this.removeFromCart(this.id)
        },
        removeFromCart(selectedId) {
            const remainingItems = this.importedItems.filter(item => item.id !== selectedId);
            this.$store.commit('removeFromList', remainingItems)
            this.importedItems = this.$store.getters.deliverGeneratedList
        }

    }
}
</script>

<style scoped>
li {
    list-style-type: none;
    margin: 20px 12px;
    padding: 20px;
}

li:nth-child(1){
  margin-top: 20px;
}

</style>
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
              <router-link to="/cart">
                <general-button class='add' @click="increaseItemsInCart">Add to cart</general-button>
              </router-link>
            </div>

        </div>
  
    </li>
</template>

<script>

import generalButton from '../GeneralDesigns/GeneralButton.vue'


export default {
    components: {
        generalButton,
    },

    data() {
        return{
            importedItems: null,
        }
    },

    props: {
        id: Number,
        category: String ,
        image: String,
        amount: Number
    },
    
    methods: {
        increaseItemsInCart() {
        // this will increase the number of items added to cart by 1
            this.$store.commit('updateSumOfItems', 1)

        // this is to extract our products from the store in JSON format and push them into
        // our data option
            this.importedItems = this.$store.getters.checkForUpdate
            this.addToCart(this.id)
        },

    // this fctn gets the object whoose id matches the id of the clicked item and 
    // passes it to our $store mutation as a payload so that it can be pushed into
    // the $store.state containing our selected items
        addToCart(selectedId) {
            const addedItem = this.importedItems.find(item => item.id == selectedId);
            addedItem.id = this.$store.state.Count
            this.$store.commit('IncreaseList', addedItem)
        }
    },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;200;300;400;500;600;800;900&display=swap);

.product-container {
    display: flex;
    flex-direction: column;
    padding: 16px 0px 16px 12px;
    background-color: #ecf0f3;
    box-shadow: 2px 5px #1523e62f;
    border-radius: 12px;

}

.about-product {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 4px;
}

.add-to-cart {
    height: 30%;
    width: 100%;
    display: flex;
    text-align: center;
}

.more-info {
    width: 100%;
}

.amount {
    float: right;
    font-weight: 700;
    font-size: 16px;
    padding: 8px;
    border: none;
    background-color: #2ecc71;
    font-family: 'Arima Madurai', cursive;
}

li {
    list-style-type: none;
    margin: 20px 12px;
    padding: 20px;
}

li:nth-child(1){
  margin-top: 100px;
}

.add:hover {
    background-color: green;
}
</style>
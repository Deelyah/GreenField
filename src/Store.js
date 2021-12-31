import { createStore} from 'vuex';

// PRODUCTSPAGE HANDLES FETCHING OF ITEMS FOR SALE, AND HANDING THEM TO COMPONENTS
const productsPage = {
    state() {
        return{
            Items: null,
        }
    },

    mutations: {
        //updateItems changes stored item to whatever was fetched by our 'fetchData' action
        updateItems(state, fetchedData) {
            state.Items = fetchedData
        }

    },

    getters: {
        //checkForUpdate simply returns the present value in the store so as to give them to components that need it.
        checkForUpdate(state) {
            return state.Items
        }
    },

    actions: {
    //fetchData asynchronously fetches data and forces items in the store to only be updated when fetching is complete
        fetchData({commit}) {
            fetch(
                'https://fakestoreapi.com/products'
            ).then(function (response) {
                if (response.ok) {
                    return response.json()
                }
            }).then(function(data) {
        // I commit my mutation now because data has been fetched.
                commit('updateItems', data)
            })
        }
    }
};


// THIS IS TO HANDLE PASSING OF SELECTED ITEMS INTO AND OUT OF THE CART 
const cartItems = {
    state() {
        return{
            generatedCartItems: []
        }
    },

    mutations: {
    //payload will return an object containing details of the item that was selected
        IncreaseList(state, payload){
            state.generatedCartItems.push(payload)
            console.warn(state.generatedCartItems)
        },

        removeFromList(state, payload){
            state.generatedCartItems = payload
            // console.table(state.generatedCartItems)
        },

        
    },

    getters: {
        deliverGeneratedList(state) {
            return state.generatedCartItems
        }
    },

};

const store = createStore({
    modules: {
        productsModule: productsPage,
        selectedItems: cartItems
    },

    state() {
        return{
            Count: 0,
        }
    },

    mutations: {
        updateSumOfItems(state, payload) {
            state.Count = state.Count + payload
            if(state.Count < 0){
                state.Count = 0
            }
            
        }
    },

    actions: {},
    
    getters: {
        finalAmount(state) {
            return state.Count
        }
    }
});


export default store
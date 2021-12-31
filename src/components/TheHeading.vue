<template>
    <div>
        <header>
            <div class="nav-bar">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" 
                class="Pb9hCb" alt="" data-atf="1" data-frt="0">
                <h2>GreenField</h2>
                <div class="nav-route">
                    <router-link to="/products" class="product">Products</router-link>
                    <router-link to="/cart" class="cart">Cart</router-link>
                </div>
            </div>
        </header>
    </div>
</template>


<style scoped>

@import url(https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;200;300;400;500;600;800;900&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@100;200;300;400;500;600;700&display=swap);

*{
    box-sizing: border-box;
    /* font-size: small; */
}

header {
    top: 0;
    padding: 2px 16px 12px 2px;
    background-color: #ecf0f3;  /* #2ecc71 is for emerald green */
    opacity: 100%;
    box-shadow: 2px 4px 2px #d1d9e6;
    position: fixed;
    width: 100%;
}

.nav-bar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: transparent;
}

h2 {
    width: 100%;
    font-family: 'Arima Madurai', cursive;
    font-weight: bold;
    color: #161f6d;
}

.nav-route {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    font-family: 'Fira Code', monospace;
    font-weight: 700;
}

a {
    text-decoration: none;
    padding: 4px 8px;
}

a.router-link-active{
    border-bottom: 2px solid tomato;
}

.product {
    margin-right: 4px;
}

.cart {
    margin-left: 4px;
}
</style>
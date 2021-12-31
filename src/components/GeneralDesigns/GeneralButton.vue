<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;200;300;400;500;600;800;900&display=swap);

button {
    font-family: 'Arima Madurai', cursive;
    border-radius: 5px;
    font-weight: 700;
    background-color: #161f6d;
    font-size: 16px;
    padding: 8px 16px;
    color: white;
    border: 1px solid #ecf0f3;
}

</style>
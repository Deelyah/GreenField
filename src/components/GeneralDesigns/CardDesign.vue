<template>
    <div class='outer-card'>
     <div class='inner-card'>
         <slot></slot>
     </div>
    </div>
</template>

<style scoped>
    .outer-card {
        padding: 8px 16px;
        opacity: 100%;
        width: 100%;
        height: 100px;
    }

    .inner-card {
        background-color: #ecf0f3;
        box-shadow: 2px 5px #1523e62f;
    }
</style>
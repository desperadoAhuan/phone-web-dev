<template>
    <input type="text">
    <input type="text">
    <input type="text">
    <div class="button" v-on:click="addInfo">提交</div>
</template>

<script>
export default {
    name: "AddInfo",
    data() {
        return {

        };
    },
    methods: {
        addInfo: function() {}
    }
};
</script>

<style>
.button {
    width: 20px;
    border-radius: 5px;
    border: 1px solid #9900ee;
}
</style>



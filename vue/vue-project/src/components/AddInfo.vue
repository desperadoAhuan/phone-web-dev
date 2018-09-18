<template>
    <div>
        <input type="text" v-model="id">
        <input type="text" v-model="name">
        <input type="text" v-model="phoneNumber">
        <div class="button" v-on:click="addInfo">提交</div>
    </div>
</template>

<script>
export default {
    name: "AddInfo",
    data() {
        return {
            name: "",
            phoneNumber: "",
            id: ""
        };
    },
    methods: {
        addInfo: function() {
            check(this.name);
            check(this.phoneNumber);
            check(this.id);

            this.$emit("addInfo", {
                name: this.name,
                phoneNumber: this.phoneNumber,
                id: this.id
            });
        }
    }
};
function check(value) {
    if (!value) {
        alert("check input!");
    }
    return value;
}
</script>

<style>
.button {
    width: 20px;
    border-radius: 5px;
    border: 1px solid #9900ee;
}
</style>



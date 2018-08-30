<template>
    <div id="Contact" v-bind:style="contactSyule">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            contactSyule:
                "height: " +
                screen.availHeight +
                "px;width: " +
                screen.availWidth +
                "px"
        };
    }
};
</script>

<style>
</style>

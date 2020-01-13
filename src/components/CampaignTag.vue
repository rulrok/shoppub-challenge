<template>
    <div class="campaign-tag" :style="`background-color: ${color}; color: white;`">
        {{label}}
    </div>
</template>

<script>
    export default {
        name: "CampaignTag",
        props: {
            label: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                default: "#CCC",
            },
        },
    };
</script>

<style scoped>
    .campaign-tag {
        padding: 7px;
        max-width: 150px;
    }
</style>
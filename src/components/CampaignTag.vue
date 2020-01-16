<template>
    <div class="campaign-tag has-text-centered" :style="`background-color: ${color};`">
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
        padding: .35em .75em;
        margin: 0 .35em .35em;
        
        color: white;
    }
    
</style>
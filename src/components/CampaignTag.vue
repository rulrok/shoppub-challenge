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
        padding: .75em 2em;
        line-height: .75em;
        
        font-size: .75em;
        color: white;
    }
    
</style>
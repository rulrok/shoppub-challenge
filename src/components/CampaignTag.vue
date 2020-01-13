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
        padding: .35em .75em;
    }
    
    .campaign-tag + .campaign-tag {
        margin-left: .35em;
    }
</style>
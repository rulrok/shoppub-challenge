<template>
    <div>
        <product-images/>
        
        <CampaignTag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color" />
        
        <p>{{title}}</p>
        
        
    </div>
</template>
<script>
import ProductImages from "./ProductImages";
import CampaignTag from "./CampaignTag";
export default {
    props: {
      id: Number,
      title: String,
      images: Array,
      tags: Array  
    },
    components: {CampaignTag, ProductImages},
};
</script>
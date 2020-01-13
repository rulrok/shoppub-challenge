<template>
    <div>
        <product-images/>
        
        <p>{{title}}</p>
        
        <ProductTag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color" />
    </div>
</template>
<script>
import ProductImages from "./ProductImages";
import ProductTag from "./ProductTag";
export default {
    props: {
      id: Number,
      title: String,
      images: Array,
      tags: Array  
    },
    components: {ProductTag, ProductImages},
};
</script>
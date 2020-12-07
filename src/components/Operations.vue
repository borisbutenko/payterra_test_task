<template lang="pug">
.operations
    operations-layout(v-for="(operations, title, i) in items" :key="i" :title="title")
        operations-item(v-for="operation in operations" v-bind="operation" :key="operation.event_id")
</template>

<script>
import OperationsLayout from "@/layouts/Operations"
import OperationsItem from "./OperationsItem"

export default {
    components: {
        OperationsLayout,
        OperationsItem,
    },

    props: {
        items: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template lang="pug">
.operation-layout
    h5.operation-layout__title {{ title }}
    ul.operation-layout__list: slot
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="stylus" scoped>
.operation-layout
    &__title
        margin: 0
        padding: 0 10px
        font-size: 1rem
        font-weight: normal
        color: var(--color-gray-2)

    &__list
        padding: 0
        list-style-type: none
</style>

<template lang="pug">
view-layout: operations(:items="operationsWithDates")
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

import ViewLayout from "@/layouts/View"
import Operations from "@/components/Operations"

export default {
    components: {
        ViewLayout,
        Operations,
    },

    data () {
        return {
            lastScrollY: 0,
        }
    },

    computed: {
        ...mapState(["isLoading", "isContinueLoading"]),
        ...mapGetters(["operationsWithDates"]),
    },

    watch: {
        isContinueLoading: {
            immediate: true,
            handler (val) {
                let method = val ? "addEventListener" : "removeEventListener"
                window[method]("scroll", this.lazyLoadByScroll)
            },
        },
    },

    created () {
        this.loadOperation()
    },

    methods: {
        ...mapActions(["loadOperation"]),

        lazyLoadByScroll () {
            if (this.lastScrollY > window.scrollY || this.isLoading) {
                return
            }
            if (window.scrollY + window.outerHeight >= document.body.scrollHeight) {
                this.loadOperation()
            }
            this.lastScrollY = window.scrollY
        },
    },
}
</script>

<template lang="pug">
li.operations-item
    details.operations-item__details
        summary.operations-item__summary
            header.operations-item__header
                span.operations-item__title {{ title }} <b>{{ event_id }}</b>
                span.operations-item__amount(:class="isRefund ? 'negative' : 'positive'") {{ amountRUB }}
            footer.operations-item__footer
                time.operations-item__time {{ time }}
                span.operations-item__card {{ card }}
        p.operations-item__description {{ description }}
</template>

<script>
import { format } from "date-fns"

export default {
    props: {
        event_id: Number,
        event_name: String,
        data: null,
        owner_id: Number,
        public_id: String,
        type: String,
        project_id: Number,
        amount: Number,
        commission: Number,
        currency: String,
        status: String,
        ps_info: null,
        description: String,
        additional_params: null,
        account_number: null,
        card_ps_type: null,
        payment_method: null,
        ps_transaction_id: null,
        partner_payment_id: null,
        parent_id: null,
        public_parent_id: null,
        bill_id: null,
        bill_tariff_id: null,
        card_id: null,
        created_at: String,
        updated_at: String,
        refund_email_recipient: null,
        refunded_transaction_description: null,
        senderProperties: Object,
        payLink: String,
        billPaymentEnabled: Boolean,
        multiBill: Boolean,
        onMarketplace: Boolean,
        marketplaceCategoryId: Number,
        billContentUrl: null,
        chargedBack: Boolean,
        declared: Boolean,
        billTariffs: Array,
        attachment: null,
        test: Boolean,
        projectCode: null,
        merchantId: Number,
        projectName: null,
    },

    data () {
        return {
            events: {
                NEW_TRANSACTION: "Заказ",
                BILL_CREATION: "Счет",
                REFUND: "Возврат",
            },
        }
    },

    computed: {
        title () {
            return this.events[this.event_name]
        },

        amountRUB () {
            return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" })
                .format(this.amount)
                .replace(/,00/, "")
        },

        time () {
            return format(new Date(this.created_at), "HH:mm")
        },

        card () {
            if (this.account_number) {
                let num = this.account_number
                return `${num.slice(0, 4)} **** **** ${num.slice(-4)}`
            }
            return this.senderProperties.email
        },

        isRefund () {
            return this.event_name === "REFUND"
        },
    },
}
</script>

<style lang="stylus" scoped>
.operations-item
    position: relative
    margin-top: 10px
    padding: 10px
    background-color: var(--color-purple-2)
    color: var(--color-gray)

    &__summary
        padding-left: 50px

        &::marker,
        &::-webkit-details-marker
            content: ""
            display: none

    &__header,
    &__footer
        display: flex
        justify-content: space-between

    &__title,
    &__amount,
    &__time,
    &__card
        line-height: 26px

    &__amount
        font-size: 18px
        font-weight: 800

        &.positive
            color: var(--color-green)

            &::before
                content: "+ "

        &.negative
            color: var(--color-orange)

            &::before
                content: "- "

    &__description
        margin: 0
        margin-top: 10px
        padding: 10px
        background-color: var(--color-gray)
        border-radius: 4px
        color: var(--color-dark)
        overflow: hidden

        &:empty::after
            content: "Описание отсутстует"

    &::before
        content: ""
        position: absolute
        width: 40px
        height: 40px
        left: 10px
        top: 16px
        border-radius: 50%
        background-color: var(--color-green-2)
        background-repeat: no-repeat
        background-position: center
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3207673/credit-card--white.svg")
</style>

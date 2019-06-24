<template>
    <tr>
        <td style="width: 10em; color: darkgray">
            <slot></slot>
        </td>
        <td>
            {{ this.$store.state.client[this.field] }}
        </td>
    </tr>

</template>

<script>
    export default {
        name: "pii-view",
        props: {
            field: {
                type: String,
                default: 'q1',
            }
        },
    }
</script>



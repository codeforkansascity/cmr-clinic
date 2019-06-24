<template>
    <tr>
    <td style="width: 10em; color: darkgray">
        <slot></slot>
    </td>
    <td>
        {{ value }}
    </td>
    </tr>
</template>

<script>
    export default {
        name: "conviction-view",
        props: {
            i: {
                type: [Number, String],
                value: 0,
            },
            f: {
                type: String,
                default: 'name',
            }
        },
        mounted() {
            console.log(this.i + '|' + this.f);
        },
        computed: {

                value() {
                    const q = this.$store.state.convictions[this.i];
                    return q ? q[this.f] : '';
                },

        },
    }
</script>

<style scoped>

</style>

<template>

    <b-container>
        <div class="row" style="margin-left: 3em;">
            <div class="col-md-12">
                <h5>{{ this.charge.citation }} {{ this.charge.charge }} --
                    {{ this.charge.conviction_charge_type }} {{ this.charge.conviction_class_type }}
                    {{ convicted }} {{ eligible}} {{ please_expunge }}
                </h5>
                <p style="margin-left: 4em"><span>Sentence:</span> {{ this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['sentence'] }}<br>
                <span>Note:</span> {{ this.$store.state.convictions[this.conviction_index].charges[this.charge_index]['notes'] }}</p>
            </div>
        </div>
    </b-container>

</template>

<script>
    export default {
        name: "charge-fields",
        props: {
            charge: {
                type: Object,
                default: {},
            },
            conviction_index: {
                type: [Number, String],
                default: 0
            },
            charge_index: {
                type: [Number, String],
                default: 0
            },
        },

        computed: {
            convicted() {
                return parseInt(this.charge.convicted)? ' -- Convicted' : '';
            },
            eligible() {
                return parseInt(this.charge.eligible)? ', Eligible' : '';
            },
            please_expunge() {
                return parseInt(this.charge.please_expunge) ? ', PleaseExpunge' : '';
            },
        },
      mounted() {
          console.log('mounted charge', this.eligible, this.charge.eligible)
      }
    }
</script>

<style scoped>

</style>

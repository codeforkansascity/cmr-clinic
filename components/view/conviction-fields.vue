<template>
    <b-container>

        <h3>Conviction {{ this.conviction_index + 1 }} - {{ this.$store.state.convictions[this.conviction_index]['case_number']}}</h3>
        <div class="row">
            <div class="col-md-6" style="padding-left: 2em;">
                <table class="table  table-sm">
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="name">What Applicant calls this
                        (or your
                        abreviation)?
                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="arrest_date"
                        style="width: 20em;">Approx.
                        date
                        of arrest per Applicant?
                    </tr>

                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="case_number">What was the case
                        number?

                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="agency">Was the court a Missouri
                        circuit
                        (county) court
                        or a municipal (city) court?
                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="court_city_county">What was the
                        name of the
                        County or
                        City?
                    </tr>
                </table>


            </div>
            <div class="col-md-6" style="padding-left: 2em;">
                <table class="table  table-sm">
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="record_name">What was your name
                        as it
                        appeared on
                        the court’s records?
                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="release_status">Release Status
                        (not
                        required)
                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="approximate_date_of_charge"
                        style="width: 20em;">Date of Charge (Approximate) - any format
                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="release_date"
                        style="width: 10em;">
                        Release
                        Date
                    </tr>
                    <tr is="conviction-view" v-bind:i="this.conviction_index" f="judge">What was the name of the
                        Judge?
                    </tr>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" style="padding-left: 2em;">
                <p>Note: {{ this.$store.state.convictions[this.conviction_index]['notes'] }}</p>
            </div>
        </div>

        <charge-fields
                v-for="(charge, charge_index) in this.$store.getters.chargesForConviction(conviction_index)"
                :key="charge.id"
                :charge_index="charge_index" :charge="charge"
                :conviction_index="conviction_index"

        >
        </charge-fields>

    </b-container>
</template>

<script>
    import ConvictionView from "./conviction-view";
    import ChargeFields from "./charge-fields";

    export default {
        name: "conviction-fields",
        components: {ChargeFields, ConvictionView},
        props: {
            conviction_index: {
                type: [Number, String],
                default: 0
            },
            client_id: {
                type: [Number, String],
                default: 0
            }

        }
    }
</script>

<style scoped>

</style>

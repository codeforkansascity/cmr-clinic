<template>
    <b-container>
        <div class="row">
            <div class="col-md-12" style="padding-left: 1em; ">
                <h2>{{ this.$store.state.client.name }} &nbsp; &nbsp; &nbsp; &nbsp; {{
                    this.$store.state.client.filing_court }} </h2>
                <p>Notes {{ this.$store.state.client.notes }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">
                <table class="table  table-sm">
                    <tr is="pii-view" field="name">Full Name</tr>
                    <tr is="pii-view" field="filing_court">Court</tr>
                    <tr is="pii-view" field="sex" >Sex</tr>
                    <tr is="pii-view" field="race" >Race</tr>
                    <tr is="pii-view" field="previous_expungements">Previous Expungements
                    </tr>

                </table>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <table class="table  table-sm">
                    <tr is="pii-view" field="phone">Phone/Cell</tr>
                    <tr is="pii-view" field="email">Email</tr>
                    <tr is="pii-view" field="dob">Date of birth?</tr>
                    <tr is="pii-view" field="judicial_circuit_number">Judicial Circuit Number</tr>
                    <tr is="pii-view" field="county_name">County Name</tr>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">

                <h5>Driver’s License information</h5>
                <table class="table  table-sm">
                    <tr is="pii-view" field="license_number">License number</tr>
                    <tr is="pii-view" field="license_issuing_state">Issuing state</tr>
                    <tr is="pii-view" field="license_expiration_date">Expiration date</tr>
                </table>

            </div>
            <div class="col-md-6" style="padding-left: 1em;">

                <h5>Current Address</h5>
                <table class="table  table-sm">
                    <tr is="pii-view" field="address_line_1">Address Line 1</tr>
                    <tr is="pii-view" field="address_line_2">Address Line 2</tr>
                    <tr is="pii-view" field="city">City?</tr>
                    <tr is="pii-view" field="state">State?</tr>
                    <tr is="pii-view" field="zip_code">Zip?</tr>
                </table>

            </div>
        </div>


        <conviction-fields v-for="(conviction, conviction_index) in this.$store.getters.allCases"
                                 :key="conviction.id"
                                 :conviction_index="conviction_index" :client_id="client_id">
        </conviction-fields>

        <h3>Circuit/Notify</h3>

        <div class="row">
            <div class="col-md-6" style="padding-left: 1em;">
                <table class="table  table-sm">
                <tr is="pii-view"  field="petitioner_name">Petitioner Name/Address</tr>
                <tr is="pii-view"  field="division_number">Division Number/Address</tr>
                <tr is="pii-view"  field="city_name_here">Municipal Court Name/Address</tr>
                <!--<pii-note-field field="county_name">County of Prosecutor(s)/Address</pii-note-field>-->
                </table>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <table class="table  table-sm">
                <tr is="pii-view"  field="judge_name">Judge Name/Address</tr>
                <tr is="pii-view" field="division_name">Division Name/Address</tr>
                <tr is="pii-view"  field="arresting_county">Arresting County Name/Address</tr>
                <tr is="pii-view"  field="prosecuting_county">County of Prosecutor(s)/Address</tr>
                <tr is="pii-view"  field="arresting_municipality">Arresting Municipality/Address</tr>

                <tr is="pii-view"  field="other_agencies_name">
                    Other Agencies Names and Addreses
                </tr>
                </table>
            </div>
        </div>
    </b-container>
</template>

<script>
    import PiiView from "./pii-view";
    import ConvictionFields from "./conviction-fields";

    export default {
        name: "view-persons-information",
        components: {
            ConvictionFields,
            PiiView
        },
        computed: {
            client_id() {
                return this.$store.state.client.id;
            }
        }
    }
</script>

<style scoped>

</style>

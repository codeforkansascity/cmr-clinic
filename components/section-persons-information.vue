<template>
    <b-container>


        <div class="row">
            <div class="col-md-11" style="padding-left: 1em; ">
                <h2>{{ this.$store.state.client.name }} &nbsp; &nbsp; &nbsp; &nbsp; {{
                    this.$store.state.client.dob }} </h2>
            </div>
            <div>
                <img v-show="isShowing" style="width: 1.8em" v-on:click="isShowing ^= true"
                     src="/images/noun_collapse_2091048_000000.png" class="help-button d-print-none">
                <img v-show="!isShowing" style="width: 1.5em; margin-bottom: 1em" v-on:click="isShowing ^= true"
                     src="/images/noun_expand_1211939_000000.png" class="help-button d-print-none">


            </div>
        </div>

        <div class="row">


        </div>
        <div class="row" v-show="!isShowing">
            <div class="col-md-12" style="padding-left: 1em;">
                {{ this.$store.state.client.notes }}
            </div>
        </div>
        <div class="row" v-show="isShowing">
            <div class="col-md-12" style="padding-left: 1em;">
                <pii-note-field field="notes">Notes on applicant
                </pii-note-field>
            </div>
        </div>
        <div class="row" v-show="isShowing">
            <div class="col-md-6" style="padding-left: 1em;">

                <pii-input field="name">What is your full name?</pii-input>
                <input-select-other field="sex" v-bind:options="sex_options">What is your sex</input-select-other>
                <input-select-other field="race" v-bind:options="race_options">What is your race?</input-select-other>
                <pii-note-field field="previous_expungements">Previous Expungements (Leave blank or enter state court
                    and case number of previous expungements)
                </pii-note-field>


            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <input-date field="dob">Date of birth?</input-date>
                <pii-input field="phone" v-bind:style="phoneStyle">Phone/Cell</pii-input>
                <pii-input field="email" v-bind:style="phoneStyle">Email</pii-input>
            </div>
        </div>

        <div class="row" v-show="isShowing">
            <div class="col-md-6" style="padding-left: 1em;">
                <fieldset>
                    <legend>Driver’s License information</legend>
                    <pii-input field="license_number">License number</pii-input>
                    <input-state field="license_issuing_state">Issuing state</input-state>
                    <input-date field="license_expiration_date">Expiration date</input-date>
                </fieldset>

                <fieldset>
                    <legend>Filing</legend>
                    <pii-input field="county_name">County Name</pii-input>
                    <pii-input field="filing_court">Court where expungement will be filed.</pii-input>
                    <pii-input field="judicial_circuit_number">Judicial Circuit Number</pii-input>
                </fieldset>
            </div>
            <div class="col-md-6" style="padding-left: 1em;">
                <fieldset>
                    <legend>Current Address</legend>
                    <pii-input field="address_line_1">Address Line 1</pii-input>
                    <pii-input field="address_line_2">Address Line 2</pii-input>
                    <pii-input field="city">City?</pii-input>
                    <input-state field="state" style="width: 20em;display: inline-block">State?</input-state>
                    <pii-input field="zip_code"
                               style="width: 10em; display: inline-block; padding-right: 0em;"
                    >Zip?
                    </pii-input>
                </fieldset>
            </div>

            <div class="col-md-6" style="padding-left: 1em;">
                <fieldset>
                    <legend>CMS</legend>
                    <pii-input field="cms_client_number">Client Number</pii-input>
                    <pii-input field="cms_matter_number">Matter Number</pii-input>
                    <input-select-assignment>Person Assigned</input-select-assignment>
                </fieldset>
            </div>
        </div>
        <div class="form-group  d-print-none" v-show="isShowing">
            <div class="row">
                <div class="col-md-10"></div>
                <div class="col-md-2">
                    <button class="float-right btn-success" v-on:click="update" :disabled="savingStatus === 1"
                            type="submit"
                    >
                        Save
                    </button>
                    <span v-show="this.savingMessage">{{ this.savingMessage }}</span>
                </div>
            </div>
        </div>

    </b-container>

</template>
<style>
    fieldset {
        border: 2px solid saddlebrown !important;
        padding: 0 1.4em 1.4em 1.4em !important;
        margin: 0 0 1.5em 0 !important;
        -webkit-box-shadow: 0px 0px 0px 0px #000;
        box-shadow: 0px 0px 0px 0px #000;
    }

    legend {
        font-size: 1.2em !important;
        font-weight: bold !important;
        text-align: left !important;
        width: inherit; /* Or auto */
        padding: 0 10px; /* To give a bit of padding on the left and right */
        border-bottom: none;
    }
</style>

<script>
    import PiiInput from "../components/pii-input";

    import InputDate from "./input-date";
    import InputState from "./input-state";
    import InputSelectOther from "./input-select-other";
    import PiiNoteField from "./pii-note-field";
    import InputSelectAssignment from "./input-select-assignment";

    export default {
        name: "section-persons-information",
        components: {PiiNoteField, InputSelectOther, InputDate, PiiInput, InputState, InputSelectAssignment},
        data() {
            return {
                race_options: [
                    {
                        "name": "Please select a race or other",
                        "abbreviation": ""
                    },
                    {
                        "name": "White",
                        "abbreviation": "White"
                    },
                    {
                        "name": "Black or African American",
                        "abbreviation": "Black or African American"
                    },
                    {
                        "name": "American Indian or Alaska Native",
                        "abbreviation": "American Indian or Alaska Native"
                    },
                    {
                        "name": "Asian",
                        "abbreviation": "Asian"
                    },
                    {
                        "name": "Native Hawaiian or Other Pacific Islander",
                        "abbreviation": "Native Hawaiian or Other Pacific Islander"
                    },
                    {
                        "name": "Other",
                        "abbreviation": "Other"
                    }
                ],
                sex_options: [
                    {
                        "name": "Please indicate your sex",
                        "abbreviation": ""
                    },
                    {
                        "name": "Female",
                        "abbreviation": "Female"
                    },
                    {
                        "name": "Intersex",
                        "abbreviation": "Intersex"
                    },
                    {
                        "name": "Male",
                        "abbreviation": "Male"
                    },
                    {
                        "name": "Other",
                        "abbreviation": "Other"
                    }
                ],
                isShowing: false,
                savingStatus: 0,
                savingMessage: '',
                zipStyle: {
                    width: '12em'
                },
                phoneStyle: {
                    width: '20em'
                }


            }
        },
        methods: {
            async update() {

                this.savingStatus = 1;
                this.savingMessage = "Saving";

                let save_status = await this.$store.dispatch('updateClient', this.$store.state.client);  // Fix: need to pass the correct client_id
                this.savingStatus = 0;
                if (save_status) {
                    this.savingMessage = "Saved";
                    setTimeout(() => {
                        this.savingMessage = "";
                    }, 5000);

                } else {
                    this.savingMessage = "Error";
                }

            },
        },

    }
</script>


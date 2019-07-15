<template>
    <div>

            <v-select v-model="inp_value" label="text" :options="options"></v-select>

    </div>
</template>

<script>
    export default {
        name: "input-charge-select",
        data() {
            return {
                showHelp: false,
            }
        },
        props: {
            i: {
                type: [Number, String],
                default: '0',
            },
            j: {
                type: [Number, String],
                default: '0'
            },
            f: {
                type: String,
                default: 'name',
            },
            options: {
                type: Array,
                default: [
                    {
                        "name": "Option 1",
                        "abbreviation": "Option1"
                    },
                    {
                        "name": "Other",
                        "abbreviation": "Other"
                    }
                ],
            }
        },
        computed: {
            inp_value: {
                get() {
                    let val = this.$store.state.convictions[this.i].charges[this.j][this.f];
                    var obj = null;
                  obj = this.options.find(x => x.value === val);



                    // for (var i=0, iLen=this.options.length; i<iLen; i++) {
                    //     if (this.options[i].id == val) {
                    //         obj = this.options[i];
                    //         break;
                    //     }
                    // }


                    if ( obj ) {
                        return obj.text;
                    } else {
                        return null;
                    }

                },
                set(value) {

                        this.$store.commit('storeChargeField', {
                            conviction_index: this.i,
                            charge_index: this.j,
                            field: this.f,
                            value: value.value
                        });


                },
            },


        },

    }
</script>

<style scoped>

</style>

<template>

    <div>
        <label>
            <slot></slot>
            <img src="/images/FontAwesome47 1.svg" style="margin-left:20px;" v-if="this.$slots.help !== undefined"
                 v-on:click="showHelp = !showHelp"/>
            <transition name="slide-fade">
                <div style="margin-left: 3em; margin-right: 2em; margin-bottom: .5em; margin-top: .5em;"
                     v-if="showHelp && this.$slots.help !== undefined">
                    <slot name="help"></slot>
                </div>
            </transition>
        </label>

        <flat-pickr v-model="question"
                    :config="config"
                    class="form-control"></flat-pickr>

    </div>
</template>

<script>
    export default {
        name: "input-conviction-date-field",
        components: {},
        props: {
            i: {
                type: [Number, String],
                value: 0,
            },
            f: {
                type: String,
                default: 'name',
            },
            config: {
                type: Object,
                default: function () {
                    return {
                        altInput: true,
                        altFormat: "m/d/Y",
                        dateFormat: "Y-m-d",
                        allowInput: true,
                    }
                },
            }
        },
        data: function () {
            return {
                showHelp: false,
            }
        },
        computed: {
            question: {
                get() {
                    const q = this.$store.state.convictions[this.i];

                    let date = null
                    if (q && q[this.f] && q[this.f].length === 10) {

                        date = this.$moment(q[this.f].replace(/-/g, '/')).toDate()
                    }

                    return date;

                },
                set(value) {
                    let db_value = value ? value : null;
                    this.$store.commit('storeConvictionField', {index: this.i, field: this.f, value: db_value});
                },
            },
        },

    }
</script>

<style scoped>

</style>

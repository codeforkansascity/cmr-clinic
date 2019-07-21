<template>
    <div class="mb-3">sss
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <select
                    style="float: right; margin-left: 5px; width: 200px;"
                    v-model="inp_value" class="form-control grid-filter">
                <option v-for="c in options" v-bind:value="c.id"> {{ c.name }}</option>
            </select>

        </div>
    </div>
</template>

<script>
    export default {
        name: "input-select-assignment",
        data() {
            return {
                options: this.$store.state.assignees,
            }
        },
        computed: {
            inp_value: {
                get() {
                    return this.$store.state.client['assignment_id'];
                },
                set(value) {
                    this.$store.commit('storeClientField', {field: 'assignment_id', value: value});
                },
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>

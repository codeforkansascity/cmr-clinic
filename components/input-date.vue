<template>
    <div class="mb-3">
        <div class="form-group" style="padding-left: 2em; padding-right: 2em;">
            <label>
                <slot></slot>
            </label>

            <flat-pickr class="form-control"
                        v-model="inp_value"
                        :config="config"
                        style="width: 10em"/>

        </div>
    </div>
</template>

<script>
    export default {
        name: "input-date",
      components: {},
      props: {
            field: {
                type: String,
                default: 'q1',
            },
            config: {
              type: Object,
              default: function () {
                return {
                  dateFormat: "m/d/Y",
                  allowInput: true,
                }
              },
            }
        },
        computed: {
            inp_value: {
                get() {
                  let date = this.$store.state.client[this.field];

                  if(date && date.length === 10) {
                    date = this.$moment(date).toDate()
                  }

                  return date;
                },
                set(value) {
                    let db_value = value ? value : null;
                    this.$store.commit('storeClientField', {field: this.field, value: db_value});
                },
            },
        },
        data() {
          return {
          }
        }

    }
</script>

<style scoped>

</style>

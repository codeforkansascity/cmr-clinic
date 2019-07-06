<template>
    <div class="container">
        <div style="">
            <view-persons-information></view-persons-information>
        </div>
        </div>

</template>

<script>



    // import SectionPrint from "../components/section-print";

    import ViewPersonsInformation from "../components/view/persons-information";
    export default {
        middleware: 'auth',
        components: {
            ViewPersonsInformation

        },
        beforeCreate() {

            // We should have the client populated, if not take the user to the clients
            // page where they can pick one to edit, or create one.

            if ((typeof this.$store.state.client['name'] === undefined)
                || (Object.keys(this.$store.state.client).length === 0 && this.$store.state.client.constructor === Object)) {
                this.$router.push('/clients')
            }
        },
        computed: {
            client_id() {
                return this.$store.state.client.id;
            }
        },
    }
</script>

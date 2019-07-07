<template>
    <div class="container">
        <h2>Applicants</h2>

        <client-grid :params="{
        Page: '1',
        Search: '',
        sortOrder: '',
        sortKey: '',
        CanAdd: true,
        CanEdit: true,
        CanShow: true,
        CanDelete: true,
        CanExcel: true,
        }"></client-grid>
    </div>
</template>

<script>

    import ClientGrid from "../components/ClientGrid";
    export default {
        name: "client-list",
        components: {
            ClientGrid
        },
        middleware: 'auth',
        data() {
            return {
                gridState: 'wait',
                global_error_message: null,
                key: '',
                clients: []
            }
        },
        mounted() {

        },

    }
</script>

<style scoped>

</style>

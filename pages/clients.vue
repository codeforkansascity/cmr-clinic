<template>
    <div class="container">
        <h2>Applicants</h2>

        <client-grid :params="{
        Page: this.page,
        Search: this.search,
        sortOrder: this.direction,
        sortKey: this.column,
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
                clients: [],
                page: 1,
                search: '',
                column: 'Name',
                direction: -1
            }
        },
        created() {

            let x = this.$store.state.gridParmsClient;
            console.log(x);
            this.page = x.client_page ? x.client_page : 1;
            this.search = x.client_keyword ? x.client_keyword : '';
            this.column = x.client_column ? x.client_column : 'name';
            this.direction = x.client_direction ? x.client_direction : -1;
        },

    }
</script>

<style scoped>

</style>

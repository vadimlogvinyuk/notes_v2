<template>
    <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog"
         aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New user</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">name:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="userName">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"@click="addNewUser">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data () {
            return {
                userName:''
            }
        },
        methods: {
            addNewUser() {
                this.$store.dispatch('addNewUser',this.userName);
                this.userName = "";
            }

        }

    }

</script>


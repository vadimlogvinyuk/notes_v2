<template>
    <div>
        <form v-if="Users.length > 0" class="form-inline my-2 my-lg-0">
            <div class="dropdown">
                <button class="btn btn-secondary "  v-bind:class="{ 'dropdown-toggle': Users.length>1}" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{currentUser.userName}}
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item"   href="#"  v-for="user in Users" @click="OtherUser(user)"> {{user.userName}}</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        computed:{
            Users(){
                return this.$store.getters.Users;
            },
            currentUser() {
                return this.$store.getters.currentUser;
            }
        },
        methods:{
            OtherUser(UserChoise) {
                this.$store.dispatch('OtherUser',UserChoise);
            }
        }
    }

</script>


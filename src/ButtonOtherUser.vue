<template>
    <div>
        <form v-if="Users.length > 0" class="form-inline my-2 my-lg-0">
            <div class="dropdown">
                <button class="btn btn-secondary "  v-bind:class="{ 'dropdown-toggle': Users.length>1}" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{currentUser.userName}}
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item"   href="#"  v-for="user in Users" v-if="currentUser !==user" @click="OtherUser(user)"> {{user.userName}}</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props:['Users','currentUser'],
        name: 'app',

        data () {
            return {

            }
        },
        methods:{
            OtherUser(UserChoise) {
                this.$emit("otherUser",UserChoise)
            }

        }
    }

</script>


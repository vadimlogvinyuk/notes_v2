<template>
    <div>
        <table class="table table-hover">
            <tbody>
            <tr v-for="(n,index) in currentUser.Notes"  v-bind:class="{ 'list-group-item-success': n.act}" >
                <td @click="n.act = !n.act">{{n.note}}</td>
                <td v-if="Users.length > 1" > <div class="dropdown show">
                    <a class="btn btn-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        Share
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#" v-for="user in Users"  v-if="user !== currentUser"
                           @click="shareNote(user,n.note)"> {{user.userName}}</a>

                    </div>
                </div></td>
                <td> <button type="button" class="close" aria-label="Close" @click="currentUser.Notes.splice(index,1)">
                    <span aria-hidden="true">&times;</span>
                </button></td>

            </tr>
            </tbody>
        </table>
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
            shareNote(user,text){

                if (text.length == 0) {
                    alert("please add text ...");
                }else {
                    user.Notes.push({note:text,act: false});
                    text = '';
                }
    }

        }
    }

</script>

<style>



</style>


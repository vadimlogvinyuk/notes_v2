<template>
  <div id="app">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Notes</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <button type="button" class="btn btn-link" data-toggle="modal"
                    data-target="#addUserModal" data-whatever="@mdo">Add user</button>
          </li>
        </ul>

        <app-Input-OtherUser :Users="Users" :currentUser="currentUser" @otherUser="otherUser($event)"></app-Input-OtherUser>
        <app-Input-AllNotes :Users="Users"  :currentUser="currentUser"></app-Input-AllNotes>
      </div>

    </nav>

    <app-Input-User @newUser="setNewUser($event)"></app-Input-User>
    <app-Input-Note   :Users="Users" @newNote="onClickAddNote($event)"></app-Input-Note>

    <app-Output-Notes :Users="Users"  :currentUser="currentUser"></app-Output-Notes>

  </div>
</template>

<script>

  import InputUser from      './ButtonAddUser.vue'
  import InputNote from      './ButtonAddNote.vue'
  import InputOtherUser from './ButtonOtherUser.vue'
  import InpuAllNotes   from './ButtonAllNotesUsers.vue'
  import OutputNotes    from './TableOut.vue'

export default {
  name: 'app',
  data () {
    return {
        Users:[],
        currentUser: {}
    }
  },
    components:{
        'app-Input-User'     : InputUser,
        'app-Input-Note'     : InputNote,
        'app-Input-OtherUser': InputOtherUser,
        'app-Input-AllNotes' : InpuAllNotes,
        'app-Output-Notes'   : OutputNotes


    },
    methods:{
      setNewUser: function (name) {

          if (name == "") {
              alert("Oops, user name is not correct");
              return;
          }

          var userFound = false;
          for (var i=0; this.Users.length > i; i++)
          {
              if (name == this.Users[i].userName) userFound=true;
          }

          if (!userFound) {

              var user = {
                  userName:name,
                  Notes:[]
              };

              this.Users.push(user);
              this.currentUser = user;
          } else {

          }
          name = '';

      },
        onClickAddNote: function (NotesText) {
            if (NotesText.length == 0) {
                alert("please add text ...");
            }else {
                this.currentUser.Notes.push({note:NotesText,act: false});
                NotesText = '';
            }

        },
        otherUser(user) {
          this.currentUser = user;
        }

    }
}
</script>

<style>

  body {
    background: url('./assets/mounting.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }
</style>

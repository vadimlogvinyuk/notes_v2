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
        <app-Input-OtherUser></app-Input-OtherUser>
        <app-Input-AllNotes></app-Input-AllNotes>
      </div>

    </nav>

    <app-Input-User></app-Input-User>
    <app-Input-Note></app-Input-Note>
    <app-Output-Notes></app-Output-Notes>

  </div>
</template>

<script>

  import InputUser from      './ButtonAddUser.vue'
  import InputNote from      './ButtonAddNote.vue'
  import InputOtherUser from './ButtonOtherUser.vue'
  import InpuAllNotes   from './ButtonAllNotesUsers.vue'
  import OutputNotes    from './TableOut.vue'

export default {
    components:{
        'app-Input-User'     : InputUser,
        'app-Input-Note'     : InputNote,
        'app-Input-OtherUser': InputOtherUser,
        'app-Input-AllNotes' : InpuAllNotes,
        'app-Output-Notes'   : OutputNotes,

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

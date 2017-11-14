import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        Users:[],
        currentUser: {},
    },

    mutations: {
        addNewUser(state,userName) {
            if (userName == "") {
                alert("Oops, user name is not correct");
                return;
            }
            var userFound = false;
            for (var i=0; state.Users.length > i; i++)
            {

                if (userName == state.Users[i].userName) userFound=true;
            }

            if (!userFound) {

                var user = {
                    userName:userName,
                    Notes:[]
                };

                state.Users.push(user);
                state.currentUser = user;
            } else {

            }
            userName = '';

        },
        onClickAddNote(state,NotesText) {
            if (NotesText.length == 0) {
                alert("please add text ...");
            }else {
                state.currentUser.Notes.push({note:NotesText,act: false});
                NotesText = '';
            }
        },
        OtherUser(state,OtherUser) {
            state.currentUser = OtherUser;
        }
    },
    actions: {
        addNewUser (context,userName) {
            context.commit('addNewUser',userName)
        },
        onClickAddNote (context,NotesText) {
            context.commit('onClickAddNote',NotesText)
        },
        OtherUser (context,OtherUser) {
            context.commit('OtherUser',OtherUser)
        }
    },
    getters: {
        Users(state) {
            return state.Users;

        },
        currentUser(state) {
            return state.currentUser;

        }


    }

});

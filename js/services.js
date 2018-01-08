
TestFramework.service("UserService", function($http) {
    return {
        getUsers: function() {
            return $http.get("./assets/data/users.json");
        },

        findUser: function(searchUser) {
            this.getUsers().then(function (response) {
                response.data.forEach(function(user){
                    if(user.name.indexOf(searchUser)) {
                        return user;
                    }
                });
            })
        }
    }
})



TestFramework.service("QuestionService", function($http) {
    return {
        getAllQuestions: function() {
            return $http.get("./assets/data/questions.json");
        }
    }
})


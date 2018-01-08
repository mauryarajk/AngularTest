
TestFramework.controller("MainController", function ($scope, $rootScope) {
    $rootScope.appVersion = "1.0.0";
});


TestFramework.controller("HomeController", function ($scope) {

});


TestFramework.controller("LoginController", function ($scope, UserService, $location) {

    $scope.search = "Prem";
    $scope.user = {};
    $scope.user.username = "";
    $scope.user.password = "";

    //$scope.user = UserService.findUser($scope.search);

    $scope.validateLogin = function (user) {

        if (user.username === '') {
            alert("Please enter username");
            return false;
        } else if (user.password === '') {
            alert("Please enter password");
            return false;
        }
        $location.url("/home");
        return true;
    }

});


TestFramework.controller("DashboardController", function ($scope) {

});


TestFramework.controller("TestController", function ($scope, QuestionService) {
    QuestionService.getAllQuestions().then(function (response) {
        $scope.questions = response.data.data;
    })

});


TestFramework.controller("InstructionsController", function ($scope) {

});


TestFramework.controller("ResultController", function ($scope) {

});


TestFramework.controller("UsersController", function ($scope, UserService) {
    $scope.users = [];
    debugger;

    UserService.getUsers().then(function (response) {
        $scope.users = response.data;
    })
});
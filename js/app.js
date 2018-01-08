var TestFramework = angular.module("TestFramework", ["ngRoute", "ngSanitize"]);


TestFramework.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.html",
        controller: "HomeController"
    })

    .when("/login", {
        templateUrl : "partials/login.html",
        controller: "LoginController"
    })
    .when("/logout", {
        templateUrl : "partials/logout.html",
        controller: "LoginController"
    })
    .when("/dashboard", {
        templateUrl : "partials/dashboard.html",
        controller: "DashboardController"
    })
    .when("/test", {
        templateUrl : "partials/test.html",
        controller: "TestController"
    })
    .when("/users", {
        templateUrl : "partials/users.html",
        controller: "UsersController"
    })
    .when("/instructions", {
        templateUrl : "partials/instructions.html",
        controller: "InstructionsController"
    })
    .when("/result", {
        templateUrl : "partials/result.html",
        controller: "ResultController"
    })

    .otherwise({redirectTo:'/'});
    
});

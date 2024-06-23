let myApp = angular.module("myApp" , ["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
    .when(
        "/Trang_Chu",{
            templateUrl: "./View/TrangChu.html",
        }
    )

    .when(
        "/Login",{
            templateUrl: "./View/Login.html",
        }
    )

    .when(
        "/Product",{
            templateUrl: "./View/Product.html",
        }
    )

    .otherwise({
        redirectTo: '/Trang_Chu'
    });
})
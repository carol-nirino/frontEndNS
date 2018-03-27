angular.module('frontendtest')
	.controller('ProductsController', function($scope, $http, $timeout, localStorageService) {
		
		$scope.products = [];
		$scope.cartlist = [];

		$http.get('/data')
		.success(function(retorno) {
			$scope.products = retorno.products;
		})
		.error(function(erro) {
			console.log(erro);
		});

		$scope.addToCart = function(product, qntd) {
			for (var i = 0; i < $scope.cartlist.length; i++) {
		        if(angular.equals($scope.cartlist[i], product)) {
		            return true;
		        }
		    }
		    $scope.cartlist.unshift(product);
		    $scope.setCookie($scope.cartlist);
	    };

	    $scope.removeFromCart = function(index){
	        $timeout( function(){
	            $scope.cartlist.splice(index, 1);
	            $scope.setCookie($scope.cartlist);
	        }, 500 );
	    };    

	    $scope.getTotal = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.cartlist.length; i++){
		        var product = $scope.cartlist[i];
		        total += (product.price);
		    }
		    return total;
		};

		$scope.verifyCookie = function() {
			if(localStorageService.get("cart")){
				$scope.cartlist = localStorageService.get("cart");
			}
		};

		$scope.setCookie = function(list) {
			localStorageService.set("cart", list);
		};

	});
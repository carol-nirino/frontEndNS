angular.module('cartDirective', [])
.directive('cartProducts', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'js/directives/cart-products.html',
      link: function($scope, element, attrs) {

      		$scope.openCartModal = function() {
				$('#cartModal').animate({
					'right': '0px'
				},400);
			},

            $scope.hoverMask = function(val, id){
				if(val){
					$('#cartProd'+id).addClass('overList');
				} else {
					$('#cartProd'+id).removeClass('overList');
				}
			},

			$scope.fadeOutItem = function(id){
				$('#cartProd'+id).addClass('fadeOut');
			},
			
			$scope.closeCartBox = function() {
				$('#cartModal').animate({
					'right': -$('#cartModal').width()
				}, 400);
			}
        }
    };
});
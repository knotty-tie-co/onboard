angular.module('proofViewApp', ['appRoutes', 'MainCtrl', 'DealCtrl', 'ProofCtrl', 'ProfileCtrl', 'ColorCtrl', 'ProductCtrl', 'PersonalInfoCtrl', 'ResumeCtrl', 'ProfileService', 'PatternService', 'ColorService', '720kb.datepicker', 'angular.filter'])
.config(function ($sceProvider) {
	$sceProvider.enabled(false);
})
.run(function($rootScope, $state, $stateParams, $location, $window, ProfileService){
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  $window.ga('create', 'UA-XXXXXXXX-X', 'auto');
  $rootScope.$on('$stateChangeSuccess', function (event) {
      $window.ga('send', 'pageview', $location.path());
      ProfileService.executeTrackingCode('body');
  });
  $rootScope.show_modal = true;
  $rootScope.close_modal=function(){
  	$rootScope.show_modal=false;
  };
  if ($location.search().adSource){
      adSource = $location.search().adSource;
      ProfileService.details.adSource = adSource;
      localStorage.adSource = adSource;
    } else if (localStorage.adSource) {
      ProfileService.details.adSource = localStorage.adSource;
    }
  });
})
.filter('capitalize', function() {
  return function(input, scope) {
    if (input!==null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  };
});


$(document).ready(function(){
	$('#addProof').click(function(){
	 $('#modaldiv').modal('show');  
	 });
});

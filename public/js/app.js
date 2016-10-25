angular.module('proofViewApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'DealCtrl', 'ProofCtrl', 'ProfileCtrl'])
	.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});

	$(document).ready(function(){
     $('#addProof').click(function(){
        $('#modaldiv').modal('show');    
     });
});

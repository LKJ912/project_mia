var $list = $( ".classify ul li" ) ;
$list.each( function( index , value ){
	$( value ).hover( function( ){
		$( this ).css( "background-color" , "#ec0971" ) ;
	} , function( ){
		$( this ).css( "background-color" , "#ff3893" ) ;
	})	
})

$("#banner").scrollBanner({
	images : [
		{src:"img/slide/big1.jpg",title:"",href:"#"},
		{src:"img/slide/big2.jpg",title:"",href:"#"},
		{src:"img/slide/big3.jpg",title:"",href:"#"},
		{src:"img/slide/big4.jpg",title:"",href:"#"}
	],
	scrollTime:3000,
	bannerHeight:"480px",
	iconColor: "#FFFFFF",
	iconHoverColor : "#fa4b9b",
	iconPosition : "right"
});

$( ".bar_left dl" ).each( function( index , value ){
	$( value ).mouseenter( function(  ){		
		$( this ).find( ".bar_right" ).show( ) ;
	})
	$( value ).mouseleave( function(  ){		
		$( this ).find( ".bar_right" ).hide( ) ;
	})
})
//scroll事件



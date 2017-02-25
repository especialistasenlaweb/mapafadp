$(document).ready(function(){
	$("#mapa").goMap({
		//"address":"cali,  fadp",
		latitude:3.484811,
		longitude:-76.506320,
		zoom:18,
		maptype:"roadmap", //roadmap satellite
		markers:[{
			latitude:3.484811,
			 draggable: true, 
			longitude:-76.506320,
			title:"detectando mi casa",
			html:{
				content:"<h1>Mi casa</h1><img width='80' src='css/foto.png'>",
				popup:true
			}
		}],
	});
});
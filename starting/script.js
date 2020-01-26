//window.onload allows script files to be loaded first when web browser starts up
window.onload = function(){

	var hw = document.getElementById('hw');
	hw.addEventListener('click', function(){
		alert('Hello man!');
	});	
	//var aa = prompt('your age?');


};
function openNew(){
	var demo = 'demo1.html';
	window.open(demo);
};
function windowLocation(){
	alert(window.location);
};

function listss(){
	var lists = {'abc' : 123, 'def' : 456, 'ghi' : 789};
	for(key in lists){
		document.write("<li>"+lists[key]+"</li>");
	}


};

$('#createNew').click(function(){
	alert('wer');
	$("#jquerylist li").text("weeeee");
});


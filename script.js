$(document).ready(function(){
	$("#deposit_checking").on("click", add_to_checking);
	$("#deposit_saving").on("click", add_to_saving);
	$("#withdraw_checking").on("click", withdraw_from_checking);
	$("#withdraw_saving").on("click", withdraw_from_saving);

	make_colors();

	function add_to_checking(event){
		var value = $("#text_checking").val();
		value = parseInt(value);
		if (isNaN(value)){
			alert("Number entered is not a number");
		} else {
			total = parseInt($('#check_sum').text()) + value;
			$('#check_sum').text(total.toString()) ;
		}
		event.preventDefault();
		make_colors();
	}

	function add_to_saving(event){
		var value = $("#text_saving").val();
		value = parseInt(value);
		if (isNaN(value)){
			alert("Number entered is not a number");
		} else {
			total = parseInt($('#save_sum').text()) + value;
			$('#save_sum').text(total.toString()) ;
		}
		event.preventDefault();
		make_colors();
	}

	function withdraw_from_saving(event){
		event.preventDefault();
		var value = $("#text_saving").val();
		if (isNaN(value)){
			alert("Number entered is not a number");
		} else {
			withdraw_saving(value);
		}
		make_colors();
	}


	function withdraw_saving(value){
		var total = parseInt($('#save_sum').text()) - value;
		if (total < 0){
			alert("You do not have enough money");
			return false;
		}else{
			$('#save_sum').text(total.toString()) ;
			return true;
		}
	}

	function withdraw_from_checking(event){
		event.preventDefault();
		var value = $("#text_checking").val();
		value = parseInt(value);
		if (isNaN(value)){
			alert("Number entered is not a number");
		} else {
			total = parseInt($('#check_sum').text()) - value;
			if (total < 0){
				if (withdraw_saving(-total)){
					$('#check_sum').text('0') ;
				}				
			} else {
				$('#check_sum').text(total.toString()) ;
			}
		}
		make_colors();
	}

	function make_colors(){
		var val1 = parseInt($('#check_sum').text());
		switch (true){
			case val1 < 100 :
				$('#checking').attr("class", "red")
				break;
			case val1 < 200 : 
				$('#checking').attr("class", "yellow")
				break
			default:
					$('#checking').attr("class", "blue")
					break;
		}
		var val1 = parseInt($('#save_sum').text());
		switch (true){
			case val1 < 100 :
				$('#saving').attr("class", "red")
				break;
			case val1 < 200 : 
				$('#saving').attr("class", "yellow")
				break
			default:
				$('#saving').attr("class", "blue")
					break;
		}

	}

});


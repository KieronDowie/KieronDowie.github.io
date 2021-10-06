$(document).ready(function(){
	content = $('.typing').html()
	$('.typing').html('')
	$('.typing').removeClass('hidden')
	typingSpeed = 65
	pauseSpeed = 500

	type = function(){		
		c = $('.typing').html().length -1;
		if (c == content.length)
		{
			$('.typing').html(content)
		}
		else
		{
			$('.typing').html(content.substring(0,c+1) + "_")		
			if (content[c] == ".")
			{
				setTimeout(type, pauseSpeed)	
			}
			else
			{
				setTimeout(type, typingSpeed)
			}
		}		
	}
	type();

})
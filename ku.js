
/**
 * Created by Administrator on 2017/7/11 0011.
 */
$(function(){})
$('#id')
$('.aa')
$(this)
function $(v){
	if (typeof v === 'function'){
		window.onload = v
	}else if (typeof v === 'string'){
		var first = v.charAt(0);
		switch (first){
			case '#':
				return document.getElementById(v.substring(1))
				break;
			case '.':
				return document.getElementById(v.substring(1))
				break;
		}
	}else if(typeof v === 'object'){
		return v
	}
}
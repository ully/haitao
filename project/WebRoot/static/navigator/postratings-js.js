var post_id=0;var post_rating=0;var post_rating_value=0;var is_being_rated=false;var rating_post_ids=",";var ratings_count=0;var ratings_text="";ratingsL10n.custom=parseInt(ratingsL10n.custom);ratingsL10n.max=parseInt(ratingsL10n.max);ratingsL10n.show_loading=parseInt(ratingsL10n.show_loading);ratingsL10n.show_fading=parseInt(ratingsL10n.show_fading);var rating_option_list=ratingsL10n.rating_option_list;function get_rating_option(b){for(var a=0;a<rating_option_list.length;a++){if(rating_option_list[a].id==b){return rating_option_list[a];}}}function showAnimation(b,a){var c=$(b);i=c.offset(),n=$('<div id="vote-ani" class="'+(a>0?"pos":"neg")+'" style="font-size:10px;z-index:1000">'+(a>0?"+1":"-1")+"</div>");n.appendTo("body"),i.top+=-20,i.left+=35,0>a&&(i.left+=5),n.offset(i).css("display","block").animate({"font-size":"64px",opacity:0,left:"-=40px"},365,"linear",function(){n.remove();});}function rate_post(h,d,f,g,e){post_id=h;(d==1||d==2)?post_rating=1:post_rating=d;ratings_count=f;if(rating_post_ids.indexOf(","+post_id+",")<0){rating_post_ids=rating_post_ids+post_id+",";}else{return false;}post_rating_value=g;var c=getCookie("rated_"+post_id);if(c!=""&&c!=null){return false;}if(d==1){jQuery("#post-ratings-"+post_id).find(".good").find(".scoreTotal").html(ratings_count+1);}else{jQuery("#post-ratings-"+post_id).find(".bad").find(".scoreTotal").html(ratings_count+1);}var a=parseInt(jQuery("#post-ratings-"+post_id).find(".rating_users").val())+1;var b=parseInt(jQuery("#post-ratings-"+post_id).find(".ratings_worth").val());if(g==5){jQuery("#post-ratings-"+post_id).find(".good").find("span.scoreNum").fadeIn().animate({top:"-35px"},"normal").fadeOut(300);}else{if(g==-1){jQuery("#post-ratings-"+post_id).find(".bad").find("span.scoreNum").fadeIn().animate({top:"38px"},"normal").fadeOut(300);}}if(g>0){b=b+1;$("#post-ratings-"+post_id).find(".rating_text").html(a+" 位网友中的<span class='red'> "+b+" </span>位认为值得买！");}else{$("#post-ratings-"+post_id).find(".rating_text").html(a+" 位网友中的<span class='red'> "+b+" </span>位认为值得买！");}$("#post-ratings-"+post_id).find(".good").removeAttr("href").addClass("goodCursor");post_registerAct(post_id,"good");$("#post-ratings-"+post_id).find(".bad").removeAttr("href").addClass("badCurrent");post_registerAct(post_id,"bad");jQuery.ajax({type:"GET",url:ratingsL10n.ajax_url,data:"pid="+post_id+"&rate="+post_rating+"&rating_value="+g,cache:false});return false;}function getCookie(b){var a=document.cookie.match(new RegExp("(^| )"+b+"=([^;]*)(;|$)"));if(a!=null){return unescape(a[2]);}return"";}function post_registerAct(a,b){if(b=="good"){$("#post-ratings-"+a).find(".goodCurrent").mouseover(function(){$(this).find(".scored").css("display","block");$(this).find(".scoreTotal").css("display","none");});$("#post-ratings-"+a).find(".goodCurrent").mouseout(function(){$(this).find(".scoreTotal").css("display","block");$(this).find(".scored").css("display","none");});$("#post-ratings-"+a).find(".goodCursor").mouseover(function(){$(this).find(".scored").css("display","block");$(this).find(".scoreTotal").css("display","none");});$("#post-ratings-"+a).find(".goodCursor").mouseout(function(){$(this).find(".scoreTotal").css("display","block");$(this).find(".scored").css("display","none");});}else{$("#post-ratings-"+a).find(".badCurrent").mouseover(function(){$(this).find(".scored").css("display","block");$(this).find(".scoreTotal").css("display","none");});$("#post-ratings-"+a).find(".badCurrent").mouseout(function(){$(this).find(".scoreTotal").css("display","block");$(this).find(".scored").css("display","none");});$("#post-ratings-"+a).find(".badCursor").mouseover(function(){$(this).find(".scored").css("display","block");$(this).find(".scoreTotal").css("display","none");});$("#post-ratings-"+a).find(".badCursor").mouseout(function(){$(this).find(".scoreTotal").css("display","block");$(this).find(".scored").css("display","none");});}}
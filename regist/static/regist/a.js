// 页面加载完成后执行re()这个函数，然后鼠标焦点聚焦在用户名这个文本框中。
$(document).ready(function(){ 
    var re=function(){
        // var h=$(window).height();
        // var w=$(window).width();
        // $('#user').css('top',((h+160)/2)/2.4);
        // $('#pas').css('left',(w-350)/2);
        $('#user').css('background-color','red');
        $('#pas').css('background-color','pink');
    }
    re();
    $('#user').focus();
    $('#btn').on('click',function(event){
        enter();
    })
})



function enter(){
	var username=$('#user').val();
	var password=$('#pas').val();

	if(username=='' || password==''){
		$('#p1').show();
        $('#p2').hide();
        $('#p3').hide();
	}else{
		$.ajax({
            type:"post",
            url:"/login_action/",
            data:{username:username, password:password},
            dataType:"json",
            cache:false,
            success:function(json){
                if(json['status']==200){
                    $('#p1').hide();
                    $('#p2').show();
                    $('#p3').hide();
                }else{
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').show();
                }

            }
        })

	}

}

// 页面加载完成后执行re()这个函数，然后鼠标焦点聚焦在用户名这个文本框中。
$(document).ready(function(){ 
    var re=function(){
        // var h=$(window).height();
        // var w=$(window).width();
        // $('#user').css('top',((h+160)/2)/2.4);
        // $('#pas').css('left',(w-350)/2);
        $('#user').css('background-color','red');
        $('#pas').css('background-color','pink');
        $('#urlname').css('background-color','pink');
    }
    re();
    $('#user').focus();
    $('#btn').on('click',function(event){
        enter();
    })
    $('#btn2').on('click',function(event){
        send();
    })
})


function send(){
    var urlname=$('#urlname').val();
    var number=$('#number').val();
    var province=$('.left>input').serializeArray();
    var time_weight=$('.right>input').serializeArray();

    console.log(typeof(urlname));
    console.log(typeof(number));
    console.log(typeof(province));
    console.log(typeof(time_weight));
    // console.log(typeof(JSON.stringify(province)));
    // console.log(typeof(JSON.stringify(time_weight)));

    // console.log(typeof(province));

    // console.log("test start");
    // console.log(JSON.stringify(province));
    // console.log("test end");
    // console.log("test time_weight start");
    // console.log(JSON.stringify(time_weight));
    // console.log("test time_weight  end");

    $.ajax({
        type:"post",
        url:'/send_request/',                       
        data:{
            'url':urlname,
            'number':number,
            'province':JSON.stringify(province),
            'time_weight':JSON.stringify(time_weight)
        },
        dataType:"json",
        traditional:true,
        success:function(json){
            if(json['status']==200){
                alert(json['message']);
            }
            else{
                alert('error')
            }
        }
    })
}


function enter(){
	var username1=$('#user').val();
	var password1=$('#pas').val();

	if(username1=='' || password1==''){
		$('#p1').show();
        $('#p2').hide();
        $('#p3').hide();
	}else{
		$.ajax({
            type:"post",
            url:"/login_action/",
            data:{username:username1, password:password1},
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

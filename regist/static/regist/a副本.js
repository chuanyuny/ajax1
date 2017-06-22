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
    var province=[{name:'北京',value:'1.5'},
                                {name:'上海',value:'0.5'},
                                {name:'天津',value:'1.2'},
                                {name:'重庆',value:'0.8'},
                                {name:'黑龙江',value:'0.3'},
                                {name:'吉林',value:'1.7'},
                                {name:'辽宁',value:'1'},
                                {name:'江苏',value:'1'},
                                {name:'山东',value:'1'},
                                {name:'安徽',value:'1'},
                                {name:'河北',value:'1'},
                                {name:'河南',value:'1'},
                                {name:'湖北',value:'1'},
                                {name:'湖南',value:'1'},
                                {name:'江西',value:'1'},
                                {name:'陕西',value:'1'},
                                {name:'山西',value:'1'},
                                {name:'四川',value:'1'},
                                {name:'青海',value:'1'},
                                {name:'海南',value:'1'},
                                {name:'广东',value:'1'},
                                {name:'贵州',value:'1'},
                                {name:'浙江',value:'1'},
                                {name:'福建',value:'1'},
                                {name:'台湾',value:'1'},
                                {name:'甘肃',value:'1'},
                                {name:'云南',value:'1'},
                                {name:'内蒙古',value:'1'},
                                {name:'宁夏',value:'1'},
                                {name:'新疆',value:'1'},
                                {name:'西藏',value:'1'},
                                {name:'广西',value:'1'},
                                {name:'香港',value:'1'},
                                {name:'澳门',value:'1'}
                                ];
    var time_weight=[{name:'00:00-00:59',value:'1'},
                                {name:'01:00-01:59',value:'1'},
                                {name:'02:00-02:59',value:'1'},
                                {name:'03:00-03:59',value:'1'},
                                {name:'04:00-04:59',value:'1'},
                                {name:'05:00-05:59',value:'1'},
                                {name:'06:00-06:59',value:'1'},
                                {name:'07:00-07:59',value:'1'},
                                {name:'08:00-08:59',value:'1'},
                                {name:'09:00-09:59',value:'1'},
                                {name:'10:00-10:59',value:'1'},
                                {name:'11:00-11:59',value:'1'},
                                {name:'12:00-12:59',value:'1'},
                                {name:'13:00-13:59',value:'1'},
                                {name:'14:00-14:59',value:'1'},
                                {name:'15:00-15:59',value:'1'},
                                {name:'16:00-16:59',value:'1'},
                                {name:'17:00-17:59',value:'1'},
                                {name:'18:00-18:59',value:'1'},
                                {name:'19:00-19:59',value:'1'},
                                {name:'20:00-20:59',value:'1'},
                                {name:'21:00-21:59',value:'1'},
                                {name:'22:00-22:59',value:'1'},
                                {name:'23:00-23:59',value:'1'}
                                ];
    $.ajax({
        type:"post",
        url:'/send_request/',                       
        data:{
            'url':urlname,
            'number':number,
            'province':province,
            'time_weight':time_weight
        },
        dataType:"json",
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

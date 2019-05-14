$.ajax({
    type:'post',
    dataType:'json',
    contentType:'application/json',
    url:'http://172.16.5.248:18080',
    data:JSON.stringify(parmams),
    success:function(data){
        
    },
    error:function(){
        
    }
})
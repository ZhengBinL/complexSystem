$(document).keypress(function(e) {
    if((e.keyCode || e.which)==13) {
        checkForm();
    }
});
/*这里是提交表单前的非空校验*/
function checkForm() {
    var first = $("input[name='user']").val();
    var last = $("input[name='password']").val();

    if (first == "" || first == null || first == undefined) {
        alert("账号不能为空");
        return false; /*阻止表单提交*/
    } else if (last == "" || last == null || last == undefined) {
        alert("密码不能为空");
        return false;
    } else {
        var parmams = {
            "clientId": "098f6bcd4621d373cade4e832627b4f6",
            "password": last,
            "userCode": first
        }
        $.ajax({
            url: $ctx+"/sso/login",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(parmams),
            success: function (data) {
                if(data.data.status){
                    window.location.href = '../index/index.html'
                }else{
                    alert(data.data.message)
                }
            },
            error: function () {

            }
        })
    }
}
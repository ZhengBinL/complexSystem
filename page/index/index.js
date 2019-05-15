       // 数字动画
       var Event = {
        number: function(digit) {
        var num_arr = [];
        for(var i = 0; i < digit.length; i++) {
            num_arr.push(digit.charAt(i));
        }
        return num_arr;
        },
        dom: function(arr) {
        var str = '';
        for(var i = 0; i < arr.length; i++) {
            if(parseInt(arr[i]) >= 0) {
            str += '<div class="js-digit digit-container" data-show=' + arr[i] + '>\
                <i>0</i>\
                <i>1</i>\
                <i>2</i>\
                <i>3</i>\
                <i>4</i>\
                <i>5</i>\
                <i>6</i>\
                <i>7</i>\
                <i>8</i>\
                <i>9</i>\
            </div>';
            } else {
            str += '<div class="sign-box l"><span>' + arr[i] + '</span></div>';
            }
        }
        return str;
    },
    animation: function() {
        var height = $(".js-numbs").height();
        $(".js-digit").each(function(i) {
            var num = parseInt($(this).data("show"));
            var scrollTop = 0;
            var scrollTop = height * num;
            $(this).css("margin-top", 0);
            $(this).animate({
            marginTop: -scrollTop
            }, 1500);
        });
        }
    };
    var numb1 = '10240';
    var final_arr1 = Event.number(numb1);
    $("#alarmCount").html(Event.dom(final_arr1));

    var final_arr2 = Event.number('02849');
    $("#handleCount").html(Event.dom(final_arr2));

    var final_arr3 = Event.number('09999');
    $("#unhandleCount").html(Event.dom(final_arr3));

    Event.animation();
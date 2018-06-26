/**
 * Created by newuser on 2018/3/8.
 */
(function($){
    $.waterfallfn=function (selector) {
        var $container = $(selector);
        var $imgBox = $container.children();
        var $lis = $imgBox.children().children();
        // console.log(lis);
        var count = 5;

        var imgBoxWidth = $imgBox[0].offsetWidth;
        var width = $lis[0].offsetWidth;

        var space = 10;

        var arrHeight = [];

        $.each($lis , function(index , item){
            var h = item.offsetHeight;
            if(index < count){
                arrHeight.push(h);
                $(item).css({
                    left:(width+space)*index,
                    top:0
                })
            }else {
                var minHeight = arrHeight[0];
                var minIndex = 0;
                for(var i = 0 ; i < arrHeight.length;i++){
                    if(minHeight > arrHeight[i]){
                        minHeight = arrHeight[i];
                        minIndex = i;
                    }
                }
                arrHeight[minIndex]+=h+space;
                $(item).css({
                    left:(width+space)*minIndex,
                    top:minHeight+space
                })
            }
        });

        /* 找最大值*/
        var maxHeight = arrHeight[0];
        for(var i = 0 ; i < arrHeight.length; i++){
            if(maxHeight<arrHeight[i]){
                maxHeight=arrHeight[i];
            }
        }
        $(".btn").css("top",maxHeight+200)
        console.log(maxHeight);
    }
})(jQuery)

/**
 * Created by newuser on 2018/3/8.
 */
window.$ = {
    waterFall:function(selector){
        /* 1.0 相关的元素*/
        var container = document.querySelector(selector);
        var imgBox = container.childNodes[1];
        var lis = imgBox.childNodes[1].childNodes;
        console.log(lis);
        /*2.0 定义多少列*/
        var column = 5;
        /*3.0 获取列宽*/
        var width = lis[0].offsetWidth;
        /* 容器的宽度*/
        var imgBoxWidth = imgBox.offsetWidth;
        // console.log(width);
        /*4.0 计算列与列的间距*/
        var space = (imgBoxWidth-(column*width))/(column-1);
        console.log(space);
        /*5.0 定义数组存放列的高度*/
        var arrHeight = [];
        /* 定义所有列高度*/
        var h ;
        /*6.0 循环*/
        for(var i = 0 ; i < lis.length;i++){
            h=lis[i].offsetHeight;
            /* 5列*/
            if(i<column){
                /* 第一行的排版*/
                arrHeight.push(h)
                // lis[i].style.left=(width+space)*i +"px";
                lis[i].style.cssText = "left:"+(width+space)*i+"px;top:0px";
            }else {
                console.log(arrHeight);
                /*第二行以上的排版*/
                /*7.0假设最小高度是数组的第一个 */
                var minHeight = arrHeight[0];
                /* 最小高度的索引值*/
                var minIndex = 0;
                /* 循环5列高度 找最小值*/
                for(var j = 0 ; j < arrHeight.length;j++){
                    /* 判断谁是最小值*/
                    if(minHeight>arrHeight[j]){
                        /* 把最小值赋给minHeight*/
                        minHeight = arrHeight[j];
                        /*最小高度的索引值 */
                        minIndex = j ;
                    }
                }
                /* 更新数组*/
                arrHeight[minIndex]+= h+space;
                // console.log(arrHeight);
                // console.log(minHeight);
                // console.log(minIndex);
                /*往最小的那一列追加一张图*/
                lis[i].style.cssText = "left:"+(width+space)*minIndex+"px;top:"+(minHeight+10)+"px";
            }
        }
    }
}
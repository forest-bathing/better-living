$(".rangeTxt").html($("#myRange").val()); // 在 #rangeTxt 顯示 #myRange 的 bar 值
$("#myRange").on("input", function () { // 當輸入 input 時執行以下動作
    $(".rangeTxt").html($(this).val()); // 將本數值顯示在 #rangeTxt 上
});


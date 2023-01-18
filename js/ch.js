const questions = document.querySelectorAll('.question');

questions.forEach(function (question) { //選擇每個QA方格

    const btn = question.querySelector('.question-btn'); //篩選出該QA方格的按鈕元素

    btn.addEventListener('click', function () { //只要該QA方格的按鈕元素有點擊事件

        question.classList.toggle("show-text"); //就在<article class="question">新增/刪除"show-text"的Class
    });
});

questions.forEach(function (item) { //選擇每個QA方格

    if (item !== question) { //只要不是被選擇的article

        item.classList.remove("show-text"); //就將"show-text"的Class移除

    };
});


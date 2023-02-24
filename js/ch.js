const questions = document.querySelectorAll('.question');

questions.forEach(function (question) { //選擇每個QA方格

    const btn = question.querySelector('.question-btn'); //篩選出該QA方格的按鈕元素

    btn.addEventListener('click', function () { //只要該QA方格的按鈕元素有點擊事件

        question.classList.toggle("show-text"); //就在<article class="question">新增/刪除"show-text"的Class
    });
});

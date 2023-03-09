var count = 1.02;
function countDown() {
	// 將秒數寫在指定元素中
	document.getElementById("timeBox").innerHTML = count;
	// 每次執行就減1
	count -= 0.01;
	// 當 count = 0 時跳轉頁面
	if (count == 0.00) {
		location.href = "https://forest-bathing.github.io/better-living/activity_ear.html";
	}
	// 設定每秒執行1次
	setTimeout("countDown()", 500);
}
// 執行 countDown
countDown();
setTimeout("location.href='https://forest-bathing.github.io/better-living/activity_ear.html'", 51000);


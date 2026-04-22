// 1. 定義 API 網址
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 2. 建立 Ajax 請求
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataset = JSON.parse(this.responseText);
        addNewData(dataset);
    }
};

// 3. 渲染資料到表格的函式
function addNewData(dataset) {
    var myTable = document.getElementById("csie");
    dataset.forEach(function(data, index) {
        var row = myTable.insertRow(-1);
        row.insertCell(0).innerHTML = data['title'];
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
    });
}

// 4. 刪除資料的函式 (對應你 HTML 裡的按鈕)
function delOldData() {
    var myTable = document.getElementById("csie");
    // 保留標題列，刪除其餘列
    while (myTable.rows.length > 1) {
        myTable.deleteRow(1);
    }
}

       // 1. 使用你提供的 Unsplash API 網址與 Client ID
        var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';

        // 2. 發送 XMLHttpRequest 取得資料
        function getimg() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', dataUrl, true);
            xhr.send();

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 將回傳的文字解析為 JSON 格式
                    var data = JSON.parse(this.responseText);
                    add_new_img(data);
                } else {
                    console.error('無法連線至 Unsplash API', xhr.status);
                    alert('API 請求失敗，可能是因為流量限制 (Rate Limit) 被觸發了。');
                }
            };
        }

        // 3. 分析 Unsplash JSON 並將照片動態加入網頁
        function add_new_img(dataset) {
            var gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; // 每次按下按鈕先清空畫面上舊的圖片

            // Unsplash 直接回傳圖片陣列，因此 dataset 的長度就是圖片數量
            for (var i = 0; i < dataset.length; i++) {
                // 建立 img 標籤
                var imgElement = document.createElement('img');
                
                // Unsplash 的圖片網址放在 urls.regular 裡面
                imgElement.src = dataset[i].urls.regular;
                imgElement.alt = dataset[i].alt_description || 'Unsplash Image';
                
                // 將設定好的 img 標籤加入到相片牆 div 中
                gallery.appendChild(imgElement);
            }
        }

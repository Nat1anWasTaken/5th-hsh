# 📊 MQTT 即時儀表板系統

一個基於 MQTT 協議的即時訊息同步系統，實現兩個網頁儀表板之間的即時通訊和資料同步。

## 系統特色

- 🔄 **即時訊息同步**：兩個儀表板之間的即時訊息傳遞
- 🌐 **WebSocket 連線**：使用 MQTT over WebSocket 協議
- 📱 **現代化介面**：清潔、響應式的使用者介面
- 🔌 **連線狀態顯示**：即時顯示 MQTT 連線狀態
- 📜 **訊息歷史記錄**：自動捲動的訊息列表
- ⌨️ **便捷操作**：支援 Enter 鍵快速發送訊息
- 🔒 **公開測試環境**：使用公開 MQTT Broker 進行測試

## 技術架構

- **前端**：HTML5、CSS3、JavaScript (ES6)
- **通訊協議**：MQTT over WebSocket (WSS)
- **MQTT Broker**：broker.emqx.io (公開測試用)
- **MQTT 庫**：MQTT.js 5.3.5
- **主題訂閱**：dashboard/sync

## 檔案結構

```
homework3/
├── README.md           # 專案說明文件
├── dashboard1.html     # 儀表板 1 介面
├── dashboard2.html     # 儀表板 2 介面
├── style.css          # 共用樣式表
├── mqtt-client.js     # MQTT 客戶端核心邏輯
├── dashboard1.js      # 儀表板 1 特定功能
└── dashboard2.js      # 儀表板 2 特定功能
```

## 系統架構

### MQTT 連線配置

```javascript
const brokerConfig = {
  hostname: "broker.emqx.io", // 公開 MQTT Broker
  port: 8084, // WebSocket 安全連接埠
  protocol: "wss", // WebSocket Secure
  path: "/mqtt", // MQTT 路徑
};
```

### 訊息格式

```javascript
{
    source: 'Dashboard 1',           // 訊息來源
    content: '使用者輸入的訊息',      // 訊息內容
    timestamp: '2024-01-01T12:00:00Z' // ISO 時間戳
}
```

## 安裝與執行

### 方法一：使用 Python 內建伺服器

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 方法二：使用 Node.js http-server

```bash
# 安裝 http-server
npm install -g http-server

# 執行伺服器
http-server -p 8000
```

### 方法三：使用 Live Server (VS Code)

1. 安裝 Live Server 擴充功能
2. 右鍵點擊任一 HTML 檔案
3. 選擇 "Open with Live Server"

## 使用方法

### 1. 啟動系統

1. 啟動本地網頁伺服器
2. 在瀏覽器中開啟兩個分頁：
   - 儀表板 1：`http://localhost:8000/dashboard1.html`
   - 儀表板 2：`http://localhost:8000/dashboard2.html`

### 2. 測試即時同步

1. 等待兩個儀表板都顯示「Connected」狀態
2. 在任一儀表板的輸入欄位中輸入訊息
3. 按 Enter 鍵或點擊「Send Message」按鈕
4. 訊息會即時出現在兩個儀表板中，並標示來源

### 3. 功能說明

- **訊息輸入**：在文字輸入框中輸入要發送的訊息
- **發送訊息**：點擊按鈕或按 Enter 鍵發送
- **即時接收**：所有連線的儀表板都會即時收到訊息
- **來源識別**：每則訊息都會顯示來源儀表板
- **自動捲動**：訊息列表會自動捲動到最新訊息

## 核心功能詳解

### MQTT 連線管理

- **自動連線**：頁面載入時自動連接到 MQTT Broker
- **重連機制**：連線中斷時自動重新連線
- **狀態監控**：即時顯示連線狀態
- **錯誤處理**：完整的錯誤處理和使用者提示

### 訊息處理

- **JSON 格式**：使用 JSON 格式傳輸結構化資料
- **時間戳記**：每則訊息包含 ISO 格式時間戳
- **來源標識**：清楚標示訊息來源儀表板
- **即時顯示**：收到訊息後立即更新介面

### 使用者介面

- **響應式設計**：適配不同螢幕尺寸
- **狀態指示器**：視覺化連線狀態
- **訊息歷史**：可捲動的訊息列表
- **鍵盤支援**：Enter 鍵快速發送

## 自訂設定

### 修改 MQTT Broker

在 `mqtt-client.js` 中修改 `brokerConfig`：

```javascript
const brokerConfig = {
  hostname: "您的_MQTT_Broker_位址",
  port: 8084,
  protocol: "wss",
  path: "/mqtt",
};
```

### 修改主題名稱

```javascript
// 訂閱主題
client.subscribe("您的_主題_名稱", { qos: 0 });

// 發布主題
client.publish("您的_主題_名稱", JSON.stringify(message), { qos: 0 });
```

### 自訂樣式

在 `style.css` 中可以修改：

- 顏色主題
- 字體設定
- 佈局和間距
- 連線狀態樣式

## 瀏覽器相容性

### 支援的瀏覽器

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### 必要功能支援

- WebSocket API
- ES6 JavaScript
- CSS Grid 和 Flexbox
- JSON 處理

## 故障排除

### 常見問題

1. **無法連接到 MQTT Broker**

   - 檢查網路連線
   - 確認防火牆設定
   - 嘗試使用不同的 MQTT Broker

2. **訊息無法同步**

   - 確認兩個儀表板都顯示「Connected」
   - 檢查瀏覽器控制台的錯誤訊息
   - 重新整理頁面重新連線

3. **頁面無法載入**
   - 確認使用 HTTP 伺服器而非直接開啟檔案
   - 檢查 MQTT.js 庫是否正確載入
   - 查看瀏覽器開發者工具的網路分頁

### 除錯模式

開啟瀏覽器開發者工具的控制台，可以看到：

- MQTT 連線狀態日誌
- 訊息發送和接收記錄
- 錯誤訊息和堆疊追蹤

## 安全性考量

### 目前實作

- 使用公開 MQTT Broker（僅供測試）
- WSS 加密連線
- 基本的訊息格式驗證

### 生產環境建議

- 🔐 **私有 MQTT Broker**：使用私有的 MQTT Broker
- 🔑 **身份驗證**：實作使用者名稱/密碼驗證
- 🛡️ **SSL/TLS**：確保所有通訊都經過加密
- ✅ **訊息驗證**：加強訊息內容驗證和清理
- 🚫 **存取控制**：實作主題層級的存取控制
- 📝 **日誌記錄**：記錄所有連線和訊息活動

## 擴展功能建議

### 進階功能

- 👥 **多使用者支援**：支援多個使用者同時連線
- 🏷️ **訊息分類**：不同類型訊息的分類顯示
- 💾 **訊息持久化**：將訊息儲存到資料庫
- 🔔 **通知系統**：新訊息的桌面通知
- 📊 **統計資訊**：連線數量和訊息統計

### 介面改進

- 🎨 **主題切換**：明暗主題切換
- 😀 **表情符號**：支援表情符號輸入
- 🖼️ **檔案傳輸**：支援圖片和檔案分享
- 🔍 **訊息搜尋**：歷史訊息搜尋功能

## 授權

此專案僅供學習和個人使用。使用公開 MQTT Broker 需遵守相關服務條款。

## 貢獻

歡迎提交問題報告和功能建議！

---

**注意**：此系統使用公開 MQTT Broker 進行測試，請勿傳輸敏感資訊。生產環境請使用私有 Broker 並實作適當的安全措施。

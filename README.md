# 🎓 第五屆黑客松作業集合

這個儲存庫包含了第五屆黑客松的三個主要作業專案，展示了不同的網頁開發技術和應用場景。

## 📁 專案概覽

| 專案                                         | 類型     | 技術棧                            | 說明                      |
| -------------------------------------------- | -------- | --------------------------------- | ------------------------- |
| [Homework 1](#-homework-1---瑪利歐遊戲)      | 遊戲開發 | HTML5 Canvas, JavaScript          | 2D 平台跳躍遊戲           |
| [Homework 2](#-homework-2---植物照護助手)    | AI 應用  | HTML, CSS, JavaScript, Gemini API | AI 驅動的植物照護諮詢系統 |
| [Homework 3](#-homework-3---mqtt-即時儀表板) | 即時通訊 | MQTT, WebSocket, JavaScript       | 即時訊息同步儀表板系統    |

## 🍄 Homework 1 - 瑪利歐遊戲

一個使用 HTML5 Canvas 開發的經典 2D 平台跳躍遊戲，靈感來自瑪利歐系列。

### 主要特色

- 🎮 經典平台遊戲玩法（跳躍、移動、收集）
- 🪙 金幣收集系統和計分機制
- 🚧 障礙物挑戰和碰撞檢測
- 🏗️ 多層平台設計
- ⚡ 流暢的物理引擎（重力、摩擦力）
- 🎨 視覺效果和動畫

### 技術實作

- **前端**：HTML5 Canvas、純 JavaScript
- **物理引擎**：自製重力和碰撞檢測系統
- **圖形渲染**：Canvas 2D API
- **輸入處理**：鍵盤事件監聽

### 快速開始

```bash
cd homework1
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

**控制方式**：← → 移動，空白鍵跳躍

[📖 詳細說明文件](./homework1/README.md)

---

## 🌱 Homework 2 - 植物照護助手

一個基於 AI 的植物照護諮詢應用程式，使用 Google Gemini API 提供專業建議。

### 主要特色

- 🤖 AI 驅動的植物照護建議
- 📝 Markdown 格式回應支援
- 🎨 現代化綠色主題 UI
- ⌨️ 便捷的鍵盤操作
- 📱 響應式設計

### 技術實作

- **前端**：HTML、CSS、JavaScript
- **AI API**：Google Generative Language API (Gemini 2.0 Flash)
- **Markdown 渲染**：Marked.js 庫
- **樣式**：自定義 CSS 與完整 Markdown 樣式

### 快速開始

```bash
cd homework2
# 1. 在 script.js 中設定您的 Gemini API 金鑰
# 2. 啟動伺服器
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

**使用方式**：輸入植物問題，獲得 AI 專業建議

[📖 詳細說明文件](./homework2/README.md)

---

## 📊 Homework 3 - MQTT 即時儀表板

一個基於 MQTT 協議的即時訊息同步系統，實現多個儀表板間的即時通訊。

### 主要特色

- 🔄 即時訊息同步
- 🌐 MQTT over WebSocket 協議
- 📱 現代化響應式介面
- 🔌 即時連線狀態顯示
- 📜 訊息歷史記錄
- ⌨️ 鍵盤快捷操作

### 技術實作

- **前端**：HTML5、CSS3、JavaScript (ES6)
- **通訊協議**：MQTT over WebSocket (WSS)
- **MQTT Broker**：broker.emqx.io (公開測試用)
- **MQTT 庫**：MQTT.js 5.3.5

### 快速開始

```bash
cd homework3
python3 -m http.server 8000
# 開啟兩個分頁：
# http://localhost:8000/dashboard1.html
# http://localhost:8000/dashboard2.html
```

**使用方式**：在任一儀表板輸入訊息，即時同步到所有連線的儀表板

[📖 詳細說明文件](./homework3/README.md)

---

## 🚀 整體專案設置

### 系統需求

- **作業系統**：macOS、Windows、Linux
- **瀏覽器**：Chrome 60+、Firefox 55+、Safari 12+、Edge 79+
- **Python**：3.x 或 2.x（用於本地伺服器）
- **網路**：穩定的網際網路連線（Homework 2 和 3 需要）

### 通用安裝步驟

1. **克隆儲存庫**

   ```bash
   git clone <repository-url>
   cd 5th-hsh
   ```

2. **選擇專案**

   ```bash
   cd homework1  # 或 homework2、homework3
   ```

3. **啟動本地伺服器**

   ```bash
   # 方法一：Python
   python3 -m http.server 8000

   # 方法二：Node.js
   npx http-server -p 8000

   # 方法三：VS Code Live Server
   # 安裝 Live Server 擴充功能，右鍵選擇 "Open with Live Server"
   ```

4. **開啟瀏覽器**
   ```
   http://localhost:8000
   ```

## 🛠️ 開發環境建議

### 推薦工具

- **編輯器**：Visual Studio Code
- **擴充功能**：
  - Live Server（即時預覽）
  - Prettier（程式碼格式化）
  - ES6 String HTML（語法高亮）
- **瀏覽器**：Chrome DevTools（除錯）
- **版本控制**：Git

### 專案結構

```
5th-hsh/
├── README.md              # 主要說明文件
├── homework1/             # 瑪利歐遊戲
│   ├── index.html
│   ├── game.js
│   ├── assets/
│   └── README.md
├── homework2/             # 植物照護助手
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── README.md
└── homework3/             # MQTT 儀表板
    ├── dashboard1.html
    ├── dashboard2.html
    ├── mqtt-client.js
    ├── style.css
    └── README.md
```

## 🎯 學習目標與技能展示

### Homework 1 - 遊戲開發技能

- ✅ HTML5 Canvas 操作
- ✅ JavaScript 物件導向程式設計
- ✅ 遊戲物理引擎實作
- ✅ 事件處理和使用者互動
- ✅ 動畫和視覺效果

### Homework 2 - AI 整合技能

- ✅ RESTful API 整合
- ✅ 非同步 JavaScript (async/await)
- ✅ Markdown 處理和渲染
- ✅ 錯誤處理和使用者體驗
- ✅ 響應式網頁設計

### Homework 3 - 即時通訊技能

- ✅ MQTT 協議應用
- ✅ WebSocket 通訊
- ✅ 即時資料同步
- ✅ 事件驅動程式設計
- ✅ 分散式系統概念

## 🔧 故障排除

### 常見問題

1. **本地伺服器無法啟動**

   - 確認 Python 已正確安裝
   - 檢查連接埠 8000 是否被占用
   - 嘗試使用不同的連接埠：`python3 -m http.server 8080`

2. **API 相關錯誤（Homework 2）**

   - 確認 Gemini API 金鑰已正確設定
   - 檢查網路連線
   - 查看瀏覽器控制台的錯誤訊息

3. **MQTT 連線問題（Homework 3）**

   - 確認網路連線穩定
   - 檢查防火牆設定
   - 嘗試重新整理頁面

4. **瀏覽器相容性問題**
   - 使用現代瀏覽器（Chrome、Firefox、Safari、Edge）
   - 啟用 JavaScript
   - 清除瀏覽器快取

### 除錯技巧

- 開啟瀏覽器開發者工具（F12）
- 查看控制台（Console）的錯誤訊息
- 檢查網路（Network）分頁的請求狀態
- 使用中斷點除錯 JavaScript 程式碼

## 📚 延伸學習資源

### 相關技術文檔

- [HTML5 Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Google Gemini API](https://ai.google.dev/docs)
- [MQTT Protocol](https://mqtt.org/mqtt-specification/)
- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### 推薦教學

- [Canvas 遊戲開發教學](https://developer.mozilla.org/en-US/docs/Games)
- [AI API 整合指南](https://ai.google.dev/tutorials)
- [MQTT 入門教學](https://www.hivemq.com/mqtt-essentials/)

## 🤝 貢獻指南

歡迎提交問題報告和功能建議！

### 如何貢獻

1. Fork 此儲存庫
2. 建立功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交變更 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📄 授權

此專案僅供學習和個人使用。各個作業可能使用不同的第三方服務，請遵守相關服務條款。

## 📞 聯絡資訊

如有任何問題或建議，歡迎透過以下方式聯絡：

- 建立 Issue
- 提交 Pull Request
- 電子郵件聯絡

---

**🎉 感謝您查看第五屆黑客松作業集合！希望這些專案能夠展示不同的網頁開發技術和創意應用。**

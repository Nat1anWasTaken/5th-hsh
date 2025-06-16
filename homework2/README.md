# 植物照護助手 🌱

一個基於 AI 的植物照護諮詢應用程式，使用 Google Gemini API 提供專業的植物照護建議。

## 功能特色

- 🤖 **AI 驅動建議**：使用 Google Gemini 2.0 Flash 模型提供專業植物照護建議
- 📝 **Markdown 支援**：回應內容支援 Markdown 格式，提供更好的閱讀體驗
- 🎨 **現代化 UI**：清新的綠色主題設計，符合植物照護的主題
- ⌨️ **便捷操作**：支援 Enter 鍵快速提交（Shift+Enter 換行）
- 📱 **響應式設計**：適配各種螢幕尺寸

## 技術架構

- **前端**：純 HTML、CSS、JavaScript
- **API**：Google Generative Language API (Gemini 2.0 Flash)
- **Markdown 渲染**：Marked.js 庫
- **樣式**：自定義 CSS，包含完整的 Markdown 樣式支援

## 檔案結構

```
homework2/
├── index.html      # 主要 HTML 結構
├── script.js       # JavaScript 邏輯和 API 整合
├── styles.css      # 樣式表和 Markdown 樣式
└── README.md       # 專案說明文件
```

## 安裝與設置

### 1. 取得 Google Gemini API 金鑰

1. 前往 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 建立新的 API 金鑰
3. 複製 API 金鑰

### 2. 設定 API 金鑰

在 `script.js` 檔案中，將第 2 行的 `API_KEY` 替換為您的實際 API 金鑰：

```javascript
const API_KEY = "您的_API_金鑰_在這裡";
```

### 3. 執行應用程式

由於使用了外部 API，需要透過 HTTP 伺服器執行：

#### 方法一：使用 Python 內建伺服器

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 方法二：使用 Node.js http-server

```bash
# 安裝 http-server
npm install -g http-server

# 執行伺服器
http-server -p 8000
```

#### 方法三：使用 Live Server (VS Code 擴充功能)

1. 安裝 Live Server 擴充功能
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

然後在瀏覽器中開啟 `http://localhost:8000`

## 使用方法

1. **輸入問題**：在文字區域中描述您的植物或詢問照護問題

   - 例如：「我的多肉植物葉子變黃了，該怎麼辦？」
   - 例如：「如何照顧室內的蕨類植物？」

2. **提交查詢**：

   - 點擊「Get Advice」按鈕
   - 或按 Enter 鍵（Shift+Enter 可換行）

3. **查看建議**：AI 會提供格式化的植物照護建議，包括：
   - 具體的照護指示
   - 需要注意的潛在問題
   - 最佳實踐建議

## 功能說明

### AI 建議系統

- 使用 Google Gemini 2.0 Flash 模型
- 專門針對植物照護問題進行優化
- 提供結構化的 Markdown 格式回應

### Markdown 支援

應用程式支援完整的 Markdown 語法，包括：

- 標題 (H1-H6)
- 列表（有序和無序）
- 程式碼區塊
- 表格
- 引用
- 連結和強調

### 使用者體驗

- 載入狀態指示器
- 錯誤處理和使用者友善的錯誤訊息
- 響應式設計適配行動裝置
- 清新的綠色主題設計

## 自訂設定

### 修改 API 設定

在 `script.js` 中可以調整：

- API 端點 URL
- 請求參數
- 提示詞模板

### 樣式自訂

在 `styles.css` 中可以修改：

- 顏色主題
- 字體設定
- 佈局和間距
- Markdown 元素樣式

## 故障排除

### 常見問題

1. **API 金鑰錯誤**

   - 確認 API 金鑰正確設定
   - 檢查 API 金鑰是否有效且未過期

2. **CORS 錯誤**

   - 確保透過 HTTP 伺服器執行，而非直接開啟 HTML 檔案
   - 檢查瀏覽器控制台的錯誤訊息

3. **回應格式錯誤**
   - 檢查網路連線
   - 查看瀏覽器控制台的 API 回應

### 除錯模式

開啟瀏覽器開發者工具的控制台，可以看到：

- API 請求和回應的詳細資訊
- 錯誤訊息和堆疊追蹤

## 授權

此專案僅供學習和個人使用。使用 Google Gemini API 需遵守 Google 的服務條款。

## 貢獻

歡迎提交問題報告和功能建議！

---

**注意**：請勿將包含 API 金鑰的程式碼提交到公開的版本控制系統中。建議使用環境變數或設定檔來管理敏感資訊。

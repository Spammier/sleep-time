# 🌙 睡眠时间计算器

一个基于科学睡眠周期的智能入睡时间计算工具，帮助你获得更好的睡眠质量。

## ✨ 功能特点

- **科学计算**：基于90分钟（1.5小时）的睡眠周期理论
- **智能建议**：自动计算并展示所有可能的入睡时间点
- **实时更新**：修改起床时间后立即刷新建议
- **分类标识**：
  - 🟢 **推荐**：7.5-9小时睡眠（5-6个周期）
  - 🟠 **过短**：1.5-3小时睡眠（1-2个周期）
  - 🔵 **普通**：4.5-6小时睡眠（3-4个周期）
- **现代化UI**：渐变背景、卡片设计、响应式布局
- **移动友好**：完美适配手机和平板设备

## 🧠 睡眠科学原理

### 睡眠周期理论
- 一个完整的睡眠周期约为90分钟
- 包含浅睡眠、深睡眠和REM睡眠阶段
- 在睡眠周期结束时醒来会感觉更清爽

### 计算逻辑
- **入睡时间**：预留30分钟用于入睡
- **睡眠周期**：1-6个完整周期（1.5-9小时）
- **时间限制**：总时长控制在9.5小时以内
- **最佳建议**：推荐5-6个睡眠周期（7.5-9小时）

## 🚀 快速开始

### 在线使用
1. 克隆或下载项目文件
2. 用浏览器打开 `index.html` 文件
3. 设置你的起床时间
4. 查看建议的入睡时间

### 本地服务器运行
```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx serve .

# 然后在浏览器中访问
http://localhost:8000
```

## 📱 使用方法

1. **设置起床时间**：在时间选择器中选择你的起床时间
2. **查看建议**：系统会自动显示所有可能的入睡时间
3. **选择最佳时间**：优先选择标记为"推荐"的绿色卡片
4. **避免过短睡眠**：尽量避免选择标记为"过短"的橙色选项

## 🛠️ 技术实现

### 前端技术栈
- **HTML5**：语义化标签和现代化结构
- **CSS3**：
  - Flexbox/Grid布局
  - CSS渐变和动画
  - 响应式设计
  - 自定义属性
- **原生JavaScript**：
  - ES6+语法
  - DOM操作
  - 事件处理
  - 时间计算算法

### 核心算法
```javascript
// 睡眠时间计算核心逻辑
const sleepCycleDuration = 90; // 分钟
const fallAsleepTime = 30; // 分钟
const totalTimeInBed = cycles * sleepCycleDuration + fallAsleepTime;
const sleepDateTime = new Date(wakeDateTime);
sleepDateTime.setMinutes(sleepDateTime.getMinutes() - totalTimeInBed);
```

## 📁 项目结构

```
sleep-time/
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # JavaScript逻辑
└── README.md          # 项目说明
```

## 🎨 设计特色

- **渐变背景**：紫色到蓝色的优雅渐变
- **卡片设计**：现代化的卡片布局
- **颜色系统**：
  - 推荐选项：绿色渐变
  - 过短睡眠：橙色渐变
  - 普通选项：蓝紫色渐变
- **交互效果**：悬停动画和阴影效果
- **图标系统**：月亮favicon和emoji装饰

## 📊 睡眠建议示例

以起床时间7:00为例：

| 入睡时间 | 睡眠时长 | 周期数 | 建议等级 |
|---------|---------|-------|---------|
| 23:00   | 1.5小时  | 1个   | ⚠️ 过短  |
| 21:30   | 3小时    | 2个   | ⚠️ 过短  |
| 20:00   | 4.5小时  | 3个   | 📘 普通  |
| 18:30   | 6小时    | 4个   | 📘 普通  |
| 17:00   | 7.5小时  | 5个   | ✅ 推荐  |
| 15:30   | 9小时    | 6个   | ✅ 推荐  |

## 🔬 健康提醒

- **推荐睡眠时长**：成年人每晚7-9小时
- **规律作息**：尽量保持固定的睡眠时间
- **睡前准备**：避免蓝光、咖啡因等干扰因素
- **睡眠环境**：保持房间安静、黑暗、凉爽

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发建议
- 遵循现有的代码风格
- 添加必要的注释
- 测试新功能的兼容性
- 更新相关文档

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 💤 关于睡眠

良好的睡眠是健康生活的基础。希望这个小工具能帮助你获得更好的睡眠质量，拥有更充沛的精力！

---

**祝你好梦！** 🌙✨ 
# 睡眠时间计算器部署文档

## 概述
睡眠时间计算器是一个基于科学睡眠周期的 Web 应用，帮助用户计算最佳入睡时间。

## 技术栈
- **前端**: 纯 HTML/CSS/JavaScript
- **Web 服务器**: Nginx (Alpine Linux)
- **容器化**: Docker + Docker Compose
- **反向代理**: Nginx (通过 shared-network)

## 部署信息
- **域名**: https://sleep.doitapp.top
- **容器名**: sleep_time_app
- **网络**: shared-network (外部网络)
- **端口**: 容器内部端口 80 (不对外暴露)

## 文件结构
```
sleep-time/
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # JavaScript 功能
├── nginx.conf         # Nginx 配置
├── Dockerfile         # Docker 构建文件
├── docker-compose.yml # 容器编排配置
└── DEPLOYMENT.md      # 本文档
```

## 部署步骤

### 1. 构建和启动容器
```bash
cd /opt/sleep-time
docker-compose build
docker-compose up -d
```

### 2. 反向代理配置
已在 `/opt/reverse-proxy/nginx-conf/sleep-time.conf` 中配置:
- HTTP 自动重定向到 HTTPS
- SSL 证书配置
- 静态资源缓存优化
- 安全头设置

### 3. 重新加载反向代理
```bash
cd /opt/reverse-proxy
docker-compose exec reverse_proxy nginx -t
docker-compose exec reverse_proxy nginx -s reload
```

## 功能特性
- 🌙 基于90分钟睡眠周期的科学计算
- ⏰ 自动预留30分钟入睡时间
- 📱 响应式设计，支持移动设备
- 🎨 现代化渐变色 UI 设计
- ⚡ 静态资源长期缓存优化

## 访问方式
- **HTTPS**: https://sleep.doitapp.top
- **HTTP**: http://sleep.doitapp.top (自动重定向到 HTTPS)

## 容器管理

### 查看容器状态
```bash
docker ps | grep sleep_time_app
```

### 查看容器日志
```bash
docker logs sleep_time_app
```

### 重启容器
```bash
cd /opt/sleep-time
docker-compose restart
```

### 停止容器
```bash
cd /opt/sleep-time
docker-compose down
```

## 网络配置
- 连接到 `shared-network` 外部网络
- 通过反向代理 `reverse_proxy_app` 访问
- 容器间通过容器名 `sleep_time_app` 通信

## 部署验证
✅ 容器正常运行  
✅ HTTPS 访问正常  
✅ HTTP 重定向正常  
✅ 静态资源加载正常  
✅ 功能完整可用  

## 维护说明
- 应用为纯静态文件，无需数据库
- 定期检查容器运行状态
- SSL 证书由反向代理统一管理
- 静态资源已设置1年缓存期 
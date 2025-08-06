# 🚀 部署指南

## 快速开始

### 方法一：使用启动脚本（推荐）
1. 双击运行 `start.bat` 文件
2. 脚本会自动检查Node.js并启动项目
3. 访问 `http://localhost:3000`

### 方法二：手动启动
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 在线部署

### Vercel部署（推荐）
1. **准备GitHub仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/项目名.git
   git push -u origin main
   ```

2. **部署到Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择你的GitHub仓库
   - 点击 "Deploy"

3. **获得在线URL**
   - 部署完成后，Vercel会提供类似 `https://your-project.vercel.app` 的URL
   - 这个URL就是您的个人网站地址

### Netlify部署
1. 将代码推送到GitHub
2. 访问 [netlify.com](https://netlify.com)
3. 点击 "New site from Git"
4. 选择GitHub仓库
5. 构建命令：`npm run build`
6. 发布目录：`.next`
7. 点击 "Deploy site"

### GitHub Pages部署
1. 将代码推送到GitHub
2. 在仓库设置中启用GitHub Pages
3. 选择部署分支（通常是main）
4. 等待部署完成

## 项目特性

✅ **已完成的功能**
- 🎨 苹果设计美学
- 📱 响应式设计
- ⚡ 高性能优化
- 🎭 流畅动画效果
- 🔍 SEO优化
- 📊 社交媒体集成
- 💼 作品展示
- 📞 联系表单

## 自定义内容

### 修改个人信息
编辑 `src/data/` 目录下的文件：
- `social-links.ts` - 社交媒体链接
- `projects.ts` - 作品展示
- `skills.ts` - 技能列表

### 修改样式
- 主样式：`src/app/globals.css`
- 组件样式：各组件文件中的className
- 主题配置：`tailwind.config.js`

### 修改页面内容
- 主页内容：`src/app/page.tsx`
- 各区块组件：`src/components/sections/`

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: React Icons, Lucide React
- **设计**: 苹果设计美学

## 支持

如果遇到问题：
1. 确保Node.js版本 >= 18
2. 检查网络连接
3. 清除缓存：`npm cache clean --force`
4. 删除node_modules并重新安装：`rm -rf node_modules && npm install`

## 许可证

MIT License - 可自由使用和修改 
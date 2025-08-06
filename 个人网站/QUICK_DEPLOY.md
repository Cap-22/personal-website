# 🚀 快速获得在线预览

## 方法一：Vercel部署（推荐，5分钟完成）

### 步骤1：准备GitHub仓库
1. 访问 [GitHub](https://github.com)
2. 创建新仓库，命名为 `personal-website`
3. 上传项目文件到仓库

### 步骤2：部署到Vercel
1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择您的GitHub仓库
5. 点击 "Deploy"

### 步骤3：获得在线URL
- 部署完成后，您会获得类似 `https://your-project.vercel.app` 的URL
- 这个URL就是您的个人网站地址

## 方法二：Netlify部署

1. 访问 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 选择GitHub，连接您的仓库
4. 构建命令：`npm run build`
5. 发布目录：`.next`
6. 点击 "Deploy site"

## 方法三：GitHub Pages

1. 在GitHub仓库设置中启用Pages
2. 选择部署分支（main）
3. 等待部署完成
4. 获得 `https://用户名.github.io/仓库名` 的URL

## 项目特性预览

✅ **已完成的功能**
- 🎨 苹果设计美学界面
- 📱 完美响应式设计
- ⚡ 高性能加载
- 🎭 流畅动画效果
- 💼 作品展示区域
- 📞 联系表单
- 🔗 社交媒体集成

## 技术栈
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## 自定义内容
部署后，您可以编辑以下文件来自定义内容：
- `src/data/social-links.ts` - 社交媒体链接
- `src/data/projects.ts` - 作品展示
- `src/data/skills.ts` - 技能列表

## 支持
如果遇到部署问题，请检查：
1. GitHub仓库是否公开
2. 构建命令是否正确
3. Node.js版本是否兼容（>=18） 
# 🚀 5分钟获得在线预览 - 详细步骤

## 第一步：配置Git（如果还没配置）

```bash
git config --global user.name "您的GitHub用户名"
git config --global user.email "您的邮箱@example.com"
```

## 第二步：创建GitHub仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名：`personal-website`
4. 选择 "Public"
5. 不要勾选任何选项
6. 点击 "Create repository"

## 第三步：推送代码到GitHub

在项目目录中运行：

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Personal website"

# 添加远程仓库（替换为您的GitHub仓库URL）
git remote add origin https://github.com/您的用户名/personal-website.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## 第四步：部署到Vercel

1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择您的 `personal-website` 仓库
5. 点击 "Deploy"

## 第五步：获得在线URL

部署完成后，您会获得类似这样的URL：
```
https://personal-website-xxx.vercel.app
```

这个URL就是您的个人网站地址！

## 项目预览

您的网站将包含以下功能：
- 🎨 苹果设计美学界面
- 📱 完美响应式设计
- 💼 作品展示区域
- 📞 联系表单
- 🔗 社交媒体集成
- ⚡ 高性能加载
- 🎭 流畅动画效果

## 自定义内容

部署后，您可以编辑以下文件来自定义：
- `src/data/social-links.ts` - 社交媒体链接
- `src/data/projects.ts` - 作品展示
- `src/data/skills.ts` - 技能列表

## 技术支持

如果遇到问题：
1. 确保GitHub仓库是公开的
2. 检查Git配置是否正确
3. 确保所有文件都已推送 
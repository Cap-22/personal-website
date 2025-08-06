# ForAI Design Studio Clone

这是一个基于 [forai.design](https://forai.design) 设计的现代化个人网站克隆项目，采用苹果设计美学和最佳实践。

## 🚀 特性

- **苹果设计美学** - 采用苹果公司的设计语言和色彩方案
- **响应式设计** - 完美适配桌面、平板和移动设备
- **流畅动画** - 使用 Framer Motion 实现优雅的动画效果
- **自定义 SVG 图标** - 精心设计的 Logo 和图标系统
- **现代化技术栈** - Next.js 14, TypeScript, Tailwind CSS
- **SEO 优化** - 完整的元数据和结构化数据

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React + 自定义 SVG
- **字体**: Inter (Google Fonts)

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 主页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── ui/               # 基础 UI 组件
│   ├── sections/         # 页面区块组件
│   └── layout/           # 布局组件
├── data/                 # 静态数据
├── lib/                  # 工具函数
└── icons/                # 自定义 SVG 图标
```

## 🎨 设计系统

### 色彩方案
- **主色**: 苹果蓝 (#007aff)
- **背景**: 纯白 (#ffffff) 和浅灰 (#f5f5f7)
- **文字**: 深灰 (#1d1d1f) 和中灰 (#8e8e93)

### 字体系统
- **标题**: Inter Bold
- **正文**: Inter Regular
- **代码**: SF Mono

### 间距系统
- 基础单位: 8px
- 标准间距: 16px, 24px, 32px, 48px, 64px

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📱 页面结构

1. **Hero Section** - 主标题和 CTA
2. **Projects** - 作品展示
3. **Testimonials** - 客户评价
4. **Mission** - 公司使命
5. **Contact** - 联系表单

## 🎯 组件说明

### UI 组件
- `Button` - 苹果风格按钮组件
- `Card` - 卡片容器组件
- `Logo` - 自定义 Logo SVG

### 页面组件
- `Header` - 导航栏
- `Hero` - 主页英雄区域
- `Projects` - 项目展示
- `Testimonials` - 评价轮播
- `Mission` - 使命说明
- `Contact` - 联系表单
- `Footer` - 页脚

## 🎨 自定义设计

### Logo 设计
- 简约的几何图形组合
- 渐变背景效果
- 响应式缩放

### 动画效果
- 页面滚动视差
- 悬停交互反馈
- 加载状态动画
- 平滑过渡效果

## 📈 性能优化

- 图片懒加载
- 代码分割
- 字体优化
- CSS 压缩
- 静态资源缓存

## 🔧 配置说明

### Tailwind CSS
- 自定义苹果色彩方案
- 响应式断点配置
- 动画和过渡效果

### Next.js
- App Router 配置
- 图片优化设置
- SEO 元数据

## 📄 许可证

MIT License

## 🙏 致谢

- 设计灵感来自 [forai.design](https://forai.design)
- 图标来自 [Lucide React](https://lucide.dev)
- 动画库 [Framer Motion](https://www.framer.com/motion/)

---

**注意**: 这是一个学习和展示项目，仅用于演示目的。 
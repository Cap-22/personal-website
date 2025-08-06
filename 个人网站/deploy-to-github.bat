@echo off
echo ========================================
echo    个人网站 GitHub 部署助手
echo ========================================
echo.

echo 正在检查Git是否安装...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git未安装
    echo.
    echo 请先安装Git:
    echo 1. 访问 https://git-scm.com/
    echo 2. 下载并安装Git for Windows
    echo 3. 重启终端后重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo ✅ Git已安装
echo.

echo 正在初始化Git仓库...
git init
git add .
git commit -m "Initial commit: Personal website with Apple design"

echo.
echo ✅ 本地Git仓库已创建
echo.
echo 下一步操作：
echo 1. 在GitHub上创建新仓库
echo 2. 运行以下命令推送代码：
echo    git remote add origin https://github.com/你的用户名/仓库名.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. 然后访问 https://vercel.com 部署
echo.
pause 
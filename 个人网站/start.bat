@echo off
echo ========================================
echo    ForAI Design Studio 个人网站
echo ========================================
echo.
echo 正在检查Node.js安装...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js未安装
    echo.
    echo 请先安装Node.js:
    echo 1. 访问 https://nodejs.org/
    echo 2. 下载并安装最新的LTS版本
    echo 3. 重启终端后重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js已安装
echo.
echo 正在安装依赖...
npm install

if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo ✅ 依赖安装完成
echo.
echo 正在启动开发服务器...
echo.
echo 🌐 网站将在浏览器中自动打开
echo 📍 本地地址: http://localhost:3000
echo.
echo 按 Ctrl+C 停止服务器
echo.
npm run dev 
#!/bin/bash
# 同一WiFi下多人前端开发设置脚本

echo "🚀 设置同一WiFi下多人前端开发环境"
echo "=================================="

# 获取本机IP地址
IP_ADDRESS=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | head -1 | awk '{print $2}')
echo "📡 你的局域网IP地址: $IP_ADDRESS"
echo "🌐 访问地址: http://$IP_ADDRESS:3000"
echo ""

# 检查Vite配置
echo "🔧 检查Vite配置..."
if grep -q "host: '0.0.0.0'" vite.config.ts; then
    echo "✅ Vite已配置为允许局域网访问"
else
    echo "❌ Vite未配置局域网访问，正在更新配置..."
    cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',  // 允许局域网访问
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
})
EOF
    echo "✅ Vite配置已更新"
fi

# 检查开发服务器状态
echo ""
echo "🔍 检查开发服务器状态..."
if netstat -an | grep -q "\.3000.*LISTEN"; then
    echo "✅ 开发服务器正在运行 (端口: 3000)"
else
    echo "⚠️  开发服务器未运行"
    echo "   启动命令: npm run dev"
fi

# 检查依赖
echo ""
echo "📦 检查项目依赖..."
if [ -d "node_modules" ]; then
    echo "✅ Node.js依赖已安装"
else
    echo "⚠️  Node.js依赖未安装"
    echo "   安装命令: npm install"
fi

# 显示访问信息
echo ""
echo "📋 其他PC用户访问指南"
echo "===================="
echo "1. 确保所有PC连接同一WiFi"
echo "2. 在其他PC浏览器中访问:"
echo "   🔗 http://$IP_ADDRESS:3000"
echo ""
echo "3. 实时查看效果:"
echo "   ✅ 任何代码修改都会自动刷新所有设备"
echo ""
echo "4. 编辑代码方式:"
echo "   A. 共享文件夹 (推荐)"
echo "      - macOS: 系统设置 → 共享 → 文件共享"
echo "      - 添加文件夹: $(pwd)"
echo "      - 其他PC访问: smb://$IP_ADDRESS"
echo ""
echo "   B. Git协作 (专业)"
echo "      - git init"
echo "      - git add ."
echo "      - git commit -m 'Initial commit'"
echo "      - 创建GitHub仓库并推送"
echo ""

# 防火墙检查
echo "🔒 防火墙检查"
echo "------------"
echo "如果其他PC无法访问，可能需要配置防火墙:"
echo ""
echo "macOS防火墙:"
echo "1. 系统设置 → 隐私与安全性 → 防火墙"
echo "2. 点击'防火墙选项...'"
echo "3. 确保Node.js/Vite在允许列表中"
echo ""
echo "临时关闭防火墙测试:"
echo "  sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off"
echo "  (测试后记得重新开启)"
echo "  sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on"
echo ""

# 创建.gitignore（如果不存在）
if [ ! -f ".gitignore" ]; then
    echo "📁 创建.gitignore文件..."
    cat > .gitignore << 'EOF'
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# dotenv environment variables file
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build output
dist/
build/
out/

# Debug files
*.pdb

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Temporary files
tmp/
temp/
EOF
    echo "✅ .gitignore文件已创建"
fi

echo ""
echo "🎯 快速开始"
echo "=========="
echo "1. 分享这个地址给团队成员:"
echo "   🌐 http://$IP_ADDRESS:3000"
echo ""
echo "2. 设置文件夹共享:"
echo "   🖥️  系统设置 → 共享 → 文件共享"
echo ""
echo "3. 团队成员:"
echo "   a. 浏览器访问上述地址查看实时效果"
echo "   b. 通过文件共享编辑代码"
echo "   c. 保存后自动刷新所有设备"
echo ""
echo "📚 详细指南请查看: SHARED_EDITING_GUIDE.md"
echo ""
echo "✨ 设置完成！现在可以开始多人协作了！"
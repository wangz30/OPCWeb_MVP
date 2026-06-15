# 代码安全检查包 - 云上 OPC 社区

## 📦 包内容说明

本安全检查包包含以下核心源代码和配置文件：

### 1. 源代码目录
- **src/** - 完整的 React/TypeScript 源代码
  - components/ - UI 组件和认证组件
  - pages/ - 所有页面组件
  - assets/ - 静态资源
  - styles/ - 样式文件
  - types/ - TypeScript 类型定义
  - data/ - 模拟数据
  - lib/ - 工具函数

### 2. 配置文件（安全检查重点）
- **package.json** - 项目依赖配置（⚠️ 重点检查依赖安全性）
- **vite.config.ts** - Vite 构建工具配置
- **tsconfig.json** - TypeScript 配置
- **eslint.config.js** - ESLint 代码规范配置
- **tailwind.config.js** - Tailwind CSS 配置

### 3. 入口文件
- **index.html** - 主应用入口
- **backend.html** - 后台管理入口

---

## 🔍 安全检查重点建议

### A. 依赖安全（高危）
检查 `package.json` 中的依赖：
- React 版本安全性
- React Router DOM 配置
- 第三方库的已知漏洞

### B. 认证与授权（高危）
检查 `src/components/auth/`：
- LoginForm.tsx - 登录逻辑
- RegisterForm.tsx - 注册逻辑
- password-strength.tsx - 密码强度验证

### C. XSS 防护（高危）
检查所有用户输入处理：
- 表单输入验证
- URL 参数处理
- dangerouslySetInnerHTML 使用（如有）

### D. API 安全（中危）
检查数据请求：
- API 调用方式
- 敏感信息处理
- CORS 配置

### E. 构建配置（中危）
检查 `vite.config.ts`：
- 环境变量暴露
- 代理配置
- 构建优化设置

---

## 📝 项目技术栈

- **框架**: React 19.2.4
- **语言**: TypeScript 5.9.3
- **构建工具**: Vite 8.0.0
- **路由**: React Router DOM 7.13.1
- **UI**: Tailwind CSS 3.4.0
- **图标**: Lucide React 0.577.0

---

## ⚠️ 注意事项

1. **node_modules/** 未包含在包中（体积过大）
   - 安全检查工具会根据 package.json 分析依赖安全性
   
2. **图片等静态资源** 未包含（非代码文件）
   - 如需完整项目，请从 GitHub 下载完整代码

3. **文档和演示文件** 未包含
   - 仅包含核心源代码和配置

---

## 📬 联系信息

如需完整项目或更多信息，请联系项目负责人。

---

**生成日期**: 2026-04-24  
**项目版本**: 0.0.0  
**检查包版本**: 1.0.0

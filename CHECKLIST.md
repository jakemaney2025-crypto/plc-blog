# ✅ PLC 博客部署检查清单

## 📋 本地开发环境 (已完成 ✓)

- [x] Node.js 和 npm 已安装
- [x] Next.js 14 项目已创建
- [x] Tailwind CSS 已配置
- [x] TypeScript 已配置
- [x] 示例博客文章已创建 (3 篇)
- [x] 暗黑模式已实现
- [x] 响应式设计已完成
- [x] 本地开发服务器运行正常
  - 运行于: http://localhost:3000

## 🔧 Git 和代码 (已完成 ✓)

- [x] Git 仓库已初始化
- [x] .gitignore 已配置
- [x] 代码已本地提交
- [x] 提交历史完整 (5 个提交)
- [x] 快速推送脚本已创建 (push.sh)
- [x] GitHub Actions 工作流已配置

## 📚 文档 (已完成 ✓)

- [x] README.md 已更新
- [x] DEPLOY_STEPS.md (详细部署指南)
- [x] DEPLOYMENT.md (技术文档)
- [x] 此清单文件

## 🚀 部署前的操作

### 步骤 1: GitHub (预计 1-2 分钟)

- [ ] 访问 https://github.com/new
- [ ] 创建仓库: `plc-blog`
- [ ] 设置为 Public
- [ ] 在终端执行:
  ```bash
  cd /home/jake/PLC-blog
  git remote add origin https://github.com/jakemaney2025-crypto/plc-blog.git
  git branch -M main
  git push -u origin main
  ```
- [ ] 验证代码已推送到 GitHub
  - 访问: https://github.com/jakemaney2025-crypto/plc-blog

### 步骤 2: Vercel (预计 2-5 分钟)

- [ ] 访问 https://vercel.com
- [ ] 使用 GitHub 账户注册/登录
- [ ] 授权 Vercel 访问 GitHub
- [ ] 创建新项目: "Add New" → "Project"
- [ ] 导入 `plc-blog` 仓库
- [ ] 部署设置保持默认
- [ ] 点击 "Deploy"
- [ ] 等待部署完成
- [ ] 记录 Vercel 临时域名:
  - 格式: `https://plc-blog-xxxxx.vercel.app`
  - 保存: __________________

### 步骤 3: 自定义域名 (预计 15 分钟 - 48 小时)

- [ ] 在 Vercel 进入: Settings → Domains
- [ ] 点击 "Add Domain"
- [ ] 输入你的域名: `jakemaney88.dpdns.org`
- [ ] 点击 "Add"
- [ ] 选择 "Use Nameserver"
- [ ] 复制 Vercel 提供的 4 个 Nameserver 地址:
  ```
  1. _____________________________
  2. _____________________________
  3. _____________________________
  4. _____________________________
  ```
- [ ] 登录你的域名提供商账户
- [ ] 找到 DNS/Nameserver 设置
- [ ] 替换为 Vercel 提供的 Nameserver
- [ ] 保存更改
- [ ] 等待 DNS 生效 (15 分钟 - 48 小时)
- [ ] 测试域名:
  - 访问: https://jakemaney88.dpdns.org
  - 验证页面加载正常

## ✨ 部署完成标志

完成以上所有步骤后，你应该看到:

- [x] 代码在 GitHub 上
- [x] 网站在 Vercel 上运行
- [x] 自定义域名正常工作
- [x] 可以访问: https://jakemaney88.dpdns.org

## 🎉 部署后的维护

### 定期任务

- [ ] 定期添加新文章
- [ ] 监控网站性能 (Vercel Analytics)
- [ ] 检查部署日志是否有错误
- [ ] 更新依赖 (每月): `npm update`

### 发布新文章流程

```bash
# 1. 创建文章
nano src/content/posts/article-name.md

# 2. 推送到 GitHub
./push.sh "Add: Article Title"

# 3. Vercel 自动部署 (2-3 分钟)

# 4. 验证更新
# 访问: https://jakemaney88.dpdns.org/blog
```

### 监控部署

- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Actions: https://github.com/jakemaney2025-crypto/plc-blog/actions

## 🆘 故障排除

### 部署失败？

1. 检查 Vercel 部署日志
2. 本地运行 `npm run build` 测试
3. 查看 GitHub Actions 日志
4. 参考 DEPLOY_STEPS.md 的常见问题部分

### DNS 未生效？

1. 检查 DNS 记录是否正确配置
2. 使用在线工具验证: https://mxtoolbox.com/
3. 等待更长时间 (DNS 缓存最多 48 小时)
4. 清除浏览器缓存和 Cookie

### 本地开发中文章不显示？

1. 确保文件在 `src/content/posts/` 目录
2. 文件必须以 `.md` 结尾
3. 检查 Front Matter 格式是否正确
4. 重启开发服务器: Ctrl+C，然后 `npm run dev`

## 📞 获取帮助

- **Vercel 支持**: https://vercel.com/support
- **Next.js 文档**: https://nextjs.org/docs
- **GitHub 帮助**: https://docs.github.com
- **这个项目的 DEPLOY_STEPS.md**: 查看详细故障排除

---

## 最终验证清单

在部署之前，确保:

- [x] 所有本地测试通过
- [x] 代码可以构建: `npm run build`
- [x] 没有 TypeScript 错误
- [x] 已创建 GitHub 账户
- [x] 已购买或准备好自定义域名
- [x] 知道如何访问域名的 DNS 设置

---

**🚀 现在你已经准备好部署你的 PLC 博客了！**

祝你的网站成功上线！ 🎉

需要帮助？查看:
1. DEPLOY_STEPS.md - 详细步骤指南
2. DEPLOYMENT.md - 技术细节
3. README.md - 项目概览

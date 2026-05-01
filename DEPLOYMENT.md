# Deployment Guide for PLC Blog

## 🚀 GitHub Setup

### 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 填写仓库名称: `plc-blog`
3. 选择 "Public" (公开)
4. 点击 "Create repository"

### 2. 连接本地仓库到 GitHub

```bash
cd /home/jake/PLC-blog

# 添加远程仓库
git remote add origin https://github.com/jakemaney2025-crypto/plc-blog.git

# 重命名分支为 main (可选但推荐)
git branch -M main

# 推送到 GitHub
git push -u origin main
```

## 🌐 Vercel 部署

### 1. 连接 Vercel 账户

1. 访问 https://vercel.com
2. 点击 "Sign Up"，使用 GitHub 账户登录
3. 授权 Vercel 访问你的 GitHub

### 2. 导入项目

1. 登录 Vercel 后，点击 "New Project"
2. 点击 "Import Git Repository"
3. 搜索并选择 `plc-blog` 仓库
4. 点击 "Import"

### 3. 配置项目

在导入页面，Vercel 会自动检测到 Next.js 项目。
- **Framework Preset**: Next.js (已自动选择)
- **Root Directory**: `.` (项目根目录)
- **Environment Variables**: 保留默认

点击 "Deploy" 开始部署。

### 4. 首次部署

部署通常需要 2-5 分钟。完成后，你会得到：
- 默认 Vercel 域名: `plc-blog-xxxxx.vercel.app`
- 部署状态和日志

## 🎯 绑定自定义域名

### 1. 配置域名 DNS

对于你的域名 `jakemaney88.dpdns.org`:

#### 方案 A: Vercel 提供的 DNS (推荐)

1. 在 Vercel 项目设置中进入 "Domains"
2. 输入你的域名: `jakemaney88.dpdns.org`
3. 点击 "Add"
4. Vercel 会提供 DNS 记录
5. 在你的域名提供商的 DNS 设置中添加这些记录
6. 等待 DNS 生效 (通常 15-30 分钟)

#### 方案 B: CNAME 记录 (如果域名提供商支持)

1. 在域名提供商的 DNS 管理中添加以下记录:
   ```
   Type: CNAME
   Name: jakemaney88
   Value: cname.vercel-dns.com
   ```

2. 在 Vercel 项目中添加域名

### 2. Vercel 域名配置步骤

1. 登录 Vercel 账户
2. 选择 `plc-blog` 项目
3. 进入 "Settings" → "Domains"
4. 点击 "Add Domain"
5. 输入 `jakemaney88.dpdns.org`
6. 选择 DNS 配置方式
7. 按照指示完成 DNS 配置
8. 点击 "Verify" 验证域名

### 3. 验证部署

DNS 生效后，访问你的域名:
```
https://jakemaney88.dpdns.org
```

应该看到 PLC 博客首页。

## 📱 SSL 证书

Vercel 会自动为你的域名配置 SSL 证书（HTTPS）。
- 首次配置需要 30 分钟左右
- 自动续期，无需手动操作

## 🔄 持续部署

设置完成后，每次你推送到 GitHub:

```bash
# 编辑本地文件
# 提交更改
git add .
git commit -m "添加新文章或功能"

# 推送到 GitHub
git push origin main

# Vercel 会自动检测更新并重新部署！
```

## 📝 添加新文章后的部署流程

1. **添加文章**:
   ```bash
   # 在 src/content/posts/ 创建新 .md 文件
   ```

2. **提交并推送**:
   ```bash
   git add src/content/posts/my-new-article.md
   git commit -m "Add: My New Article"
   git push origin main
   ```

3. **自动部署**: Vercel 会在 2-3 分钟内自动部署更新

4. **查看部署状态**:
   - Vercel Dashboard
   - GitHub Actions (在仓库的 Actions 标签页)

## 🛠️ 环境变量 (可选)

如果以后需要添加环境变量:

1. Vercel 项目设置 → "Environment Variables"
2. 添加变量名和值
3. 重新部署以应用更改

## 🚨 常见问题

### Q: 域名验证失败
**A**: 
- 检查 DNS 记录是否正确配置
- 等待 DNS 缓存更新 (最多 48 小时)
- 使用 `nslookup` 或 `dig` 命令验证 DNS:
  ```bash
  nslookup jakemaney88.dpdns.org
  ```

### Q: 部署失败
**A**:
- 检查构建日志: Vercel Dashboard → Deployments → 失败的部署
- 确保 `npm install` 成功
- 检查 TypeScript 类型错误
- 查看 GitHub Actions 日志

### Q: 本地开发中文章不显示
**A**:
- 确保文章文件在 `src/content/posts/` 目录
- 文件扩展名必须是 `.md`
- 检查 front matter 是否正确:
  ```markdown
  ---
  title: 标题
  date: YYYY-MM-DD
  category: 分类
  tags: [tag1, tag2]
  excerpt: 摘要
  ---
  ```

## 📞 获取帮助

- Vercel 文档: https://vercel.com/docs
- Next.js 文档: https://nextjs.org/docs
- GitHub 帮助: https://docs.github.com

---

**恭喜！你的 PLC 博客网站现在可以全网访问了！** 🎉

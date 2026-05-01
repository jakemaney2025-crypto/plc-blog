# 🚀 PLC 博客网站部署完整步骤

## 📋 你的信息

- **GitHub 用户名**: jakemaney2025-crypto
- **自定义域名**: jakemaney88.dpdns.org
- **部署平台**: Vercel

---

## ✅ 第 1 步：推送到 GitHub

### 1.1 创建 GitHub 仓库

在浏览器中访问:
```
https://github.com/new
```

填写以下信息:
- **Repository name**: `plc-blog`
- **Description**: PLC Blog - Programmable Logic Controller Topics
- **Visibility**: Public
- **Initialize this repository with**: 不勾选

点击 **"Create repository"**

### 1.2 在本地推送代码

复制以下命令到终端执行：

```bash
cd /home/jake/PLC-blog

# 添加远程仓库
git remote add origin https://github.com/jakemaney2025-crypto/plc-blog.git

# 重命名主分支为 main
git branch -M main

# 推送代码到 GitHub
git push -u origin main
```

**预期输出**: 显示上传进度，完成后无报错

---

## ✅ 第 2 步：连接 Vercel

### 2.1 访问 Vercel

1. 打开浏览器访问: https://vercel.com/
2. 点击右上角 **"Sign Up"**
3. 选择 **"Continue with GitHub"**
4. 授权 Vercel 访问你的 GitHub 账户

### 2.2 导入项目

1. Vercel 登录后，点击 **"Add New..."** → **"Project"**
2. 或直接访问: https://vercel.com/new
3. 点击 **"Import Git Repository"**
4. 在搜索框输入: `plc-blog`
5. 点击找到的仓库进行导入

### 2.3 配置部署

在导入页面，Vercel 会自动检测：
- ✅ Framework: **Next.js**
- ✅ Root Directory: **./.**
- ✅ Build Command: **npm run build**
- ✅ Output Directory: **.next**

全部保持默认，点击 **"Deploy"**

### 2.4 等待部署完成

Vercel 会显示部署进度。完成后，你会看到：
```
✓ Deployment Successful!
https://plc-blog-xxxxxxxx.vercel.app
```

---

## ✅ 第 3 步：绑定自定义域名

### 3.1 在 Vercel 中添加域名

1. 进入你的项目 Dashboard
2. 点击 **"Settings"** → **"Domains"**
3. 点击 **"Add Domain"**
4. 输入你的域名: `jakemaney88.dpdns.org`
5. 点击 **"Add"**

### 3.2 配置 DNS 记录

Vercel 会显示两个选项，选择：**"Use Nameserver"** (推荐)

你会看到 4 个 Nameserver 地址，例如：
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

复制这些地址。

### 3.3 在你的域名提供商中更新 DNS

登录你的域名提供商账户 (DPDNS、Namecheap、GoDaddy 等)，找到 DNS 设置：

1. 找到 **"Nameservers"** 或 **"NS Records"** 设置
2. 将原有的 Nameserver 替换为 Vercel 提供的 4 个地址
3. 保存更改

**等待时间**: DNS 生效需要 15 分钟 - 48 小时

### 3.4 验证域名

1. 返回 Vercel 项目设置
2. 点击 Domains 中的域名
3. 等待显示 **"Valid Configuration"** 或 ✓ 标记

---

## 🎉 完成！

现在你可以访问：
```
https://jakemaney88.dpdns.org
```

看到你的 PLC 博客网站！🎉

---

## 📝 后续维护

### 添加新文章

```bash
# 1. 创建新文章
cd /home/jake/PLC-blog
nano src/content/posts/my-article.md

# 2. 提交到 Git
git add src/content/posts/my-article.md
git commit -m "Add: My Article Title"

# 3. 推送到 GitHub
git push origin main

# ✓ Vercel 会自动部署（2-3 分钟内）
```

### 修改样式或功能

```bash
# 修改文件后
git add .
git commit -m "Update: Description of changes"
git push origin main

# ✓ 自动部署
```

### 查看部署状态

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Actions**: https://github.com/jakemaney2025-crypto/plc-blog/actions

---

## 🆘 常见问题

### Q: Git 推送时显示 "Permission denied"

**A**: 
```bash
# 使用 SSH 密钥认证
git remote set-url origin git@github.com:jakemaney2025-crypto/plc-blog.git

# 或使用 GitHub Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/jakemaney2025-crypto/plc-blog.git
```

### Q: Vercel 部署失败

**A**: 
1. 检查 Vercel Dashboard 中的部署日志
2. 确保 `npm run build` 在本地成功:
   ```bash
   npm run build
   ```
3. 检查 TypeScript 错误

### Q: 域名还是指向老网站

**A**:
- 清除浏览器缓存
- 等待 DNS 完全生效 (最多 48 小时)
- 使用在线 DNS 检查工具验证: https://mxtoolbox.com/

---

## 📞 获取帮助

- Vercel 文档: https://vercel.com/docs
- Next.js 文档: https://nextjs.org/docs
- GitHub 文档: https://docs.github.com

---

**你已经成功部署了你的 PLC 博客网站！** 🚀

现在可以与全世界分享你的内容了！

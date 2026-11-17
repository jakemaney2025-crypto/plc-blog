# jakemaney Blog

独立静态博客：PLC 控制、工业网络与 AI 学习。包含动态首屏、文章阅读、分类搜索、主题切换及带来源的资讯摘要。

## Vercel 设置

- GitHub 仓库：jakemaney2025-crypto/plc-blog
- Production Branch：main
- Root Directory：jakemaney-blog
- Framework Preset：Other
- Build Command：留空
- Install Command：留空
- Output Directory：dist
- 无环境变量或密钥需求。

本目录独立于仓库根目录的 Next.js 博客，导入时必须设置 Root Directory。

## 内容维护

`dist/news.js` 保存资讯、发布日期和来源链接；`dist/app.js` 保存学习笔记与交互逻辑。资讯不是自动更新。更新后推送 main，由已连接的 Vercel 项目自动部署。

## 检查与回滚

执行 `node --check dist/app.js` 和 `node --check dist/news.js`。发布前在浏览器检查首页、分类、搜索和文章来源链接。需要回退时，在 Vercel 中回滚到之前成功的部署，或通过新的 Git 提交恢复上一版文件。

本次迁移不包含 Sites 托管身份、Git 凭据或账号配置。

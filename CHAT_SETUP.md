# Chat Widget & Email Configuration Guide

这个项目现在包含了一个联系方式和聊天弹出窗口功能！以下是如何配置它的步骤。

## 功能说明

### 1. 联系方式 (Footer)
网站 Footer 中现在显示联系邮箱：`Tom_jake2026@outlook.com`

### 2. 聊天弹出窗口
- 访问者可以点击右下角的蓝色聊天按钮
- 窗口可拖拽
- 聊天流程：
  1. 欢迎消息
  2. 收集访问者的名字
  3. 收集访问者的邮箱
  4. 收集访问者的消息
  5. 发送到你的邮箱

## 配置邮件服务

为了使聊天功能能够发送邮件到你的收件箱，你需要配置 SMTP 服务器。

### 步骤 1：创建 .env.local 文件

复制 `.env.example` 文件的内容，创建 `.env.local` 文件：

```bash
cp .env.example .env.local
```

### 步骤 2：配置邮件服务

#### 选项 A：使用 Gmail

1. 进入 [Google 账号安全设置](https://myaccount.google.com/security)
2. 启用两步验证（如果还未启用）
3. 生成 [应用密码](https://myaccount.google.com/apppasswords)
   - 选择"邮件"和"Windows 电脑"
   - Google 会生成一个 16 位的密码

4. 在 `.env.local` 中配置：
```
CONTACT_EMAIL=Tom_jake2026@outlook.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

#### 选项 B：使用 Outlook/Hotmail

在 `.env.local` 中配置：
```
CONTACT_EMAIL=Tom_jake2026@outlook.com
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

#### 选项 C：使用其他 SMTP 服务

根据你的邮件服务提供商的 SMTP 设置配置，例如 SendGrid、MailGun 等。

### 步骤 3：测试配置

1. 启动开发服务器：
```bash
npm run dev
```

2. 访问 `http://localhost:3000`
3. 点击右下角的聊天按钮
4. 完成聊天流程并提交消息
5. 检查你的邮箱是否收到邮件

## 生产环境部署

### Vercel 部署

如果在 Vercel 上部署，需要在项目设置中添加环境变量：

1. 进入 Vercel 项目设置
2. 找到 "Environment Variables" 部分
3. 添加以下变量：
   - `CONTACT_EMAIL`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`

4. 重新部署项目

## 文件说明

- `src/components/ChatWidget.tsx` - 聊天窗口组件（可拖拽）
- `src/app/api/send-message/route.ts` - 邮件发送 API
- `src/components/Footer.tsx` - 更新了联系方式
- `.env.example` - 环境变量配置示例

## 注意事项

⚠️ **安全提示：**
- 永远不要将 `.env.local` 提交到 Git
- 确保 `.gitignore` 包含 `.env.local`
- SMTP 密码应该是应用专用密码，而不是账户密码

## 常见问题

### Q: 收不到邮件？
A: 
1. 检查 `.env.local` 中的配置是否正确
2. 检查 SMTP 凭证是否有效
3. 查看浏览器控制台的错误信息
4. 查看服务器日志（`npm run dev` 的输出）

### Q: 邮件发送很慢？
A: 这是正常的，SMTP 邮件发送通常需要 1-5 秒

### Q: 如何自定义聊天窗口？
A: 编辑 `src/components/ChatWidget.tsx` 文件，修改：
- 样式（Tailwind CSS 类）
- 聊天消息文本
- 颜色和位置

## 支持

如有问题，请参考：
- [Nodemailer 文档](https://nodemailer.com/)
- [Next.js API Routes 文档](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

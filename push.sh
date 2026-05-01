#!/bin/bash

# PLC Blog - Quick Push to GitHub Script
# 用法: ./push.sh "你的提交信息"

set -e

if [ -z "$1" ]; then
    echo "❌ 错误: 请提供提交信息"
    echo "用法: ./push.sh '你的提交信息'"
    exit 1
fi

echo "🚀 开始推送到 GitHub..."
echo "📝 提交信息: $1"
echo ""

# 检查是否有未提交的更改
if git diff-index --quiet HEAD --; then
    echo "✓ 没有未提交的更改"
else
    echo "📦 添加更改..."
    git add .
    
    echo "💬 创建提交..."
    git commit -m "$1"
fi

echo "⬆️  推送到 GitHub..."
git push origin main

echo ""
echo "✅ 推送成功！"
echo "🔄 Vercel 会在 2-3 分钟内自动部署"
echo "📊 查看部署状态: https://vercel.com/dashboard"

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// 代理 /ciba 路径
app.use('/ciba', createProxyMiddleware({
    target: 'https://open.iciba.com',
    changeOrigin: true,
    pathRewrite: {
        '^/ciba': '/dsapi',
    },
}));

// 代理 /shanbei 路径
app.use('/shanbei', createProxyMiddleware({
    target: 'https://apiv3.shanbay.com',
    changeOrigin: true,
    pathRewrite: {
        '^/shanbei': '/',
    },
}));

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
import app from './app';

const PORT = parseInt(process.env.PORT ?? '4000', 10);

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n Quzar Backend running on http://localhost:${PORT}`);
    console.log(`   Health: http://localhost:${PORT}/health`);
    console.log(`   Contact API: http://localhost:${PORT}/api/contact\n`);
  });
}

export default app;

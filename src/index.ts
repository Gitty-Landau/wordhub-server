import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Express server running on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});

export default app;

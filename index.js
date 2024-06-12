const express = require('express');
const app = express();
const indexRouter = require('./routes/index.route');
const userRouter = require('./routes/user.route');
const articleRouter = require('./routes/article.route');

app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/article', articleRouter);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
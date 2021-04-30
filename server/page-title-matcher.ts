import express from 'express';
import { getByMemberName } from '../src/services/user-info-service';

const PageTitleMatcher = express.Router();

PageTitleMatcher.use('/team/:member', async (req, res, next) => {
  const { member } = req.param;

  try {
    const userInfo = await getByMemberName(member);

    req.pageTitle = `<title>The user known as ${userInfo.userName}</title>`;
    next();
  } catch (ex) {
    console.error(ex);
    res.status(500).send('the server is having network troubles :shrug:');
  }
});

export default PageTitleMatcher;

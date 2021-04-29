import express from 'express';
import faker from 'faker';

const MemberRouter = express.Router();

MemberRouter.get('/:member', (req, res) => {
  const { member } = req.params;

  console.info(`handling request for member ${member}`);

  const userName = faker.internet.userName();
  const about = faker.lorem.paragraph();

  const payload = {
    member,
    userName,
    about
  };

  res.json(payload);
});

export default MemberRouter;
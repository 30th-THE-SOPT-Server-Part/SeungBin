import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '내가 좋아하는 것은 솝트!'
    });
});

module.exports = router;
import { Router, Request, Response } from 'express';

// controllers
import answersControllers from '../controllers/answersControllers';

// middlewares
import { JWTAuthentication } from '../middlewares/authentication';

// config
import upload from '../config/upload';

// utils
import response from '../utils/response';

const router = Router();

router.get('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new answersControllers().getData(req, req.query);
    response.ok('Get data success', result, res);
  } catch (error) {
    response.error('Get data error', error, res);
  }
});

router.post('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new answersControllers().createData(req, req.body);
    response.ok('Create data success', result, res);
  } catch (error) {
    response.error('Create data error', error, res);
  }
});

router.put('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new answersControllers().updateData(req, req.body);
    response.ok('Update data success', result, res);
  } catch (error) {
    response.error('Update data error', error, res);
  }
});

router.delete('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new answersControllers().deleteData(req, req.body);
    response.ok('Delete data success', result, res);
  } catch (error) {
    response.error('Delete data error', error, res);
  }
});



export default router;

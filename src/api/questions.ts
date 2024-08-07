import { Router, Request, Response } from 'express';

// controllers
import QuestionControllers from '../controllers/questionsControllers';

// middlewares
import { JWTAuthentication } from '../middlewares/authentication';

// config
import upload from '../config/upload';

// utils
import response from '../utils/response';

const router = Router();

router.get('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new QuestionControllers().getData(req, req.query);
    response.ok('Get data success', result, res);
  } catch (error) {
    response.error('Get data error', error, res);
  }
});

router.post('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new QuestionControllers().createData(req, req.body);
    response.ok('Create data success', result, res);
  } catch (error) {
    response.error('Create data error', error, res);
  }
});

router.put('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new QuestionControllers().updateData(req, req.body);
    response.ok('Update data success', result, res);
  } catch (error) {
    response.error('Update data error', error, res);
  }
});

router.delete('/', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new QuestionControllers().deleteData(req, req.body);
    response.ok('Delete data success', result, res);
  } catch (error) {
    response.error('Delete data error', error, res);
  }
});

router.post('/upload', JWTAuthentication, upload.array('files'), async (req: Request, res: Response) => {
  try {
    const result = await new QuestionControllers().uploadFile(req);
    response.ok('Upload file success', result, res);
  } catch (error) {
    response.error('Upload file error', error, res);
  }
});

router.delete('/upload', JWTAuthentication, async (req: Request, res: Response) => {
  try {
    const result = await new QuestionControllers().deleteFile(req, req.body);
    response.ok('Delete file success', result, res);
  } catch (error) {
    response.error('Delete file error', error, res);
  }
});



export default router;

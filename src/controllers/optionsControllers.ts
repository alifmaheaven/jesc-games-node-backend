import { config } from 'dotenv';
config();

import * as Express from 'express';

import { 
  Controller,
  Tags,
  Route,
  Get,
  Queries,
  Request,
  Post,
  Put,
  Delete,
  Body,
  UploadedFiles,
  FormField,
  Security,
} from 'tsoa';
import { v4 as uuidv4 } from 'uuid';

// utils
import pagination from '../utils/pagination';
import {
  createData as createDataUtil,
  updateData as updateDataUtil,
  deleteData as deleteDataUtil,
} from '../utils/queryBuilder';
import { 
  moveToPermanentFiles, 
  deleteFiles 
} from '../utils/filesManagement';
//config
import pool from '../config/database';
// import interfaces
import { 
  OptionsInterfaces, 
  OptionsUpdateInterfaces,
  OptionsCreateInterfaces,
  OptionsDeleteInterfaces,
  OptionsFilterInterfaces,
  OptionsUploadDeleteInterfaces,
} from '../interfaces/OptionsInterfaces';

import PaginationInterfaces from '../interfaces/PaginationInterfaces';

@Route('/api/v1/options')
@Tags('Options')
export default class Room extends Controller {
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
  @Security('bearer')
  @Get('/')
  public async getData(
    @Request() req: any,
      @Queries() query: OptionsFilterInterfaces,
  ): Promise<PaginationInterfaces> {
    const DB_NAME = 'options';
    try {
      const result = await pagination(query, DB_NAME, pool);
      return result; // Add this line
    } catch (error) {
      console.log('Get data error', error);
      throw error; // Add this line
    }
  }

  @Security('bearer')
  @Post('/')
  public async createData(
    @Request() req: any,
      @Body() requestBody: OptionsCreateInterfaces,
  ): Promise<OptionsInterfaces> {
    const DB_NAME = 'options';
    try {
      const result = await createDataUtil(DB_NAME, requestBody, {
        user_id: req.auth_data.uuid,
        media: requestBody?.media && await moveToPermanentFiles(requestBody?.media, 'options') || null,
        room_code: Math.floor(100000 + Math.random() * 900000)
      });
      return result?.rows[0]; // Add this line
    } catch (error) {
      console.log('Create data error', error);
      const err = error as { column: string, message: string };
      throw {
        [err.column]: err.message,
      }; // Add this line
    }
  }

  @Security('bearer')
  @Put('/')
  public async updateData(
    @Request() req: any,
      @Body() requestBody: OptionsUpdateInterfaces,
  ): Promise<OptionsInterfaces> {
    const DB_NAME = 'options';
    const { uuid } = requestBody;
    try {
      const result = await updateDataUtil(DB_NAME, { uuid }, requestBody, {
        media: requestBody?.media && await moveToPermanentFiles(requestBody?.media, 'options') || null,
      })
      return result?.rows[0];
    } catch (error) {
      console.log('Update data error', error);
      const err = error as { column: string, message: string };
      throw {
        [err.column]: err.message,
      }; // Add this line
    }
  }

  @Security('bearer')
  @Delete('/')
  public async deleteData(
    @Request() req: any,
      @Body() requestBody: OptionsDeleteInterfaces,
  ): Promise<OptionsInterfaces> {
    const DB_NAME = 'options';
    const { uuid } = requestBody;
    try {
      const result = await deleteDataUtil(DB_NAME, { uuid });
      return result?.rows[0]; // Add this line
    } catch (error) {
      console.log('Delete data error', error);
      throw error; // Add this line
    }
  }

  @Security('bearer')
  @Post('/upload')
  public async uploadFile(
    @UploadedFiles() files: any,
  ): Promise<any> {
    return { 
      links: files.files.map((item: { path: any; }) => ({ path: '/'+item.path, link: files.protocol + "://" + files.host + '/'+item.path }))  
    };
  };

  @Security('bearer')
  @Delete('/upload')
  public async deleteFile(
    @Request() req: any,
    @Body() requestBody: OptionsUploadDeleteInterfaces,
  ): Promise<any> {
    requestBody.links.forEach((link) => {
      deleteFiles(link);
    });
    return { 
      links: requestBody.links
    };
  };
}
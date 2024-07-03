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
//config
import pool from '../config/database';
// import interfaces
import { 
  PointsInterfaces, 
  PointsUpdateInterfaces,
  PointsCreateInterfaces,
  PointsDeleteInterfaces,
  PointsFilterInterfaces,
} from '../interfaces/PointsInterfaces';

import PaginationInterfaces from '../interfaces/PaginationInterfaces';

@Route('/api/v1/points')
@Tags('Points')
export default class Room extends Controller {
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
  @Security('bearer')
  @Get('/')
  public async getData(
    @Request() req: any,
      @Queries() query: PointsFilterInterfaces,
  ): Promise<PaginationInterfaces> {
    const DB_NAME = 'points';
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
      @Body() requestBody: PointsCreateInterfaces,
  ): Promise<PointsInterfaces> {
    const DB_NAME = 'points';
    try {
      const result = await createDataUtil(DB_NAME, requestBody, {});
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
      @Body() requestBody: PointsUpdateInterfaces,
  ): Promise<PointsInterfaces> {
    const DB_NAME = 'points';
    const { uuid } = requestBody;
    try {
      const result = await updateDataUtil(DB_NAME, { uuid }, requestBody, {})
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
      @Body() requestBody: PointsDeleteInterfaces,
  ): Promise<PointsInterfaces> {
    const DB_NAME = 'points';
    const { uuid } = requestBody;
    try {
      const result = await deleteDataUtil(DB_NAME, { uuid });
      return result?.rows[0]; // Add this line
    } catch (error) {
      console.log('Delete data error', error);
      throw error; // Add this line
    }
  }
}
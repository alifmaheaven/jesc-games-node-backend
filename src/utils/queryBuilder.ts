import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

export const createData = async (DB_NAME: string, requestBody: any, forceChange: Object) => {
  // get only data inside head of table
  const fields = await pool?.query(`SELECT * FROM ${DB_NAME} WHERE 1=0`);
  // result geting data inside head of table
  let get_only_data_inside_head_of_table = Object.fromEntries(Object.entries(requestBody).filter(([key, value]) => fields?.fields.map(({ name })=> name).includes(key) && value));
  // custom setup
  get_only_data_inside_head_of_table = {
    ...get_only_data_inside_head_of_table,
    ...forceChange,
    uuid: uuidv4(),
    created_at: new Date(),
    updated_at: new Date(),
    is_active: true,
  };
  // make me query insert as get_only_data_inside_head_of_table
  const keys = Object.keys(get_only_data_inside_head_of_table);
  const values = Object.values(get_only_data_inside_head_of_table);
  const placeholders = Array.from({ length: keys.length }, (_, i) => `$${i + 1}`);
  const query = `INSERT INTO ${DB_NAME} (${keys.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING *`;
  
  return await pool?.query(query, values)
}

export const updateData = async (DB_NAME: string, paramsWhereUpdateUniqArray: Object, requestBody: any, forceChange: Object) => {
  // get only data inside head of table
  const fields = await pool?.query(`SELECT * FROM ${DB_NAME} WHERE 1=0`);
  // result geting data inside head of table
  let get_only_data_inside_head_of_table = Object.fromEntries(Object.entries(requestBody).filter(([key, value]) => fields?.fields.map(({ name })=> name).includes(key) && value));
  // custom setup
  get_only_data_inside_head_of_table = {
    ...get_only_data_inside_head_of_table,
    ...forceChange,
    updated_at: new Date(),
  };
  // remove if paramsWhereUpdateUniqArray is in get_only_data_inside_head_of_table
  Object.keys(paramsWhereUpdateUniqArray).forEach((key) => delete get_only_data_inside_head_of_table[key]);

  // make me query insert as get_only_data_inside_head_of_table
  const keys = Object.keys(get_only_data_inside_head_of_table);
  const values = [
    ...Object.values(get_only_data_inside_head_of_table),
    ...Object.values(paramsWhereUpdateUniqArray),
  ];
  const placeholders = Array.from({ length: keys.length }, (_, i) => `$${i + 1}`);
  const query = `UPDATE ${DB_NAME} SET ${keys.map((key, i) => `${key} = ${placeholders[i]}`).join(', ')} WHERE ${
    Object.entries(paramsWhereUpdateUniqArray)
    .map(([key, _value], index) => `${key} = $${keys.length + 1 + index}`)
    .join(' AND ')
  } RETURNING *`;

  console.log('Query ', query, values);
  
  
  return await pool?.query(query, [
    ...values, 
  ])
}

export const deleteData = async (DB_NAME: string, paramsWhereDeleteUniqArray: Object) => {
  const query = `DELETE FROM ${DB_NAME} WHERE ${
    Object.entries(paramsWhereDeleteUniqArray)
    .map(([key, _value], index) => `${key} = $${index + 1}`)
    .join(' AND ')
  } RETURNING *`;
  
  return await pool?.query(query, Object.values(paramsWhereDeleteUniqArray))
}
  
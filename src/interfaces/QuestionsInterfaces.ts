interface QuestionsInterfaces {
  uuid: string;
  name: string;
  description: string;
  media: string;
  type: string;
  time: number;
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
  point_id: string;
  room_id: string;
}

interface QuestionsUpdateInterfaces {
  uuid: string;
  name: string;
  description: string;
  media: string;
  type: string;
  time: number;
  point_id: string;
  room_id: string;
}

interface QuestionsCreateInterfaces {
  name: string;
  description: string;
  media: string;
  type: string;
  time: number;
  point_id: string;
  room_id: string;
}

interface QuestionsDeleteInterfaces {
  uuid: string;
}

interface QuestionsUploadDeleteInterfaces {
  links: string[];
}

interface QuestionsFilterInterfaces {
  /**
   * This uuid will be used to filter data exact match
   */
  uuid_exact?: string[];
  name_exact?: string[];
  description_exact?: string[];
  media_exact?: string[];
  type_exact?: string[];
  time_exact?: number[];
  created_at_exact?: Date[];
  updated_at_exact?: Date[];
  is_active_exact?: boolean[];
  point_id_exact?: string[];
  room_id_exact?: string[];
  name_except?: string[];
  description_except?: string[];
  media_except?: string[];
  type_except?: string[];
  time_except?: number[];
  created_at_except?: Date[];
  updated_at_except?: Date[];
  is_active_except?: boolean[];
  uuid_like?: string[];
  name_like?: string[];
  description_like?: string[];
  media_like?: string[];
  type_like?: string[];
  time_like?: number[];
  created_at_like?: Date[];
  updated_at_like?: Date[];
  is_active_like?: boolean[];
  uuid_ilike?: string[];
  name_ilike?: string[];
  description_ilike?: string[];
  media_ilike?: string[];
  type_ilike?: string[];
  time_ilike?: number[];
  created_at_ilike?: Date[];
  updated_at_ilike?: Date[];
  is_active_ilike?: boolean[];
  uuid_startswith?: string[];
  name_startswith?: string[];
  description_startswith?: string[];
  media_startswith?: string[];
  type_startswith?: string[];
  time_startswith?: number[];
  created_at_startswith?: Date[];
  updated_at_startswith?: Date[];
  is_active_startswith?: boolean[];
  point_id_startswith?: string[];
  room_id_startswith?: string[];
  name_istartswith?: string[];
  description_istartswith?: string[];
  media_istartswith?: string[];
  type_istartswith?: string[];
  time_istartswith?: number[];
  created_at_istartswith?: Date[];
  updated_at_istartswith?: Date[];
  is_active_istartswith?: boolean[];
  uuid_endswith?: string[];
  name_endswith?: string[];
  description_endswith?: string[];
  media_endswith?: string[];
  type_endswith?: string[];
  time_endswith?: number[];
  created_at_endswith?: Date[];
  updated_at_endswith?: Date[];
  is_active_endswith?: boolean[];
  uuid_iendswith?: string[];
  name_iendswith?: string[];
  description_iendswith?: string[];
  media_iendswith?: string[];
  type_iendswith?: string[];
  time_iendswith?: number[];
  created_at_iendswith?: Date[];
  updated_at_iendswith?: Date[];
  is_active_iendswith?: boolean[];
  point_id_endswith?: string[];
  room_id_endswith?: string[];
  // gt
  created_at_gt?: Date[];
  updated_at_gt?: Date[];
  // gte 
  created_at_gte?: Date[];
  updated_at_gte?: Date[];
  // lt
  created_at_lt?: Date[];
  updated_at_lt?: Date[];
  // lte
  created_at_lte?: Date[];
  updated_at_lte?: Date[];
  // order_by_asc
  order_by_asc?: string[];
  // order_by_desc
  order_by_desc?: string[];
}

export { 
  QuestionsInterfaces, 
  QuestionsUpdateInterfaces,
  QuestionsCreateInterfaces,
  QuestionsDeleteInterfaces,
  QuestionsFilterInterfaces, 
  QuestionsUploadDeleteInterfaces,
};
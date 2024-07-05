// uuid
// name
// description
// media
// is_correct
// created_at
// updated_at
// is_active
// question_id

interface OptionsInterfaces {
  uuid: string;
  name: string;
  description: string;
  media: string;
  type: string;
  is_correct: number;
  created_at: Date;
  updated_at: Date;
  is_active: boolean;
  question_id: string;
}

interface OptionsUpdateInterfaces {
  uuid?: string;
  name?: string;
  description?: string;
  media?: string;
  type?: string;
  is_correct?: number;
  is_active?: boolean;
  question_id?: string;
}

interface OptionsCreateInterfaces {
  name: string;
  description: string;
  media: string;
  type: string;
  is_correct: number;
  question_id: string;
}

interface OptionsDeleteInterfaces {
  uuid: string;
}

interface OptionsUploadDeleteInterfaces {
  links: string[];
}

interface OptionsFilterInterfaces {
  uuid_exact?: string[];
  name_exact?: string[];
  description_exact?: string[];
  media_exact?: string[];
  type_exact?: string[];
  is_correct_exact?: number[];
  created_at_exact?: Date[];
  updated_at_exact?: Date[];
  is_active_exact?: boolean[];
  question_id_exact?: string[];
  uuid_except?: string[];
  name_except?: string[];
  description_except?: string[];
  media_except?: string[];
  type_except?: string[];
  is_correct_except?: number[];
  created_at_except?: Date[];
  updated_at_except?: Date[];
  is_active_except?: boolean[];
  question_id_except?: string[];
  uuid_like?: string[];
  name_like?: string[];
  description_like?: string[];
  media_like?: string[];
  type_like?: string[];
  is_correct_like?: number[];
  created_at_like?: Date[];
  updated_at_like?: Date[];
  is_active_like?: boolean[];
  question_id_like?: string[];
  uuid_ilike?: string[];
  name_ilike?: string[];
  description_ilike?: string[];
  media_ilike?: string[];
  type_ilike?: string[];
  is_correct_ilike?: number[];
  created_at_ilike?: Date[];
  updated_at_ilike?: Date[];
  is_active_ilike?: boolean[];
  question_id_ilike?: string[];
  uuid_startswith?: string[];
  name_startswith?: string[];
  description_startswith?: string[];
  media_startswith?: string[];
  type_startswith?: string[];
  is_correct_startswith?: number[];
  created_at_startswith?: Date[];
  updated_at_startswith?: Date[];
  is_active_startswith?: boolean[];
  question_id_startswith?: string[];
  uuid_istartswith?: string[];
  name_istartswith?: string[];
  description_istartswith?: string[];
  media_istartswith?: string[];
  type_istartswith?: string[];
  is_correct_istartswith?: number[];
  created_at_istartswith?: Date[];
  updated_at_istartswith?: Date[];
  is_active_istartswith?: boolean[];
  question_id_istartswith?: string[];
  uuid_endswith?: string[];
  name_endswith?: string[];
  description_endswith?: string[];
  media_endswith?: string[];
  type_endswith?: string[];
  is_correct_endswith?: number[];
  created_at_endswith?: Date[];
  updated_at_endswith?: Date[];
  is_active_endswith?: boolean[];
  question_id_endswith?: string[];
  uuid_iendswith?: string[];
  name_iendswith?: string[];
  description_iendswith?: string[];
  media_iendswith?: string[];
  type_iendswith?: string[];
  is_correct_iendswith?: number[];
  created_at_iendswith?: Date[];
  updated_at_iendswith?: Date[];
  is_active_iendswith?: boolean[];
  question_id_iendswith?: string[];
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
  OptionsInterfaces,
  OptionsUpdateInterfaces,
  OptionsCreateInterfaces,
  OptionsDeleteInterfaces,
  OptionsUploadDeleteInterfaces,
  OptionsFilterInterfaces
}
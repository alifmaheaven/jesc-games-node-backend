// uuid
// name
// description
// created_at
// updated_at
// is_active

interface PointsInterfaces {
  uuid?: string;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  is_active?: boolean;
}

interface PointsUpdateInterfaces {
  uuid?: string;
  name?: string;
  description?: string;
  is_active?: boolean;
}

interface PointsCreateInterfaces {
  name: string;
  description: string;
}

interface PointsDeleteInterfaces {
  uuid: string;
}

interface PointsFilterInterfaces {
  uuid_exact?: string[];
  name_exact?: string[];
  description_exact?: string[];
  created_at_exact?: Date[];
  updated_at_exact?: Date[];
  is_active_exact?: boolean[];
  uuid_except?: string[];
  name_except?: string[];
  description_except?: string[];
  created_at_except?: Date[];
  updated_at_except?: Date[];
  is_active_except?: boolean[];
  uuid_like?: string[];
  name_like?: string[];
  description_like?: string[];
  created_at_like?: Date[];
  updated_at_like?: Date[];
  is_active_like?: boolean[];
  uuid_ilike?: string[];
  name_ilike?: string[];
  description_ilike?: string[];
  created_at_ilike?: Date[];
  updated_at_ilike?: Date[];
  is_active_ilike?: boolean[];
  uuid_startswith?: string[];
  name_startswith?: string[];
  description_startswith?: string[];
  created_at_startswith?: Date[];
  updated_at_startswith?: Date[];
  is_active_startswith?: boolean[];
  uuid_istartswith?: string[];
  name_istartswith?: string[];
  description_istartswith?: string[];
  created_at_istartswith?: Date[];
  updated_at_istartswith?: Date[];
  is_active_istartswith?: boolean[];
  uuid_endswith?: string[];
  name_endswith?: string[];
  description_endswith?: string[];
  created_at_endswith?: Date[];
  updated_at_endswith?: Date[];
  is_active_endswith?: boolean[];
  uuid_iendswith?: string[];
  name_iendswith?: string[];
  description_iendswith?: string[];
  created_at_iendswith?: Date[];
  updated_at_iendswith?: Date[];
  is_active_iendswith?: boolean[];
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

export { PointsInterfaces, PointsUpdateInterfaces, PointsCreateInterfaces, PointsDeleteInterfaces, PointsFilterInterfaces }


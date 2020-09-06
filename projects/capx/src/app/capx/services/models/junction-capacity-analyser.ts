export interface CapxInputParameters {
  east_bound_u: number;
  east_bound_left: number;
  east_bound_thru: number;
  east_bound_right: number;
  east_bound_truck_percent: number;
  east_bound_growth_factor: number;
  west_bound_u: number;
  west_bound_left: number;
  west_bound_thru: number;
  west_bound_right: number;
  west_bound_truck_percent: number;
  west_bound_growth_factor: number;
  south_bound_u: number;
  south_bound_left: number;
  south_bound_thru: number;
  south_bound_right: number;
  south_bound_truck_percent: number;
  south_bound_growth_factor: number;
  north_bound_u: number;
  north_bound_left: number;
  north_bound_thru: number;
  north_bound_right: number;
  north_bound_truck_percent: number;
  north_bound_growth_factor: number;
  adjustment_factor_u: number;
  adjustment_factor_left_turn: number;
  adjustment_factor_right_turn: number;
  truck_adjustment_factor: number;
  critical_lane_volume: number;
}

export interface CapxMasterParameters {
  east_bound_u: number;
  east_bound_left: number;
  east_bound_thru: number;
  east_bound_right: number;
  west_bound_u: number;
  west_bound_left: number;
  west_bound_thru: number;
  west_bound_right: number;
  south_bound_u: number;
  south_bound_left: number;
  south_bound_thru: number;
  south_bound_right: number;
  north_bound_u: number;
  north_bound_left: number;
  north_bound_thru: number;
  north_bound_right: number;
}


export interface CapxConventionalJunctionParameters {
  east_bound_left: number;
  east_bound_thru: number;
  east_bound_right: number;
  west_bound_left: number;
  west_bound_thru: number;
  west_bound_right: number;
  south_bound_left: number;
  south_bound_thru: number;
  south_bound_right: number;
  north_bound_left: number;
  north_bound_thru: number;
  north_bound_right: number;
}

export interface CapxIntersectionAnalysisResultParameters {
  zone1_north_clv: number | null;
  zone1_north_vc: number | null;
  zone2_south_clv: number | null;
  zone2_south_vc: number | null;
  zone3_east_clv: number | null;
  zone3_east_vc: number | null;
  zone4_west_clv: number | null;
  zone4_west_vc: number | null;
  zone5_center_clv: number | null;
  zone5_center_vc: number | null;
  all_vc: number;
}

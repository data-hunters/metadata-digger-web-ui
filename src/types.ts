export interface PhotoLocation {
  latitude: number;
  longitude: number;
}

export interface Photo {
  id: string;
  base_path: string;
  file_path: string;
  file_type: string;
  directories: string[];
  meta_data: Record<string, string | number>;
  thumbnail: string;
  labels: string[];
  location?: PhotoLocation;
}

export type Facet = Record<string, number>;
export type Facets = Record<string, Facet>;

export interface FilterEntry {
  name: string;
  entry_count: number;
  is_selected: boolean;
}

export interface Filter {
  field: string;
  values: FilterEntry[];
}

export enum GraphType {
  TAG_NAMES = 'tag_names',
  DIRECTORY_NAMES = 'directory_names',
  LABELS = 'labels',
  FILE_TYPE = 'file_type',
  CAMERA_MODEL = 'camera_model',
}

export const GRAPH_TYPES: GraphType[] = [
  GraphType.TAG_NAMES,
  GraphType.DIRECTORY_NAMES,
  GraphType.LABELS,
  GraphType.FILE_TYPE,
  GraphType.CAMERA_MODEL,
];

export interface GraphState {
  graphType: GraphType;
  values: Facet;
}

export type GraphPlacement = 'left' | 'right';
export const GRAPH_PLACEMENTS: GraphPlacement[] = ['left', 'right'];

export interface AppliedFilter {
  field_name: string;
  selected_values: string[];
}

export interface FilteringState {
  appliedFilters: AppliedFilter[];
  possibleFilters: Filter[];
}
export interface AppState {
  currentPhoto?: Photo;
  photos: Photo[];
  facets: Facets;
  filteringState: FilteringState;
  graphs: Record<GraphPlacement, GraphType>;
  searchQuery?: string;
  requestInProgress: boolean;
}

import { Photo, Facets, GraphType, GraphPlacement, Filter } from './types';

export type Action =
  | { type: 'finishRequest'; photos: Photo[]; facets: Facets; possibleFilters: Filter[] }
  | { type: 'changeGraphType'; whichGraph: GraphPlacement; newGraphType: GraphType }
  | { type: 'selectPhoto'; newPhoto: Photo }
  | { type: 'deselectPhoto' }
  | { type: 'startSearch'; searchQuery: string }
  | { type: 'applyFilter'; fieldName: string; selectedValues: string[] }
  | { type: 'removeValueFromFilter'; fieldName: string; valueToBeRemoved: string }
  | { type: 'removeFilter'; fieldName: string };

export const Actions = {
  finishRequest: (photos: Photo[], facets: Facets, possibleFilters: Filter[]): Action => {
    return { type: 'finishRequest', photos: photos, facets: facets, possibleFilters };
  },
  changeGraphType: (whichGrap: GraphPlacement, newGraphType: GraphType): Action => {
    return { type: 'changeGraphType', whichGraph: whichGrap, newGraphType: newGraphType };
  },
  selectPhoto: (newPhoto: Photo): Action => {
    return { type: 'selectPhoto', newPhoto: newPhoto };
  },
  deselectPhoto: (): Action => {
    return { type: 'deselectPhoto' };
  },
  startSearch: (searchQuery: string): Action => {
    return { type: 'startSearch', searchQuery: searchQuery };
  },
  applyFilter: (fieldName: string, selectedValues: string[]): Action => {
    return { type: 'applyFilter', fieldName: fieldName, selectedValues: selectedValues };
  },
  removeValueFromFilter: (fieldName: string, valueToBeRemoved: string): Action => {
    return { type: 'removeValueFromFilter', fieldName: fieldName, valueToBeRemoved: valueToBeRemoved };
  },
  removeFilter: (fieldName: string): Action => {
    return { type: 'removeFilter', fieldName: fieldName };
  },
};

export default Actions;

import { Filter } from '../types';
import React, { FC, useState } from 'react';
import * as _ from 'lodash';

interface FilterProps {
  filter: Filter;
  isSubmitting: boolean;
  onSubmit: (filterName: string, selected: Set<string>) => void;
}

const FilterForm: FC<FilterProps> = (props) => {
  const selectedValues = props.filter.values.filter((e) => e.is_selected).map((e) => e.name);

  const filterField = props.filter.field;
  const [selected, setSelected] = useState(new Set<string>(selectedValues));

  const isSelected: (valueName: string) => boolean = (valueName: string) => {
    return selected.has(valueName);
  };

  const sortedValues = _.sortBy(props.filter.values, [(v) => -v.entry_count], [(v) => v.name]);

  const toggleSelect: (valueName: string) => void = (valueName) => {
    const newState = new Set(selected);
    if (selected.has(valueName)) newState.delete(valueName);
    else newState.add(valueName);
    setSelected(newState);
  };

  const submitForm = () => {
    props.onSubmit(filterField, selected);
  };

  const submitButton = () => {
    if (!props.isSubmitting)
      return (
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => submitForm()}
          data-testid={`filter-form-${filterField}-select-enabled`}
        >
          Select
        </button>
      );
    else
      return (
        <button
          type="button"
          className="btn btn-secondary btn-lg btn-block"
          data-testid={`${filterField}-select-disabled}`}
          disabled
        >
          Select
        </button>
      );
  };

  return (
    <div className="card">
      <article className="card-group-item">
        <header className="card-header">{filterField}</header>
        <div className="filter-content">
          {
            <div className="card-body">
              {sortedValues.map((value) => {
                return (
                  <div className="form-check" key={value.name}>
                    <span className="float-right badge badge-light round">{value.entry_count}</span>
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        name={value.name}
                        className="form-check-input"
                        checked={isSelected(value.name)}
                        onChange={() => toggleSelect(value.name)}
                        data-testid={`filter-form-input-${filterField}-value-${value.name}`}
                      />
                      {value.name}
                    </label>
                  </div>
                );
              })}
              {submitButton()}
            </div>
          }
        </div>
      </article>
    </div>
  );
};

export default FilterForm;

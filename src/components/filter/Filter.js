import './Filter.css';

const Filter = (props) => {
    const years = [2019,2020,2021,2022];

    const onChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };
    
    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={onChangeHandler}>
                {years.map(y => <option value={y}>{y}</option>)}
            </select>
          </div>
        </div>
      );
}

export default Filter;

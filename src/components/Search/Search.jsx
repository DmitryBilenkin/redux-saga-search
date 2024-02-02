import { useSelector, useDispatch } from 'react-redux';
import { asyncGetFetchAPI } from '../../state/resultOfSearchSlice';
import ResponseItem from '../ResponseItem/ResponseItem';
import './Search.css';

function Search() {
  const {currValueOfSearch, data, loading, messageEmptyField} = useSelector(state => state.resultOfSearch);
  const dispatch = useDispatch();

  const inputSearchHandler =(e)=>{
    dispatch(asyncGetFetchAPI(e.target.value))
  }

  return (
    <div className='search-container'>
        <input className='search__inpt' type='search' onChange={inputSearchHandler} value={currValueOfSearch} style={{marginBottom:20}}/>
        {currValueOfSearch === '' && <div>{messageEmptyField}</div>}
        {loading && <div>Loading...</div>}
        <ul className='search__result' style={{listStyleType: 'none', padding:0}}>
            {!loading && data.map(item => <li key={item.id}><ResponseItem  dataItem={item.name}/></li>)}
            {data.length === 0 && !loading &&  messageEmptyField === '' && <div>Ничего не найдено</div>}
        </ul>
    </div>    
  )
}

export default Search;

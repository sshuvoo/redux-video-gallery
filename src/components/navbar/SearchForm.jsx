import { useState } from 'react';
import searchIcon from './../../assets/search.svg';
import { useDispatch } from 'react-redux';
import { searchkeySelection } from '../../features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

export default function SearchForm() {
   const dispatch = useDispatch();
   const [searchKey, setSearchKey] = useState('');
   const match = useMatch('/');
   const navigate = useNavigate();

   const submitHandler = (event) => {
      event.preventDefault();
      dispatch(searchkeySelection(searchKey));
      match || navigate('/');
   };

   return (
      <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
         <form onSubmit={submitHandler}>
            <input
               className="outline-none border-none mr-2"
               type="search"
               name="search"
               placeholder="Search"
               value={searchKey}
               onChange={(e) => setSearchKey(e.target.value)}
            />
         </form>
         <img
            className="inline h-4 cursor-pointer"
            src={searchIcon}
            alt="Search"
         />
      </div>
   );
}

import { useDispatch, useSelector } from 'react-redux';
import { keySelection } from '../../features/filter/filterSlice';

/* eslint-disable react/prop-types */
export default function TagItem({ title }) {
   const { filterKeys } = useSelector((state) => state.filter);
   const dispatch = useDispatch();

   return (
      <div
         onClick={() => dispatch(keySelection(title))}
         className={`px-4 py-1 rounded-full cursor-pointer select-none ${
            filterKeys?.includes(title)
               ? 'bg-blue-600 text-white'
               : 'bg-blue-100 text-blue-600'
         }`}
      >
         {title}
      </div>
   );
}

import React from 'react';
import './searchBar.css';

const SearchBar = () => {
 const renderSearchIcon = () => (
   <svg 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     fill="none"
   >
     <path 
       d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
       stroke="white" 
       strokeWidth="2" 
       strokeLinecap="round" 
       strokeLinejoin="round"
     />
   </svg>
 );

 return (
   <React.Fragment>
     <div className="search-container">
       <input 
         type="text" 
         className="search-input"
         placeholder="검색어를 입력해주세요. (서명, 저자, 출판사)"
       />
       <button className="search-button">
         {renderSearchIcon()}
       </button>
     </div>
   </React.Fragment>
 );
};

export default SearchBar;
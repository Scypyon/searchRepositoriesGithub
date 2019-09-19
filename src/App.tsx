import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore: Unreachable code error
import { DataTable } from 'react-data-components';

import { fetchResults } from "./store/searchModule/searchAction"

import 'react-data-components/css/table-twbs.css';

const App: React.FC = () => {

  const [query, setQuery] = useState();
  const store = useSelector((state: any) => state.search);
  const dispatch = useDispatch();

  const showResults = () => {
    dispatch(fetchResults(query));
  }

  var columns = [
    { title: 'Name', prop: 'name' },
    { title: 'Owner', prop: 'owner' },
    { title: 'Stars', prop: 'stars' },
    { title: 'Created At', prop: 'createdAt' }
  ];

  return (
    <>
      <input onChange={e => setQuery(e.target.value)} type="text" />
      <button onClick={showResults}>Pokaż Wyniki</button>
      {
        store.results ?
          < DataTable
            className="container"
            columns={columns}
            initialData={store.results}
            initialPageLength={5}
            initialSortBy={{ prop: 'stars', order: 'descending' }}
            pageLengthOptions={[5, 20, 50]}
          />
          : <div>Wczytuję...</div>
      }
    </>
  );
}

export default App;

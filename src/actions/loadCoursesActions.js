import axios from 'axios';

export const getSearchResults = () => {
  return (dispatch) => {
    // json-server --watch db.json --port 3004
    const url = `${window.location.origin}/db.json`;
    dispatch({ type: 'LOADING', payload: true });

    return axios.get(url).then(
      response => {
        console.log('Api Call Success');
        dispatch({ type: 'LOADING', payload: false });
        dispatch({ type: 'RESULTS_SUCCESS', payload: response.data });
        dispatch({ type: 'LOAD_CATEGORIES', payload: Object.keys(response.data.categories) })
      },
      error => {
        console.log('Api Call Failure');
        dispatch({ type: 'LOADING', payload: false });
        dispatch({ type: 'RESULTS_FAILURE', payload: error });
      }
    );
  };
};

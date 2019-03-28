const GET_FILM = 'GET_FILM';
const LIST_FILMS = 'LIST_FILMS';
const FETCHING_FILMS = 'FETCHING_FILMS';
const FAIL_FILMS = 'FAIL_FILMS';

interface IState {
  films: any[];
  isFetching: boolean;
  hasErrors: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  films: [],
  isFetching: false,
  hasErrors: false,
}

export default function reducer(state: IState = initialState, action: IAction) {
  switch(action.type) {
    case FETCHING_FILMS:
      return {
        films: state.films,
        isFetching: true,
        hasErrors: state.hasErrors,
      };

    case LIST_FILMS:
      console.log(action.payload);
      return {
        films: action.payload,
        isFetching: false,
        hasErrors: false,
      };

    case GET_FILM:
      console.log(action.payload);
      return {
        films: action.payload,
        isFetching: false,
        hasErrors: false,
      };

    case FAIL_FILMS:
      return {
        films: state.films,
        isFetching: false,
        hasErrors: action.payload,
      }

    default:
      return state;
  }
}

export const listFilms = () => {
  return (dispatch: any) => {
    dispatch({type: FETCHING_FILMS, payload: null })

    fetch('https://swapi.co/api/films', {method: 'GET'})
      .then(res => res.json())
      .then(films => {
        dispatch({type: LIST_FILMS, payload: films.results });
      })
      .catch(error => {
        return dispatch({
          type: FAIL_FILMS,
          payload: error
        });
    });
  }
}

export const getFilm = (film: string) => {
  return (dispatch: any) => {
    dispatch({type: FETCHING_FILMS, payload: null })

    fetch('https://swapi.co/api/films/?search=' + film, {method: 'GET'})
      .then(res => res.json())
      .then(film => {
        dispatch({type: GET_FILM, payload: film.results });
      })
      .catch(error => {
        return dispatch({
          type: FAIL_FILMS,
          payload: error
        });
    });
  }
}

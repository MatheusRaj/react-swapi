import films from '../shared/api/films';
import film from '../shared/api/film';

const LIST_FILMS = 'LIST_FILMS';
const GET_FILM = 'GET_FILM';

interface IState {
  films: any[];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  films: [],
}

export default function reducer(state: IState = initialState, action: IAction) {
  switch(action.type) {
    case LIST_FILMS:
      const responseFilms = films.results
      return {
        films: responseFilms,
      };
    case GET_FILM:
      const responseFilm = film.results;
      return {
        films: responseFilm,
      };
      default:
        return state;
  }
}

export const listFilms = () => ({
  type: LIST_FILMS,
})

export const getFilm = (film: string) => ({
  type: GET_FILM,
  payload: film,
})

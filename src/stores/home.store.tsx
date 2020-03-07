import * as starWarsApi from '../apis/starwars.api';
import { action, observable } from 'mobx';
import { Film } from '../interface/starwars.interface';

export default class HomeStore {

    @observable films: Film[] = [];
    @observable film: Film | any = {};

    @action getFilms = async () => {
        try {
            const { data: films } = await starWarsApi.getFilms();
            this.films = films;
        }
        catch (error) {
            this.films = [];
        }
    }

    @action getFilmsById = async (id: number) => {
        try {
            this.film = {};
            const { data: film } = await starWarsApi.getFilmById(id);
            this.film = film;
        }
        catch (error) {
            this.film = {};
        }
    }
}
const homeStore = new HomeStore();

export { homeStore };
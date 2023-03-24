import putLocalStorage from "../Utilities/PutLocalStorage";

class PutLocalStore {
    createNewSession = () => putLocalStorage.get('sessionId')
    getRatedMovies = () => putLocalStorage.get('sessionId')
}
export default PutLocalStore;
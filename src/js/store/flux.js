
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: []
        },
        actions: {
            // Función para cargar datos desde la API
            fetchPeople: async () => {
                const response = await fetch("https://swapi.dev/api/people/");
                const data = await response.json();
                setStore({ people: data.results });
            },
            fetchVehicles: async () => {
                const response = await fetch("https://swapi.dev/api/vehicles/");
                const data = await response.json();
                setStore({ vehicles: data.results });
            },
            fetchPlanets: async () => {
                const response = await fetch("https://swapi.dev/api/planets/");
                const data = await response.json();
                setStore({ planets: data.results });
            },
            addFavorite: item => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] });
            },
            removeFavorite: item => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== item) });
            },
            // Función para cargar datos desde la API de favoritos 
            fetchFavorites: async () => {
                const response = await fetch("https://www.swapi.tech/api/people");
                const data = await response.json();
                setStore({ favorites: data.results });
            },

            loadSomeData: () => {
                // podemos definir esta función para cargar algunos datos iniciales si se necesitan en el store global al inicio de la aplicación.
                console.log("Cargando datos...desde FLUX"); 
                getActions().fetchPeople();
                getActions().fetchVehicles();
                getActions().fetchPlanets();
                
            

            }
        
            
           

            
        }
    };
};

export default getState;


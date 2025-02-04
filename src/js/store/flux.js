const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        people: [],
        vehicles: [],
        planets: [],
        favorites: []
      },
      actions: {
        fetchPeople: async () => {
          const response = await fetch("https://swapi.dev/api/people/");
          const data = await response.json();
          setStore({ people: data.results });
        },
        fetchVehicles: async () => {
          const response = await fetch("https://swapi.dev/api/starships/");
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
          if (!store.favorites.includes(item)) {
            setStore({ favorites: [...store.favorites, item] });
          }
        },
        removeFavorite: item => {
          const store = getStore();
          setStore({ favorites: store.favorites.filter(fav => fav !== item) });
        },
        loadInitialData: () => {
          getActions().fetchPeople();
          getActions().fetchVehicles();
          getActions().fetchPlanets();
        }
      }
    };
  };
  
  export default getState;
  
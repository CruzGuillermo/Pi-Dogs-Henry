const initialstate = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  detail: [],
  loading: false,
};

function rootReducer(state = initialstate, action) {
  switch (action.type) {
    case "GET_DOGS_BY_NAME":
      return {
        ...state,
        dogs: action.payload,
      };
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
        loading: false,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "GET_DOG_BY_ID":
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortedArr,
      };

    case "ORDER_BY_WEIGHT":
      let sortedArrWeight =
        action.payload === "weightasc"
          ? state.dogs.sort(function (a, b) {
              return b.weightMin - a.weightMin;
            })
          : state.dogs.sort(function (a, b) {
              return a.weightMin - b.weightMin;
            });
      return {
        ...state,
        allDogs: sortedArrWeight,
      };
    case "FILTER_DOG_TEMPERAMENTS":
      const allDog = state.allDogs;
      const filteredDogs =
        action.payload === "all"
          ? allDog
          : allDog.filter((el) => el.temperament?.includes(action.payload));
      return {
        ...state,
        dogs: filteredDogs,
      };
    case "FILTER_CREATED":
      let estado = state.allDogs;
      const filterCreated =
        action.payload === "todos"
          ? estado
          : action.payload === "existentes"
          ? estado
          : estado.filter((data) => data.id.length > 4);
      return {
        ...state,
        dogs: filterCreated,
      };
    case "DELETE_DOG":
      return {
        ...state,
      };
    case "DOG_EDIT":
      return {
        ...state,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;

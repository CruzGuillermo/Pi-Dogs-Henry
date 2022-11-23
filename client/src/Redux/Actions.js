import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    dispatch({
      type: "LOADING",
    });
    try {
      const response = await axios.get("/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let json = await axios.get("/temperaments");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: json.data,
    });
  };
}

export function getDogName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(`/dogs?name=${name}`);
    return dispatch({
      type: "GET_DOGS_BY_NAME",
      payload: data,
    });
  };
}

export function getDogById(id) {
  return async function (dispatch) {
    dispatch({
      type: "LOADING",
    });
    try {
      const response = await axios.get(`/dogs/${id}`);
      return dispatch({
        type: "GET_DOG_BY_ID",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      alert(`No se encontro el Dog con Id: ${id}, Intentalo de nuevo `);
    }
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post("/dogs", payload);
      console.log(json);
      return dispatch({
        type: "POST_DOG",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

export function filterDogTemperaments(payload) {
  console.log(payload);
  return {
    type: "FILTER_DOG_TEMPERAMENTS",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function deleteDog(id){
  return async function (dispatch) {
    let deletedog = await axios.delete(`/dogs/${id}`)
    return (
      dispatch({
        type: 'DELETE_DOG',
        payload: deletedog.data
      })
    )
   
  }
}

export function editDog (payload, id) {
  return async function (dispatch){
    var edit = await axios.put(`/dogs/${id}/edit`, payload)
    return(
      dispatch({
        type: 'DOG_EDIT',
        payload: edit.data
      })
    )
  }
}


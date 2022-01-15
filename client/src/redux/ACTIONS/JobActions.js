import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const getNewTodo = (todo) => async (dispatch) => {
   try {
      dispatch({ type: actionTypes.POST_NEW_TODO_REQ });
      const { data } = await axios.post("http://localhost:3001/newTodo", todo);
      dispatch({
         type: actionTypes.POST_NEW_TODO_REQ,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.POST_NEW_TODO_ERROR,
         error: error.message,
      });
   }
};

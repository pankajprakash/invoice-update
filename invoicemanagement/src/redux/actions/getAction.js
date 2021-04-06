export const getAction = (details) => {
    return {
      type: "FETCH_USERS_SUCCESS",
      payload: details,
    };
  };

  export default getAction
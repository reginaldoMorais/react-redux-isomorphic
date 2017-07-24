const INITINAL_STATE = {message: ''};

const started = (state = INITINAL_STATE, action) => {
  switch (action.type) {
    case 'ALERT': {
      const data = action.payload.data;
      alert(data.message);
      return {...state, message: data.message};
    }

    default:
      return state;
  }
};

export default started;

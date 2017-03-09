const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';

export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  return dispatch => fetch(apiUrl)
    .then(r => r.json())
    .then(puppies => dispatch(findAllComplete(puppies)));
}

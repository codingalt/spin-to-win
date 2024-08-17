export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const extractErrors = (errors) => {
  if (errors) {
    const errorsArray = Object.keys(errors).reduce((acc, key) => {
      return acc.concat(errors[key]);
    }, []);
    return errorsArray;
  }
};
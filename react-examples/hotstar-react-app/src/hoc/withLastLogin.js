// this is higher order component - HOC
/*
  HOC is going to receive props children and return props children
  you can return multiple JSX children elements
  wrapper comp that doesn't return any JSX on its own.
  A HOC is a pure function with zero side-effects.
*/

const WithLastLogin = (props) => {
  console.log(props);
  return props.children;
}

export default WithLastLogin;


import {
  useLocation,
  useParams,
  /* other hooks */
} from 'react-router-dom';

const withRouter = Component => props => {
  const location = useLocation();
  const params = useParams();
  // other hooks

  return (
    <Component
      {...props}
      {...{ location, params, /* other hook props */ }}
    />
  );
};

export default withRouter;
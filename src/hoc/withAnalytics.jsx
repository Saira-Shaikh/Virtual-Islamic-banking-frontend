import { useEffect } from "react";
const withAnalytics = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      // Track page view or interaction
      console.log(`${WrappedComponent.name} viewed`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAnalytics;

import React from 'react';
import Alert from 'react-bootstrap/Alert';
const ErrorFallback = ({ error }) => {
    return (<Alert variant="warning">
        <Alert.Heading>Something Went Wrong!</Alert.Heading>
        <p>{error.message}</p>
        <p>Please try again after sometime</p>
    </Alert>
    )
}
export default ErrorFallback;
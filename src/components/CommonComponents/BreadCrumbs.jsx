import React from 'react';
import { Link, useHistory } from "react-router-dom";
import ErrorFallback from './ErrorFallback';

const Breadcrumbs = ({ links }) => {
    const history = useHistory();
    try {
        return (<p className='mt-4'>
            { links.map((link) => (
                link.linkUrl ? <><span style={{ fontSize: '16px', color: '#000', textDecoration: 'none' }}>
                    <Link to="/dashboard">{link.linkName}</Link>
                </span> &gt;&nbsp; </> : link.onClick ? <><span className='cursor-pointer' onClick={() => history.goBack()} style={{ fontSize: '16px', color: '#000', textDecoration: 'none' }}>
                    {link.linkName}
                </span> &gt;&nbsp; </> : <span style={{ fontSize: '14px', color: '#ccc' }}>
                    {link.linkName}
                </span>
            ))}
        </p>
        )
    } catch (error) {
        return <ErrorFallback error={error} />
    }
}
export default Breadcrumbs;
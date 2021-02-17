// Copyright © 2021 Jonathan Dean Damiani
import React from "react";
import { useQuery } from '@apollo/client';

const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id }
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error try to reload the page</div>;
    
    return children({ data });
};

export default Query;
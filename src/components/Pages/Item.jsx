import React from 'react';

import Grid from '/voxeliface/components/Grid';
export default function PageItem({ value, children }) {
    return <Grid width="100%" height="100%">
        {children}
    </Grid>;
};
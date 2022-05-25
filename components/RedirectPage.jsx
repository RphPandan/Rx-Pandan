import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function RedirectPage() {
  return (
    <div>
      <span>Redirecting to login...</span>
      <CircularProgress
        sx={{
          color: '#AC3B61',
        }}
        size={100}
      />
    </div>
  );
}

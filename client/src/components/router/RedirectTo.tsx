import * as React from 'react';

type Props = {
  url?: string;
};

const RedirectTo: React.FC<Props> = (props) => {
  if (!props.url || window.location.pathname === props.url) {
    return null;
  }

  window.location.href = props.url;
  return null;
};

export default RedirectTo;

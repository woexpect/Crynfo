import * as React from 'react';

interface NavigationReference {
  current: any;
}
export const navigationRef: NavigationReference = React.createRef();

export function navigate(name: string, params: string) {
  navigationRef.current?.navigate(name, params);
}

import React, { FC, memo } from 'react';
import CordovaSvg from '../svg/cordova.svg';

export interface ICordovaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CordovaIcon: FC<ICordovaIconProps> = memo(props => {
  return <CordovaSvg {...props} />;
});

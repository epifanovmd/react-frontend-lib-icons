import React, { FC, memo } from 'react';
import GoogleSvg from '../svg/google.svg';

export interface IGoogleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleIcon: FC<IGoogleIconProps> = memo(props => {
  return <GoogleSvg {...props} />;
});

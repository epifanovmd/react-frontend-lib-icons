import React, { FC, memo } from 'react';
import GoogleMyBusinessSvg from '../svg/google-my-business.svg';

export interface IGoogleMyBusinessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleMyBusinessIcon: FC<IGoogleMyBusinessIconProps> = memo(props => {
  return <GoogleMyBusinessSvg {...props} />;
});

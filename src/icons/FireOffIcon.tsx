import React, { FC, memo } from 'react';
import FireOffSvg from '../svg/fire-off.svg';

export interface IFireOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireOffIcon: FC<IFireOffIconProps> = memo(props => {
  return <FireOffSvg {...props} />;
});

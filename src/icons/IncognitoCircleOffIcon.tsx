import React, { FC, memo } from 'react';
import IncognitoCircleOffSvg from '../svg/incognito-circle-off.svg';

export interface IIncognitoCircleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IncognitoCircleOffIcon: FC<IIncognitoCircleOffIconProps> = memo(props => {
  return <IncognitoCircleOffSvg {...props} />;
});

import React, { FC, memo } from 'react';
import IncognitoCircleSvg from '../svg/incognito-circle.svg';

export interface IIncognitoCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IncognitoCircleIcon: FC<IIncognitoCircleIconProps> = memo(props => {
  return <IncognitoCircleSvg {...props} />;
});

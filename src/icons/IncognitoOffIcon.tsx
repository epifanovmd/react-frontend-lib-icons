import React, { FC, memo } from 'react';
import IncognitoOffSvg from '../svg/incognito-off.svg';

export interface IIncognitoOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IncognitoOffIcon: FC<IIncognitoOffIconProps> = memo(props => {
  return <IncognitoOffSvg {...props} />;
});

import React, { FC, memo } from 'react';
import IncognitoSvg from '../svg/incognito.svg';

export interface IIncognitoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IncognitoIcon: FC<IIncognitoIconProps> = memo(props => {
  return <IncognitoSvg {...props} />;
});

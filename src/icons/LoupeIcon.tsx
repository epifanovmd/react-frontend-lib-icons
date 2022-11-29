import React, { FC, memo } from 'react';
import LoupeSvg from '../svg/loupe.svg';

export interface ILoupeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LoupeIcon: FC<ILoupeIconProps> = memo(props => {
  return <LoupeSvg {...props} />;
});

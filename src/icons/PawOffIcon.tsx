import React, { FC, memo } from 'react';
import PawOffSvg from '../svg/paw-off.svg';

export interface IPawOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PawOffIcon: FC<IPawOffIconProps> = memo(props => {
  return <PawOffSvg {...props} />;
});

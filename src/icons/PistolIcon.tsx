import React, { FC, memo } from 'react';
import PistolSvg from '../svg/pistol.svg';

export interface IPistolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PistolIcon: FC<IPistolIconProps> = memo(props => {
  return <PistolSvg {...props} />;
});

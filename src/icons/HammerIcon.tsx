import React, { FC, memo } from 'react';
import HammerSvg from '../svg/hammer.svg';

export interface IHammerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HammerIcon: FC<IHammerIconProps> = memo(props => {
  return <HammerSvg {...props} />;
});

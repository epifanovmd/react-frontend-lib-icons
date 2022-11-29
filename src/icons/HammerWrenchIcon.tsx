import React, { FC, memo } from 'react';
import HammerWrenchSvg from '../svg/hammer-wrench.svg';

export interface IHammerWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HammerWrenchIcon: FC<IHammerWrenchIconProps> = memo(props => {
  return <HammerWrenchSvg {...props} />;
});

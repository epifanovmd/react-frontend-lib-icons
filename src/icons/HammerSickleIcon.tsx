import React, { FC, memo } from 'react';
import HammerSickleSvg from '../svg/hammer-sickle.svg';

export interface IHammerSickleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HammerSickleIcon: FC<IHammerSickleIconProps> = memo(props => {
  return <HammerSickleSvg {...props} />;
});

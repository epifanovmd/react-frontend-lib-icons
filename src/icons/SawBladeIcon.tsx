import React, { FC, memo } from 'react';
import SawBladeSvg from '../svg/saw-blade.svg';

export interface ISawBladeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SawBladeIcon: FC<ISawBladeIconProps> = memo(props => {
  return <SawBladeSvg {...props} />;
});

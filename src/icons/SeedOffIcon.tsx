import React, { FC, memo } from 'react';
import SeedOffSvg from '../svg/seed-off.svg';

export interface ISeedOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeedOffIcon: FC<ISeedOffIconProps> = memo(props => {
  return <SeedOffSvg {...props} />;
});

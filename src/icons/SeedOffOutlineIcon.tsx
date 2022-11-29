import React, { FC, memo } from 'react';
import SeedOffOutlineSvg from '../svg/seed-off-outline.svg';

export interface ISeedOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeedOffOutlineIcon: FC<ISeedOffOutlineIconProps> = memo(props => {
  return <SeedOffOutlineSvg {...props} />;
});

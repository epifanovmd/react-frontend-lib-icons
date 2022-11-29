import React, { FC, memo } from 'react';
import SeedOutlineSvg from '../svg/seed-outline.svg';

export interface ISeedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeedOutlineIcon: FC<ISeedOutlineIconProps> = memo(props => {
  return <SeedOutlineSvg {...props} />;
});

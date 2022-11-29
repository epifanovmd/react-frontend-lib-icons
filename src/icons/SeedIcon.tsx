import React, { FC, memo } from 'react';
import SeedSvg from '../svg/seed.svg';

export interface ISeedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeedIcon: FC<ISeedIconProps> = memo(props => {
  return <SeedSvg {...props} />;
});

import React, { FC, memo } from 'react';
import SeedPlusSvg from '../svg/seed-plus.svg';

export interface ISeedPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeedPlusIcon: FC<ISeedPlusIconProps> = memo(props => {
  return <SeedPlusSvg {...props} />;
});

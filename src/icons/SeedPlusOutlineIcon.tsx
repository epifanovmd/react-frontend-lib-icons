import React, { FC, memo } from 'react';
import SeedPlusOutlineSvg from '../svg/seed-plus-outline.svg';

export interface ISeedPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeedPlusOutlineIcon: FC<ISeedPlusOutlineIconProps> = memo(props => {
  return <SeedPlusOutlineSvg {...props} />;
});

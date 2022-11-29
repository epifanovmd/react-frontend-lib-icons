import React, { FC, memo } from 'react';
import RollerbladeSvg from '../svg/rollerblade.svg';

export interface IRollerbladeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollerbladeIcon: FC<IRollerbladeIconProps> = memo(props => {
  return <RollerbladeSvg {...props} />;
});

import React, { FC, memo } from 'react';
import BeeFlowerSvg from '../svg/bee-flower.svg';

export interface IBeeFlowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeeFlowerIcon: FC<IBeeFlowerIconProps> = memo(props => {
  return <BeeFlowerSvg {...props} />;
});

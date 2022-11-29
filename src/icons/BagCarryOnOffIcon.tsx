import React, { FC, memo } from 'react';
import BagCarryOnOffSvg from '../svg/bag-carry-on-off.svg';

export interface IBagCarryOnOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagCarryOnOffIcon: FC<IBagCarryOnOffIconProps> = memo(props => {
  return <BagCarryOnOffSvg {...props} />;
});

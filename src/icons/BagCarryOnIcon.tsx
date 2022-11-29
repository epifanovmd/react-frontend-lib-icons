import React, { FC, memo } from 'react';
import BagCarryOnSvg from '../svg/bag-carry-on.svg';

export interface IBagCarryOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagCarryOnIcon: FC<IBagCarryOnIconProps> = memo(props => {
  return <BagCarryOnSvg {...props} />;
});

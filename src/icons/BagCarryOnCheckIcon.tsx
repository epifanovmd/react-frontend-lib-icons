import React, { FC, memo } from 'react';
import BagCarryOnCheckSvg from '../svg/bag-carry-on-check.svg';

export interface IBagCarryOnCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagCarryOnCheckIcon: FC<IBagCarryOnCheckIconProps> = memo(props => {
  return <BagCarryOnCheckSvg {...props} />;
});

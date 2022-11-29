import React, { FC, memo } from 'react';
import ButterflyOutlineSvg from '../svg/butterfly-outline.svg';

export interface IButterflyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ButterflyOutlineIcon: FC<IButterflyOutlineIconProps> = memo(props => {
  return <ButterflyOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import BellMinusOutlineSvg from '../svg/bell-minus-outline.svg';

export interface IBellMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellMinusOutlineIcon: FC<IBellMinusOutlineIconProps> = memo(props => {
  return <BellMinusOutlineSvg {...props} />;
});

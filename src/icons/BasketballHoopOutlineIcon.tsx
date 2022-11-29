import React, { FC, memo } from 'react';
import BasketballHoopOutlineSvg from '../svg/basketball-hoop-outline.svg';

export interface IBasketballHoopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketballHoopOutlineIcon: FC<IBasketballHoopOutlineIconProps> = memo(props => {
  return <BasketballHoopOutlineSvg {...props} />;
});

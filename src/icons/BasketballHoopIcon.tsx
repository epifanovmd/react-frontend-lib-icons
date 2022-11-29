import React, { FC, memo } from 'react';
import BasketballHoopSvg from '../svg/basketball-hoop.svg';

export interface IBasketballHoopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BasketballHoopIcon: FC<IBasketballHoopIconProps> = memo(props => {
  return <BasketballHoopSvg {...props} />;
});

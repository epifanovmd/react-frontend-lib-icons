import React, { FC, memo } from 'react';
import Store24HourSvg from '../svg/store-24-hour.svg';

export interface IStore24HourIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Store24HourIcon: FC<IStore24HourIconProps> = memo(props => {
  return <Store24HourSvg {...props} />;
});

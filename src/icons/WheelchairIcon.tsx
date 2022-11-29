import React, { FC, memo } from 'react';
import WheelchairSvg from '../svg/wheelchair.svg';

export interface IWheelchairIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WheelchairIcon: FC<IWheelchairIconProps> = memo(props => {
  return <WheelchairSvg {...props} />;
});

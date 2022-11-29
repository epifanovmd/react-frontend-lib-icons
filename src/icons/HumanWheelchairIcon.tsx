import React, { FC, memo } from 'react';
import HumanWheelchairSvg from '../svg/human-wheelchair.svg';

export interface IHumanWheelchairIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanWheelchairIcon: FC<IHumanWheelchairIconProps> = memo(props => {
  return <HumanWheelchairSvg {...props} />;
});

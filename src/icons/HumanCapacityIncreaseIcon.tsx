import React, { FC, memo } from 'react';
import HumanCapacityIncreaseSvg from '../svg/human-capacity-increase.svg';

export interface IHumanCapacityIncreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanCapacityIncreaseIcon: FC<IHumanCapacityIncreaseIconProps> = memo(props => {
  return <HumanCapacityIncreaseSvg {...props} />;
});

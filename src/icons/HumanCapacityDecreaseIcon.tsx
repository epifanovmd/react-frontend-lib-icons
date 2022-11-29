import React, { FC, memo } from 'react';
import HumanCapacityDecreaseSvg from '../svg/human-capacity-decrease.svg';

export interface IHumanCapacityDecreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanCapacityDecreaseIcon: FC<IHumanCapacityDecreaseIconProps> = memo(props => {
  return <HumanCapacityDecreaseSvg {...props} />;
});

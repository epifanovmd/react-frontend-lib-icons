import React, { FC, memo } from 'react';
import WateringCanSvg from '../svg/watering-can.svg';

export interface IWateringCanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WateringCanIcon: FC<IWateringCanIconProps> = memo(props => {
  return <WateringCanSvg {...props} />;
});

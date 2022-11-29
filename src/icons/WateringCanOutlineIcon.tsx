import React, { FC, memo } from 'react';
import WateringCanOutlineSvg from '../svg/watering-can-outline.svg';

export interface IWateringCanOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WateringCanOutlineIcon: FC<IWateringCanOutlineIconProps> = memo(props => {
  return <WateringCanOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import HoopHouseSvg from '../svg/hoop-house.svg';

export interface IHoopHouseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HoopHouseIcon: FC<IHoopHouseIconProps> = memo(props => {
  return <HoopHouseSvg {...props} />;
});

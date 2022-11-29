import React, { FC, memo } from 'react';
import DumpTruckSvg from '../svg/dump-truck.svg';

export interface IDumpTruckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DumpTruckIcon: FC<IDumpTruckIconProps> = memo(props => {
  return <DumpTruckSvg {...props} />;
});

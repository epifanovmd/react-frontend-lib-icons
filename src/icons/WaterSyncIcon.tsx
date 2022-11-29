import React, { FC, memo } from 'react';
import WaterSyncSvg from '../svg/water-sync.svg';

export interface IWaterSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterSyncIcon: FC<IWaterSyncIconProps> = memo(props => {
  return <WaterSyncSvg {...props} />;
});

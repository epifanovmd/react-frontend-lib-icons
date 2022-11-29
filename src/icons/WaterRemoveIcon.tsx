import React, { FC, memo } from 'react';
import WaterRemoveSvg from '../svg/water-remove.svg';

export interface IWaterRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterRemoveIcon: FC<IWaterRemoveIconProps> = memo(props => {
  return <WaterRemoveSvg {...props} />;
});

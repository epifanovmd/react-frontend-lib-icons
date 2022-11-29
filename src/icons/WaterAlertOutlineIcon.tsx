import React, { FC, memo } from 'react';
import WaterAlertOutlineSvg from '../svg/water-alert-outline.svg';

export interface IWaterAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterAlertOutlineIcon: FC<IWaterAlertOutlineIconProps> = memo(props => {
  return <WaterAlertOutlineSvg {...props} />;
});

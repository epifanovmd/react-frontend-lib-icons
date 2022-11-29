import React, { FC, memo } from 'react';
import WatermarkSvg from '../svg/watermark.svg';

export interface IWatermarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatermarkIcon: FC<IWatermarkIconProps> = memo(props => {
  return <WatermarkSvg {...props} />;
});

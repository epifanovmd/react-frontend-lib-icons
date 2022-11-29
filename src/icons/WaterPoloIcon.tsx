import React, { FC, memo } from 'react';
import WaterPoloSvg from '../svg/water-polo.svg';

export interface IWaterPoloIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPoloIcon: FC<IWaterPoloIconProps> = memo(props => {
  return <WaterPoloSvg {...props} />;
});

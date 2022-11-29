import React, { FC, memo } from 'react';
import OutdoorLampSvg from '../svg/outdoor-lamp.svg';

export interface IOutdoorLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OutdoorLampIcon: FC<IOutdoorLampIconProps> = memo(props => {
  return <OutdoorLampSvg {...props} />;
});

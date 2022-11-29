import React, { FC, memo } from 'react';
import OilLampSvg from '../svg/oil-lamp.svg';

export interface IOilLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OilLampIcon: FC<IOilLampIconProps> = memo(props => {
  return <OilLampSvg {...props} />;
});

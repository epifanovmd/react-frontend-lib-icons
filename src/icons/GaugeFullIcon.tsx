import React, { FC, memo } from 'react';
import GaugeFullSvg from '../svg/gauge-full.svg';

export interface IGaugeFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GaugeFullIcon: FC<IGaugeFullIconProps> = memo(props => {
  return <GaugeFullSvg {...props} />;
});

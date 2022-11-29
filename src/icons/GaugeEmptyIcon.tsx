import React, { FC, memo } from 'react';
import GaugeEmptySvg from '../svg/gauge-empty.svg';

export interface IGaugeEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GaugeEmptyIcon: FC<IGaugeEmptyIconProps> = memo(props => {
  return <GaugeEmptySvg {...props} />;
});

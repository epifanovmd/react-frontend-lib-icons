import React, { FC, memo } from 'react';
import TapeMeasureSvg from '../svg/tape-measure.svg';

export interface ITapeMeasureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TapeMeasureIcon: FC<ITapeMeasureIconProps> = memo(props => {
  return <TapeMeasureSvg {...props} />;
});

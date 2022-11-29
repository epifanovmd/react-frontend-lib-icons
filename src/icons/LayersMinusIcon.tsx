import React, { FC, memo } from 'react';
import LayersMinusSvg from '../svg/layers-minus.svg';

export interface ILayersMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersMinusIcon: FC<ILayersMinusIconProps> = memo(props => {
  return <LayersMinusSvg {...props} />;
});

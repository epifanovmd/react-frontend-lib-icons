import React, { FC, memo } from 'react';
import LayersSvg from '../svg/layers.svg';

export interface ILayersIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersIcon: FC<ILayersIconProps> = memo(props => {
  return <LayersSvg {...props} />;
});

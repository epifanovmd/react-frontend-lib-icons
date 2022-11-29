import React, { FC, memo } from 'react';
import LayersPlusSvg from '../svg/layers-plus.svg';

export interface ILayersPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersPlusIcon: FC<ILayersPlusIconProps> = memo(props => {
  return <LayersPlusSvg {...props} />;
});

import React, { FC, memo } from 'react';
import LayersRemoveSvg from '../svg/layers-remove.svg';

export interface ILayersRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersRemoveIcon: FC<ILayersRemoveIconProps> = memo(props => {
  return <LayersRemoveSvg {...props} />;
});

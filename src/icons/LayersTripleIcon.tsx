import React, { FC, memo } from 'react';
import LayersTripleSvg from '../svg/layers-triple.svg';

export interface ILayersTripleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersTripleIcon: FC<ILayersTripleIconProps> = memo(props => {
  return <LayersTripleSvg {...props} />;
});

import React, { FC, memo } from 'react';
import LayersTripleOutlineSvg from '../svg/layers-triple-outline.svg';

export interface ILayersTripleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersTripleOutlineIcon: FC<ILayersTripleOutlineIconProps> = memo(props => {
  return <LayersTripleOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import LayersOutlineSvg from '../svg/layers-outline.svg';

export interface ILayersOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersOutlineIcon: FC<ILayersOutlineIconProps> = memo(props => {
  return <LayersOutlineSvg {...props} />;
});

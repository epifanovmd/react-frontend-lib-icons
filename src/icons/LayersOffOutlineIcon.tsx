import React, { FC, memo } from 'react';
import LayersOffOutlineSvg from '../svg/layers-off-outline.svg';

export interface ILayersOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersOffOutlineIcon: FC<ILayersOffOutlineIconProps> = memo(props => {
  return <LayersOffOutlineSvg {...props} />;
});

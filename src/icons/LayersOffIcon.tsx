import React, { FC, memo } from 'react';
import LayersOffSvg from '../svg/layers-off.svg';

export interface ILayersOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersOffIcon: FC<ILayersOffIconProps> = memo(props => {
  return <LayersOffSvg {...props} />;
});

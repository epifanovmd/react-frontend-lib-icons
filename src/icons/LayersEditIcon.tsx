import React, { FC, memo } from 'react';
import LayersEditSvg from '../svg/layers-edit.svg';

export interface ILayersEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersEditIcon: FC<ILayersEditIconProps> = memo(props => {
  return <LayersEditSvg {...props} />;
});

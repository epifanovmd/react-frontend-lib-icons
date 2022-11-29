import React, { FC, memo } from 'react';
import LayersSearchSvg from '../svg/layers-search.svg';

export interface ILayersSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersSearchIcon: FC<ILayersSearchIconProps> = memo(props => {
  return <LayersSearchSvg {...props} />;
});

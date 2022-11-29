import React, { FC, memo } from 'react';
import LayersSearchOutlineSvg from '../svg/layers-search-outline.svg';

export interface ILayersSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LayersSearchOutlineIcon: FC<ILayersSearchOutlineIconProps> = memo(props => {
  return <LayersSearchOutlineSvg {...props} />;
});

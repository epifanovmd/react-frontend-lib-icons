import React, { FC, memo } from 'react';
import ImageRefreshSvg from '../svg/image-refresh.svg';

export interface IImageRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageRefreshIcon: FC<IImageRefreshIconProps> = memo(props => {
  return <ImageRefreshSvg {...props} />;
});

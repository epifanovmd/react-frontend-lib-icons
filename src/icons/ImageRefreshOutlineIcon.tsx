import React, { FC, memo } from 'react';
import ImageRefreshOutlineSvg from '../svg/image-refresh-outline.svg';

export interface IImageRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageRefreshOutlineIcon: FC<IImageRefreshOutlineIconProps> = memo(props => {
  return <ImageRefreshOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import ImageFilterCenterFocusSvg from '../svg/image-filter-center-focus.svg';

export interface IImageFilterCenterFocusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterCenterFocusIcon: FC<IImageFilterCenterFocusIconProps> = memo(props => {
  return <ImageFilterCenterFocusSvg {...props} />;
});

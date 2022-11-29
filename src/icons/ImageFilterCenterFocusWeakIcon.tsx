import React, { FC, memo } from 'react';
import ImageFilterCenterFocusWeakSvg from '../svg/image-filter-center-focus-weak.svg';

export interface IImageFilterCenterFocusWeakIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterCenterFocusWeakIcon: FC<IImageFilterCenterFocusWeakIconProps> = memo(props => {
  return <ImageFilterCenterFocusWeakSvg {...props} />;
});

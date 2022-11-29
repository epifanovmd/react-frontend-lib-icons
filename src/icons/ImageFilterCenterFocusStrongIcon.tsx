import React, { FC, memo } from 'react';
import ImageFilterCenterFocusStrongSvg from '../svg/image-filter-center-focus-strong.svg';

export interface IImageFilterCenterFocusStrongIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterCenterFocusStrongIcon: FC<IImageFilterCenterFocusStrongIconProps> = memo(props => {
  return <ImageFilterCenterFocusStrongSvg {...props} />;
});

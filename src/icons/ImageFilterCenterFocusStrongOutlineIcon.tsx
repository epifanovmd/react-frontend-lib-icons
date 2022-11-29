import React, { FC, memo } from 'react';
import ImageFilterCenterFocusStrongOutlineSvg from '../svg/image-filter-center-focus-strong-outline.svg';

export interface IImageFilterCenterFocusStrongOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterCenterFocusStrongOutlineIcon: FC<IImageFilterCenterFocusStrongOutlineIconProps> = memo(props => {
  return <ImageFilterCenterFocusStrongOutlineSvg {...props} />;
});

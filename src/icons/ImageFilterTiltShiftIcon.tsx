import React, { FC, memo } from 'react';
import ImageFilterTiltShiftSvg from '../svg/image-filter-tilt-shift.svg';

export interface IImageFilterTiltShiftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterTiltShiftIcon: FC<IImageFilterTiltShiftIconProps> = memo(props => {
  return <ImageFilterTiltShiftSvg {...props} />;
});

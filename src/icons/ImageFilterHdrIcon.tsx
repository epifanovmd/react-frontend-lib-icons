import React, { FC, memo } from 'react';
import ImageFilterHdrSvg from '../svg/image-filter-hdr.svg';

export interface IImageFilterHdrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterHdrIcon: FC<IImageFilterHdrIconProps> = memo(props => {
  return <ImageFilterHdrSvg {...props} />;
});

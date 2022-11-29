import React, { FC, memo } from 'react';
import ImageFilterVintageSvg from '../svg/image-filter-vintage.svg';

export interface IImageFilterVintageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterVintageIcon: FC<IImageFilterVintageIconProps> = memo(props => {
  return <ImageFilterVintageSvg {...props} />;
});

import React, { FC, memo } from 'react';
import ImageFilterNoneSvg from '../svg/image-filter-none.svg';

export interface IImageFilterNoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageFilterNoneIcon: FC<IImageFilterNoneIconProps> = memo(props => {
  return <ImageFilterNoneSvg {...props} />;
});

import React, { FC, memo } from 'react';
import ImageMultipleOutlineSvg from '../svg/image-multiple-outline.svg';

export interface IImageMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMultipleOutlineIcon: FC<IImageMultipleOutlineIconProps> = memo(props => {
  return <ImageMultipleOutlineSvg {...props} />;
});

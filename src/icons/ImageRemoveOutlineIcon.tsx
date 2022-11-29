import React, { FC, memo } from 'react';
import ImageRemoveOutlineSvg from '../svg/image-remove-outline.svg';

export interface IImageRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageRemoveOutlineIcon: FC<IImageRemoveOutlineIconProps> = memo(props => {
  return <ImageRemoveOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import ImageMoveSvg from '../svg/image-move.svg';

export interface IImageMoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageMoveIcon: FC<IImageMoveIconProps> = memo(props => {
  return <ImageMoveSvg {...props} />;
});

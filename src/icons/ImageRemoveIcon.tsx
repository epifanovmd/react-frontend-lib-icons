import React, { FC, memo } from 'react';
import ImageRemoveSvg from '../svg/image-remove.svg';

export interface IImageRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageRemoveIcon: FC<IImageRemoveIconProps> = memo(props => {
  return <ImageRemoveSvg {...props} />;
});

import React, { FC, memo } from 'react';
import PictureInPictureTopRightSvg from '../svg/picture-in-picture-top-right.svg';

export interface IPictureInPictureTopRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PictureInPictureTopRightIcon: FC<IPictureInPictureTopRightIconProps> = memo(props => {
  return <PictureInPictureTopRightSvg {...props} />;
});

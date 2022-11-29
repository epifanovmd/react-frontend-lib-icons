import React, { FC, memo } from 'react';
import PictureInPictureBottomRightSvg from '../svg/picture-in-picture-bottom-right.svg';

export interface IPictureInPictureBottomRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PictureInPictureBottomRightIcon: FC<IPictureInPictureBottomRightIconProps> = memo(props => {
  return <PictureInPictureBottomRightSvg {...props} />;
});

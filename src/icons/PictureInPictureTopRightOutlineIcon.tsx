import React, { FC, memo } from 'react';
import PictureInPictureTopRightOutlineSvg from '../svg/picture-in-picture-top-right-outline.svg';

export interface IPictureInPictureTopRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PictureInPictureTopRightOutlineIcon: FC<IPictureInPictureTopRightOutlineIconProps> = memo(props => {
  return <PictureInPictureTopRightOutlineSvg {...props} />;
});

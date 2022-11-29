import React, { FC, memo } from 'react';
import PictureInPictureBottomRightOutlineSvg from '../svg/picture-in-picture-bottom-right-outline.svg';

export interface IPictureInPictureBottomRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PictureInPictureBottomRightOutlineIcon: FC<IPictureInPictureBottomRightOutlineIconProps> = memo(props => {
  return <PictureInPictureBottomRightOutlineSvg {...props} />;
});

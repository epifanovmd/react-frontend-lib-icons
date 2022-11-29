import React, { FC, memo } from 'react';
import VideoPlusOutlineSvg from '../svg/video-plus-outline.svg';

export interface IVideoPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoPlusOutlineIcon: FC<IVideoPlusOutlineIconProps> = memo(props => {
  return <VideoPlusOutlineSvg {...props} />;
});

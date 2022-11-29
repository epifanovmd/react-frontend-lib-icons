import React, { FC, memo } from 'react';
import VideoPlusSvg from '../svg/video-plus.svg';

export interface IVideoPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoPlusIcon: FC<IVideoPlusIconProps> = memo(props => {
  return <VideoPlusSvg {...props} />;
});

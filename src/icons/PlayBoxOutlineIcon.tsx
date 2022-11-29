import React, { FC, memo } from 'react';
import PlayBoxOutlineSvg from '../svg/play-box-outline.svg';

export interface IPlayBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxOutlineIcon: FC<IPlayBoxOutlineIconProps> = memo(props => {
  return <PlayBoxOutlineSvg {...props} />;
});

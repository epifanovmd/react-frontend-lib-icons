import React, { FC, memo } from 'react';
import PlayBoxMultipleOutlineSvg from '../svg/play-box-multiple-outline.svg';

export interface IPlayBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayBoxMultipleOutlineIcon: FC<IPlayBoxMultipleOutlineIconProps> = memo(props => {
  return <PlayBoxMultipleOutlineSvg {...props} />;
});

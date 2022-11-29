import React, { FC, memo } from 'react';
import PlayOutlineSvg from '../svg/play-outline.svg';

export interface IPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayOutlineIcon: FC<IPlayOutlineIconProps> = memo(props => {
  return <PlayOutlineSvg {...props} />;
});

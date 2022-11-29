import React, { FC, memo } from 'react';
import PlayProtectedContentSvg from '../svg/play-protected-content.svg';

export interface IPlayProtectedContentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlayProtectedContentIcon: FC<IPlayProtectedContentIconProps> = memo(props => {
  return <PlayProtectedContentSvg {...props} />;
});

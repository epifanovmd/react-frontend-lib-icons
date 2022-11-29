import React, { FC, memo } from 'react';
import CogPlaySvg from '../svg/cog-play.svg';

export interface ICogPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogPlayIcon: FC<ICogPlayIconProps> = memo(props => {
  return <CogPlaySvg {...props} />;
});

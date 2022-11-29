import React, { FC, memo } from 'react';
import PresentationPlaySvg from '../svg/presentation-play.svg';

export interface IPresentationPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PresentationPlayIcon: FC<IPresentationPlayIconProps> = memo(props => {
  return <PresentationPlaySvg {...props} />;
});

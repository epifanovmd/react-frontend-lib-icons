import React, { FC, memo } from 'react';
import ProgressStarSvg from '../svg/progress-star.svg';

export interface IProgressStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressStarIcon: FC<IProgressStarIconProps> = memo(props => {
  return <ProgressStarSvg {...props} />;
});

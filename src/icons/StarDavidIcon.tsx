import React, { FC, memo } from 'react';
import StarDavidSvg from '../svg/star-david.svg';

export interface IStarDavidIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarDavidIcon: FC<IStarDavidIconProps> = memo(props => {
  return <StarDavidSvg {...props} />;
});

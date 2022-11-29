import React, { FC, memo } from 'react';
import StarCrescentSvg from '../svg/star-crescent.svg';

export interface IStarCrescentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCrescentIcon: FC<IStarCrescentIconProps> = memo(props => {
  return <StarCrescentSvg {...props} />;
});

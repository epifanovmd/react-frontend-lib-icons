import React, { FC, memo } from 'react';
import StarCogSvg from '../svg/star-cog.svg';

export interface IStarCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCogIcon: FC<IStarCogIconProps> = memo(props => {
  return <StarCogSvg {...props} />;
});

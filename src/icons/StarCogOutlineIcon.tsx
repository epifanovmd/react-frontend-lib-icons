import React, { FC, memo } from 'react';
import StarCogOutlineSvg from '../svg/star-cog-outline.svg';

export interface IStarCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCogOutlineIcon: FC<IStarCogOutlineIconProps> = memo(props => {
  return <StarCogOutlineSvg {...props} />;
});

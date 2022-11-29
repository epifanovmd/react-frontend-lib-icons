import React, { FC, memo } from 'react';
import StarOutlineSvg from '../svg/star-outline.svg';

export interface IStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarOutlineIcon: FC<IStarOutlineIconProps> = memo(props => {
  return <StarOutlineSvg {...props} />;
});

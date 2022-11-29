import React, { FC, memo } from 'react';
import StarCheckOutlineSvg from '../svg/star-check-outline.svg';

export interface IStarCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCheckOutlineIcon: FC<IStarCheckOutlineIconProps> = memo(props => {
  return <StarCheckOutlineSvg {...props} />;
});

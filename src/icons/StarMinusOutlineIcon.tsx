import React, { FC, memo } from 'react';
import StarMinusOutlineSvg from '../svg/star-minus-outline.svg';

export interface IStarMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarMinusOutlineIcon: FC<IStarMinusOutlineIconProps> = memo(props => {
  return <StarMinusOutlineSvg {...props} />;
});

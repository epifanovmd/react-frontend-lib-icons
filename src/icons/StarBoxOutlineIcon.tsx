import React, { FC, memo } from 'react';
import StarBoxOutlineSvg from '../svg/star-box-outline.svg';

export interface IStarBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarBoxOutlineIcon: FC<IStarBoxOutlineIconProps> = memo(props => {
  return <StarBoxOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import StarBoxMultipleOutlineSvg from '../svg/star-box-multiple-outline.svg';

export interface IStarBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarBoxMultipleOutlineIcon: FC<IStarBoxMultipleOutlineIconProps> = memo(props => {
  return <StarBoxMultipleOutlineSvg {...props} />;
});

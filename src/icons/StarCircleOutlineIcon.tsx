import React, { FC, memo } from 'react';
import StarCircleOutlineSvg from '../svg/star-circle-outline.svg';

export interface IStarCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarCircleOutlineIcon: FC<IStarCircleOutlineIconProps> = memo(props => {
  return <StarCircleOutlineSvg {...props} />;
});

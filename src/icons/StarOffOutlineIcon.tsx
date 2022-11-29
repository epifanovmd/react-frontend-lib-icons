import React, { FC, memo } from 'react';
import StarOffOutlineSvg from '../svg/star-off-outline.svg';

export interface IStarOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarOffOutlineIcon: FC<IStarOffOutlineIconProps> = memo(props => {
  return <StarOffOutlineSvg {...props} />;
});

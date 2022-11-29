import React, { FC, memo } from 'react';
import StarBoxSvg from '../svg/star-box.svg';

export interface IStarBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarBoxIcon: FC<IStarBoxIconProps> = memo(props => {
  return <StarBoxSvg {...props} />;
});

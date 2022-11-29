import React, { FC, memo } from 'react';
import StarRemoveSvg from '../svg/star-remove.svg';

export interface IStarRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarRemoveIcon: FC<IStarRemoveIconProps> = memo(props => {
  return <StarRemoveSvg {...props} />;
});

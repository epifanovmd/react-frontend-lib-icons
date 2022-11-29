import React, { FC, memo } from 'react';
import StarRemoveOutlineSvg from '../svg/star-remove-outline.svg';

export interface IStarRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarRemoveOutlineIcon: FC<IStarRemoveOutlineIconProps> = memo(props => {
  return <StarRemoveOutlineSvg {...props} />;
});

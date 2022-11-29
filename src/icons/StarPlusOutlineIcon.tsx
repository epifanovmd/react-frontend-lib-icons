import React, { FC, memo } from 'react';
import StarPlusOutlineSvg from '../svg/star-plus-outline.svg';

export interface IStarPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarPlusOutlineIcon: FC<IStarPlusOutlineIconProps> = memo(props => {
  return <StarPlusOutlineSvg {...props} />;
});

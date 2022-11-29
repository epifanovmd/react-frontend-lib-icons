import React, { FC, memo } from 'react';
import StarPlusSvg from '../svg/star-plus.svg';

export interface IStarPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarPlusIcon: FC<IStarPlusIconProps> = memo(props => {
  return <StarPlusSvg {...props} />;
});

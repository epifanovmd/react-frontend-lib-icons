import React, { FC, memo } from 'react';
import AllInclusiveSvg from '../svg/all-inclusive.svg';

export interface IAllInclusiveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AllInclusiveIcon: FC<IAllInclusiveIconProps> = memo(props => {
  return <AllInclusiveSvg {...props} />;
});

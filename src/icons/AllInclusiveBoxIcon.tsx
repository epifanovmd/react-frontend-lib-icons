import React, { FC, memo } from 'react';
import AllInclusiveBoxSvg from '../svg/all-inclusive-box.svg';

export interface IAllInclusiveBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AllInclusiveBoxIcon: FC<IAllInclusiveBoxIconProps> = memo(props => {
  return <AllInclusiveBoxSvg {...props} />;
});

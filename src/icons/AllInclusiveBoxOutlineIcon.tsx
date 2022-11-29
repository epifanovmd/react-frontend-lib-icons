import React, { FC, memo } from 'react';
import AllInclusiveBoxOutlineSvg from '../svg/all-inclusive-box-outline.svg';

export interface IAllInclusiveBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AllInclusiveBoxOutlineIcon: FC<IAllInclusiveBoxOutlineIconProps> = memo(props => {
  return <AllInclusiveBoxOutlineSvg {...props} />;
});

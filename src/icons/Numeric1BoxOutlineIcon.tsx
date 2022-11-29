import React, { FC, memo } from 'react';
import Numeric1BoxOutlineSvg from '../svg/numeric-1-box-outline.svg';

export interface INumeric1BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1BoxOutlineIcon: FC<INumeric1BoxOutlineIconProps> = memo(props => {
  return <Numeric1BoxOutlineSvg {...props} />;
});

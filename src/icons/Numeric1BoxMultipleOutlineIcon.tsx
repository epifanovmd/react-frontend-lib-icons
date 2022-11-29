import React, { FC, memo } from 'react';
import Numeric1BoxMultipleOutlineSvg from '../svg/numeric-1-box-multiple-outline.svg';

export interface INumeric1BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1BoxMultipleOutlineIcon: FC<INumeric1BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric1BoxMultipleOutlineSvg {...props} />;
});

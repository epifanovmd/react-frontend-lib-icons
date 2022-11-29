import React, { FC, memo } from 'react';
import Numeric10BoxOutlineSvg from '../svg/numeric-10-box-outline.svg';

export interface INumeric10BoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10BoxOutlineIcon: FC<INumeric10BoxOutlineIconProps> = memo(props => {
  return <Numeric10BoxOutlineSvg {...props} />;
});

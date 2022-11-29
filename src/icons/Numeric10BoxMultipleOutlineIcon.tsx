import React, { FC, memo } from 'react';
import Numeric10BoxMultipleOutlineSvg from '../svg/numeric-10-box-multiple-outline.svg';

export interface INumeric10BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10BoxMultipleOutlineIcon: FC<INumeric10BoxMultipleOutlineIconProps> = memo(props => {
  return <Numeric10BoxMultipleOutlineSvg {...props} />;
});

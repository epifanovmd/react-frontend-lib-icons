import React, { FC, memo } from 'react';
import PailMinusOutlineSvg from '../svg/pail-minus-outline.svg';

export interface IPailMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PailMinusOutlineIcon: FC<IPailMinusOutlineIconProps> = memo(props => {
  return <PailMinusOutlineSvg {...props} />;
});

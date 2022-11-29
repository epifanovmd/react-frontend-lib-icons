import React, { FC, memo } from 'react';
import MagnifyMinusOutlineSvg from '../svg/magnify-minus-outline.svg';

export interface IMagnifyMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyMinusOutlineIcon: FC<IMagnifyMinusOutlineIconProps> = memo(props => {
  return <MagnifyMinusOutlineSvg {...props} />;
});

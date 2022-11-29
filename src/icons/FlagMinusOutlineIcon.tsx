import React, { FC, memo } from 'react';
import FlagMinusOutlineSvg from '../svg/flag-minus-outline.svg';

export interface IFlagMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagMinusOutlineIcon: FC<IFlagMinusOutlineIconProps> = memo(props => {
  return <FlagMinusOutlineSvg {...props} />;
});

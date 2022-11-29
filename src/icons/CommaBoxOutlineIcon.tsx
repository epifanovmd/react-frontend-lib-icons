import React, { FC, memo } from 'react';
import CommaBoxOutlineSvg from '../svg/comma-box-outline.svg';

export interface ICommaBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommaBoxOutlineIcon: FC<ICommaBoxOutlineIconProps> = memo(props => {
  return <CommaBoxOutlineSvg {...props} />;
});

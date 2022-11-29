import React, { FC, memo } from 'react';
import CommaBoxSvg from '../svg/comma-box.svg';

export interface ICommaBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommaBoxIcon: FC<ICommaBoxIconProps> = memo(props => {
  return <CommaBoxSvg {...props} />;
});

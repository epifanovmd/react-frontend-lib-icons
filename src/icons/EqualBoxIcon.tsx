import React, { FC, memo } from 'react';
import EqualBoxSvg from '../svg/equal-box.svg';

export interface IEqualBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EqualBoxIcon: FC<IEqualBoxIconProps> = memo(props => {
  return <EqualBoxSvg {...props} />;
});

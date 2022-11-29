import React, { FC, memo } from 'react';
import CheckBoldSvg from '../svg/check-bold.svg';

export interface ICheckBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckBoldIcon: FC<ICheckBoldIconProps> = memo(props => {
  return <CheckBoldSvg {...props} />;
});

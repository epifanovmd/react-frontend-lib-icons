import React, { FC, memo } from 'react';
import CheckSvg from '../svg/check.svg';

export interface ICheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckIcon: FC<ICheckIconProps> = memo(props => {
  return <CheckSvg {...props} />;
});

import React, { FC, memo } from 'react';
import CheckAllSvg from '../svg/check-all.svg';

export interface ICheckAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckAllIcon: FC<ICheckAllIconProps> = memo(props => {
  return <CheckAllSvg {...props} />;
});

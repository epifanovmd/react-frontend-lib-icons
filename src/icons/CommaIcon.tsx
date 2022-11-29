import React, { FC, memo } from 'react';
import CommaSvg from '../svg/comma.svg';

export interface ICommaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommaIcon: FC<ICommaIconProps> = memo(props => {
  return <CommaSvg {...props} />;
});

import React, { FC, memo } from 'react';
import CheckbookSvg from '../svg/checkbook.svg';

export interface ICheckbookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckbookIcon: FC<ICheckbookIconProps> = memo(props => {
  return <CheckbookSvg {...props} />;
});

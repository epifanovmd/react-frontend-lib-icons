import React, { FC, memo } from 'react';
import RowingSvg from '../svg/rowing.svg';

export interface IRowingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RowingIcon: FC<IRowingIconProps> = memo(props => {
  return <RowingSvg {...props} />;
});

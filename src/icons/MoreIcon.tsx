import React, { FC, memo } from 'react';
import MoreSvg from '../svg/more.svg';

export interface IMoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoreIcon: FC<IMoreIconProps> = memo(props => {
  return <MoreSvg {...props} />;
});

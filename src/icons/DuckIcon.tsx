import React, { FC, memo } from 'react';
import DuckSvg from '../svg/duck.svg';

export interface IDuckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DuckIcon: FC<IDuckIconProps> = memo(props => {
  return <DuckSvg {...props} />;
});

import React, { FC, memo } from 'react';
import SquareRootSvg from '../svg/square-root.svg';

export interface ISquareRootIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareRootIcon: FC<ISquareRootIconProps> = memo(props => {
  return <SquareRootSvg {...props} />;
});

import React, { FC, memo } from 'react';
import SquareRootBoxSvg from '../svg/square-root-box.svg';

export interface ISquareRootBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareRootBoxIcon: FC<ISquareRootBoxIconProps> = memo(props => {
  return <SquareRootBoxSvg {...props} />;
});

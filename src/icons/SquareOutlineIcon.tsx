import React, { FC, memo } from 'react';
import SquareOutlineSvg from '../svg/square-outline.svg';

export interface ISquareOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareOutlineIcon: FC<ISquareOutlineIconProps> = memo(props => {
  return <SquareOutlineSvg {...props} />;
});

import React, { FC, memo } from 'react';
import SquareRoundedOutlineSvg from '../svg/square-rounded-outline.svg';

export interface ISquareRoundedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareRoundedOutlineIcon: FC<ISquareRoundedOutlineIconProps> = memo(props => {
  return <SquareRoundedOutlineSvg {...props} />;
});

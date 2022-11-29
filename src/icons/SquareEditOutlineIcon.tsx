import React, { FC, memo } from 'react';
import SquareEditOutlineSvg from '../svg/square-edit-outline.svg';

export interface ISquareEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareEditOutlineIcon: FC<ISquareEditOutlineIconProps> = memo(props => {
  return <SquareEditOutlineSvg {...props} />;
});

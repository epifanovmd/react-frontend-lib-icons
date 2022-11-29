import React, { FC, memo } from 'react';
import SquareMediumOutlineSvg from '../svg/square-medium-outline.svg';

export interface ISquareMediumOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareMediumOutlineIcon: FC<ISquareMediumOutlineIconProps> = memo(props => {
  return <SquareMediumOutlineSvg {...props} />;
});

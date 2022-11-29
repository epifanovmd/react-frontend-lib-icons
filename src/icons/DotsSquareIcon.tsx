import React, { FC, memo } from 'react';
import DotsSquareSvg from '../svg/dots-square.svg';

export interface IDotsSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsSquareIcon: FC<IDotsSquareIconProps> = memo(props => {
  return <DotsSquareSvg {...props} />;
});

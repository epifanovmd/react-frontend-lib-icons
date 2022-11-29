import React, { FC, memo } from 'react';
import IronBoardSvg from '../svg/iron-board.svg';

export interface IIronBoardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IronBoardIcon: FC<IIronBoardIconProps> = memo(props => {
  return <IronBoardSvg {...props} />;
});

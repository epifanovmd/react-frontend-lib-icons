import React, { FC, memo } from 'react';
import BulletinBoardSvg from '../svg/bulletin-board.svg';

export interface IBulletinBoardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BulletinBoardIcon: FC<IBulletinBoardIconProps> = memo(props => {
  return <BulletinBoardSvg {...props} />;
});

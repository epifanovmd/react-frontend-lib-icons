import React, { FC, memo } from 'react';
import DeveloperBoardSvg from '../svg/developer-board.svg';

export interface IDeveloperBoardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeveloperBoardIcon: FC<IDeveloperBoardIconProps> = memo(props => {
  return <DeveloperBoardSvg {...props} />;
});

import React, { FC, memo } from 'react';
import MineSvg from '../svg/mine.svg';

export interface IMineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MineIcon: FC<IMineIconProps> = memo(props => {
  return <MineSvg {...props} />;
});

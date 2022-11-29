import React, { FC, memo } from 'react';
import HandsPraySvg from '../svg/hands-pray.svg';

export interface IHandsPrayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandsPrayIcon: FC<IHandsPrayIconProps> = memo(props => {
  return <HandsPraySvg {...props} />;
});

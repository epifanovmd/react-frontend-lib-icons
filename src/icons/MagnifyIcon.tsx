import React, { FC, memo } from 'react';
import MagnifySvg from '../svg/magnify.svg';

export interface IMagnifyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyIcon: FC<IMagnifyIconProps> = memo(props => {
  return <MagnifySvg {...props} />;
});

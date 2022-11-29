import React, { FC, memo } from 'react';
import WindowRestoreSvg from '../svg/window-restore.svg';

export interface IWindowRestoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowRestoreIcon: FC<IWindowRestoreIconProps> = memo(props => {
  return <WindowRestoreSvg {...props} />;
});

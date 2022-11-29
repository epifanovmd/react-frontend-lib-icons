import React, { FC, memo } from 'react';
import PaperclipLockSvg from '../svg/paperclip-lock.svg';

export interface IPaperclipLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipLockIcon: FC<IPaperclipLockIconProps> = memo(props => {
  return <PaperclipLockSvg {...props} />;
});

import React, { FC, memo } from 'react';
import PaperclipOffSvg from '../svg/paperclip-off.svg';

export interface IPaperclipOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipOffIcon: FC<IPaperclipOffIconProps> = memo(props => {
  return <PaperclipOffSvg {...props} />;
});

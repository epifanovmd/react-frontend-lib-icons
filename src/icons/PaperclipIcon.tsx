import React, { FC, memo } from 'react';
import PaperclipSvg from '../svg/paperclip.svg';

export interface IPaperclipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipIcon: FC<IPaperclipIconProps> = memo(props => {
  return <PaperclipSvg {...props} />;
});

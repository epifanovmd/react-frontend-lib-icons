import React, { FC, memo } from 'react';
import PaperclipCheckSvg from '../svg/paperclip-check.svg';

export interface IPaperclipCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipCheckIcon: FC<IPaperclipCheckIconProps> = memo(props => {
  return <PaperclipCheckSvg {...props} />;
});

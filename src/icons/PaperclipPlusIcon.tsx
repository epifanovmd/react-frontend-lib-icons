import React, { FC, memo } from 'react';
import PaperclipPlusSvg from '../svg/paperclip-plus.svg';

export interface IPaperclipPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipPlusIcon: FC<IPaperclipPlusIconProps> = memo(props => {
  return <PaperclipPlusSvg {...props} />;
});

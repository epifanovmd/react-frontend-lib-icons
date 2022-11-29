import React, { FC, memo } from 'react';
import PaperclipRemoveSvg from '../svg/paperclip-remove.svg';

export interface IPaperclipRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipRemoveIcon: FC<IPaperclipRemoveIconProps> = memo(props => {
  return <PaperclipRemoveSvg {...props} />;
});

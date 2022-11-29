import React, { FC, memo } from 'react';
import PaperclipMinusSvg from '../svg/paperclip-minus.svg';

export interface IPaperclipMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperclipMinusIcon: FC<IPaperclipMinusIconProps> = memo(props => {
  return <PaperclipMinusSvg {...props} />;
});

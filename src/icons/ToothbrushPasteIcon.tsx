import React, { FC, memo } from 'react';
import ToothbrushPasteSvg from '../svg/toothbrush-paste.svg';

export interface IToothbrushPasteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToothbrushPasteIcon: FC<IToothbrushPasteIconProps> = memo(props => {
  return <ToothbrushPasteSvg {...props} />;
});

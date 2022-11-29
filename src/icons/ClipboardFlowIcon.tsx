import React, { FC, memo } from 'react';
import ClipboardFlowSvg from '../svg/clipboard-flow.svg';

export interface IClipboardFlowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardFlowIcon: FC<IClipboardFlowIconProps> = memo(props => {
  return <ClipboardFlowSvg {...props} />;
});

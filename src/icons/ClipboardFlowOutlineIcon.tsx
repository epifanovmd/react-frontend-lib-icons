import React, { FC, memo } from 'react';
import ClipboardFlowOutlineSvg from '../svg/clipboard-flow-outline.svg';

export interface IClipboardFlowOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardFlowOutlineIcon: FC<IClipboardFlowOutlineIconProps> = memo(props => {
  return <ClipboardFlowOutlineSvg {...props} />;
});

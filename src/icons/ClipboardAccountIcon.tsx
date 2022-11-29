import React, { FC, memo } from 'react';
import ClipboardAccountSvg from '../svg/clipboard-account.svg';

export interface IClipboardAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardAccountIcon: FC<IClipboardAccountIconProps> = memo(props => {
  return <ClipboardAccountSvg {...props} />;
});

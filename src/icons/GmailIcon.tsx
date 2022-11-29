import React, { FC, memo } from 'react';
import GmailSvg from '../svg/gmail.svg';

export interface IGmailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GmailIcon: FC<IGmailIconProps> = memo(props => {
  return <GmailSvg {...props} />;
});

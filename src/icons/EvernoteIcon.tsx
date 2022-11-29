import React, { FC, memo } from 'react';
import EvernoteSvg from '../svg/evernote.svg';

export interface IEvernoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvernoteIcon: FC<IEvernoteIconProps> = memo(props => {
  return <EvernoteSvg {...props} />;
});
